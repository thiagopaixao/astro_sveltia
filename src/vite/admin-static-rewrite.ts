/**
 * Vite plugin (dev-only): rewrites `/admin` and `/admin/` requests to the
 * static `public/admin/index.html`.
 *
 * The admin UI is a plain static file copied into the consumer's public dir
 * by the integration (skip-if-exists). Static hosts and `astro preview`
 * resolve `/admin/` → `admin/index.html` automatically, but Astro's dev
 * server serves public files verbatim with no directory-index resolution,
 * so `/admin/` would 404 in dev without this rewrite. No production build
 * output is affected (`apply: 'serve'`).
 *
 * @packageDocumentation
 */

import type { Plugin } from 'vite';

/** Admin URLs that must resolve to the static shell in the dev server. */
const ADMIN_PATHS = new Set(['/admin', '/admin/']);

/** See {@link createAdminStaticRewritePlugin}. */
export function createAdminStaticRewritePlugin(): Plugin {
  return {
    name: 'documental-core:admin-static-rewrite',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const pathname = (req.url ?? '').split('?')[0];
        if (ADMIN_PATHS.has(pathname)) {
          req.url = '/admin/index.html';
        }
        next();
      });
    },
  };
}
