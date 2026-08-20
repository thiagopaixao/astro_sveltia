import { describe, it, expect, vi } from 'vitest';
import core from '../integration';
import { overrideAliases } from '../src/integration/override-aliases';
import { createYamlMergePlugin } from '../src/vite/yaml-merge-plugin';

/**
 * T13: full assembly of the `@documental-xyz/core` integration hook.
 * Validates that `astro:config:setup`:
 *   - injects / and /[slug] routes with absolute paths (admin is static)
 *   - injects global CSS via page-ssr script
 *   - calls updateConfig with the YAML merge Vite plugin
 *   - calls updateConfig with Vite resolve.alias overrides
 */
describe('core() integration full assembly', () => {
  /** Helper: invoke the hook with stubbed Astro callbacks. */
  async function runHook(opts: { repo?: string } = { repo: 'org/repo' }) {
    const integration = core(opts as any);
    const injectRoute = vi.fn();
    const injectScript = vi.fn();
    const updateConfig = vi.fn();
    const configBefore = {} as any;
    await integration.hooks['astro:config:setup']!({
      config: configBefore,
      command: 'dev',
      isRestart: false,
      injectRoute,
      injectScript,
      updateConfig,
      addRenderer: vi.fn(),
      addWatchFile: vi.fn(),
      addClientDirective: vi.fn(),
      addMiddleware: vi.fn(),
      addDevToolbarApp: vi.fn(),
      createCodegenDir: vi.fn(),
      logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() } as any,
    } as any);
    return { injectRoute, injectScript, updateConfig };
  }

  it('hook injects exactly / and /[slug] routes with absolute paths', async () => {
    const { injectRoute } = await runHook();
    const routes = injectRoute.mock.calls.map((c) => c[0]);
    expect(routes).toHaveLength(2);
    const patterns = routes.map((r) => r.pattern);
    expect(patterns).toContain('/');
    expect(patterns).toContain('/[slug]');
    // The admin UI is a static public/admin/index.html — never an SSR route.
    expect(patterns).not.toContain('/admin');
    // Entrypoints must be absolute paths (resolved via import.meta.url),
    // not bare specifiers — Astro requires this for self-referencing packages.
    for (const r of routes) {
      expect(r.entrypoint).toMatch(/^(\/|[A-Z]:\\)/); // absolute path
    }
  });

  it('hook calls injectScript with page-ssr for global CSS', async () => {
    const { injectScript } = await runHook();
    expect(injectScript).toHaveBeenCalled();
    const args = injectScript.mock.calls[0];
    expect(args[0]).toBe('page-ssr');
    expect(args[1]).toContain('main.scss');
  });

  it('hook calls updateConfig with vite.plugins containing yaml merge', async () => {
    const { updateConfig } = await runHook();
    expect(updateConfig).toHaveBeenCalled();
    const cfg = updateConfig.mock.calls[0][0];
    expect(Array.isArray(cfg.vite.plugins)).toBe(true);
    expect(cfg.vite.plugins.length).toBeGreaterThanOrEqual(1);
    // The plugin should be the YAML merge plugin instance (name check).
    expect(cfg.vite.plugins[0].name).toBe(
      createYamlMergePlugin({ repo: 'x/y' }).name
    );
  });

  it('hook calls updateConfig with vite.resolve.alias for overrides', async () => {
    const { updateConfig } = await runHook();
    const cfg = updateConfig.mock.calls[0][0];
    expect(Array.isArray(cfg.vite.resolve.alias)).toBe(true);
  });

  it('throws on missing repo', () => {
    expect(() => core({} as any)).toThrow(/repo/i);
  });
});

describe('overrideAliases()', () => {
  it('returns an array of { find, replacement } alias objects', () => {
    const aliases = overrideAliases();
    expect(Array.isArray(aliases)).toBe(true);
    for (const a of aliases) {
      expect(typeof a.find).toBe('string');
      expect(typeof a.replacement).toBe('string');
    }
  });

  it('returns empty array when no local overrides exist', () => {
    // /tmp/opencode has no src/components or src/layouts
    const aliases = overrideAliases('/tmp/opencode');
    expect(aliases).toEqual([]);
  });

  it('detects local .astro files in src/components', () => {
    // This repo HAS src/components/*.astro, so it should produce aliases.
    const aliases = overrideAliases();
    const coreName = '@documental-xyz/core';
    // at minimum, Text.astro or Card.astro should appear
    const sample = aliases.find((a) =>
      a.find.startsWith(`${coreName}/components/`)
    );
    expect(sample).toBeDefined();
  });
});
