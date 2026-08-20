import type { AstroIntegration } from 'astro';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import { createYamlMergePlugin } from './src/vite/yaml-merge-plugin';
import { createAdminStaticRewritePlugin } from './src/vite/admin-static-rewrite';
import { overrideAliases } from './src/integration/override-aliases';

/** Directory of this module — used to resolve injectRoute entrypoints and
 *  packaged static assets (e.g. public/admin/index.html) as absolute paths,
 *  which Astro requires. Bare specifiers like
 *  `@documental-xyz/core/routes/index.astro` do NOT resolve when the integration
 *  is consumed from the same repo (test harness / self-referencing package).
 *  Absolute paths work in both self-referencing and node_modules install. */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export interface CoreOptions {
  /** GitHub repo for Sveltia CMS backend, e.g. 'documental-xyz/starter' */
  repo: string;
  /** Git branch for CMS backend (default 'main') */
  branch?: string;
  /** Sveltia CMS auth worker URL */
  authBaseUrl?: string;
  /** Media folder path (default 'public/uploads') */
  mediaFolder?: string;
  /** Public folder URL prefix (default 'uploads') */
  publicFolder?: string;
  /** Pages collection folder path (default 'src/content/pages') */
  pagesFolder?: string;
  /** Site URL override (fallback: process.env.SITE) */
  site?: string;
  /** Base path override (fallback: process.env.BASE_PATH) */
  basePath?: string;
}

/**
 * `@documental-xyz/core` Astro integration factory.
 *
 * Public entry point: `astro.config.mjs` → `integrations: [core({ repo: 'org/repo' })]`.
 *
 * The `astro:config:setup` hook:
 *   1. injects the `/` and `/[slug]` routes via absolute entrypoints
 *      (T1 POC, T10 wildcards);
 *   2. copies the static Sveltia CMS shell `public/admin/index.html` from
 *      the package into the consumer's `public/admin/` (skip-if-exists, so
 *      a consumer's own `public/admin/index.html` always wins — static
 *      admin shadowing, no SSR route needed);
 *   3. injects the global stylesheet on every page via `page-ssr` (T2 POC, T11);
 *   4. updates Vite config with:
 *      - the YAML merge plugin (T8) that regenerates `public/admin/config.yml`
 *        substituting `${REPO}`, `${BRANCH}`, etc. from integration options;
 *      - `resolve.alias` entries that let consumers drop a local `.astro` file
 *        in `src/components/` or `src/layouts/` to shadow the core's version
 *        (T2 POC finding #3 — exact full subpath with `.astro` extension).
 *
 * The static `src/pages/` route directory MUST NOT exist in the consumer —
 * this integration owns the `/` and `/[slug]` routes via `injectRoute`, and a
 * physical `src/pages/[slug].astro` would create a route conflict. The core
 * keeps its route entrypoints in `src/routes/` (not `src/pages/`) for this
 * reason.
 */
export default function core(options: CoreOptions): AstroIntegration {
  if (!options || !options.repo) {
    throw new Error('core(): "repo" option is required (e.g. "org/repo")');
  }

  return {
    name: '@documental-xyz/core',
    hooks: {
      'astro:config:setup': ({ injectRoute, injectScript, updateConfig }) => {
        // 1. Inject routes. Entrypoints MUST be absolute paths resolved
        //    relative to this module (`__dirname`). Astro 5's route-manifest
        //    resolver treats the entrypoint as a file path, and bare specifiers
        //    fail when the integration is consumed from the same repo
        //    (self-referencing test harness). Absolute paths work for both
        //    self-referencing and npm install.
        //    NOTE: `/admin` is NOT an injected route — the admin UI is a
        //    static `public/admin/index.html` copied below (step 2), served
        //    straight from the consumer's public dir.
        injectRoute({
          pattern: '/[slug]',
          entrypoint: path.resolve(__dirname, 'src/routes/[slug].astro'),
        });

        // Home page. Injected at `/` so no physical src/pages/ needed.
        injectRoute({
          pattern: '/',
          entrypoint: path.resolve(__dirname, 'src/routes/index.astro'),
        });

        // 2. Static admin shell. The Sveltia CMS UI is a plain HTML file
        //    (no SSR route), copied from the package into the consumer's
        //    `public/admin/`. Skip-if-exists: a consumer's own
        //    `public/admin/index.html` always wins, enabling shadowing the
        //    same way override-aliases enables component shadowing.
        //    Consumer dir = process.cwd() (same convention as the YAML
        //    merge plugin); package dir = `__dirname`.
        const srcAdminHtml = path.resolve(__dirname, 'public/admin/index.html');
        if (!fs.existsSync(srcAdminHtml)) {
          throw new Error(
            `@documental-xyz/core: admin shell not found at "${srcAdminHtml}". ` +
              'The published package must include public/admin/index.html.'
          );
        }
        const destAdminHtml = path.resolve(
          process.cwd(),
          'public/admin/index.html'
        );
        if (!fs.existsSync(destAdminHtml)) {
          fs.mkdirSync(path.dirname(destAdminHtml), { recursive: true });
          fs.copyFileSync(srcAdminHtml, destAdminHtml);
        }

        // 3. Global SCSS — compiled by the consumer's `sass` dep at build time.
        //    Resolves via T11's `./styles/*` wildcard export.
        injectScript(
          'page-ssr',
          'import "@documental-xyz/core/styles/main.scss"'
        );

        // 4. Update Vite config: YAML merge plugin + override aliases.
        //    `updateConfig` deep-merges, so this composes with any other
        //    integrations / user vite config cleanly (T2 POC).
        updateConfig({
          vite: {
            ssr: {
              noExternal: ['@documental-xyz/core'],
            },
            plugins: [
              createYamlMergePlugin({
                repo: options.repo,
                branch: options.branch,
                authBaseUrl: options.authBaseUrl,
                mediaFolder: options.mediaFolder,
                publicFolder: options.publicFolder,
                pagesFolder: options.pagesFolder,
              }),
              createAdminStaticRewritePlugin(),
            ],
            resolve: {
              alias: overrideAliases(),
            },
          },
        });
      },
    },
  };
}
