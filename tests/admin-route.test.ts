import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import core from '../integration';

/**
 * Static admin migration: `/admin` is no longer an SSR route.
 * The Sveltia CMS shell is a plain `public/admin/index.html` copied from
 * the package into the consumer's `public/admin/` (skip-if-exists).
 *
 * Strategy: real temp fixture directory (mkdtemp + chdir), following the
 * canonical pattern of tests/yaml-merge-plugin.test.ts — NO vi.mock of fs,
 * so the copy logic is exercised end-to-end against the real package files.
 */

/** Package root (where the real `public/admin/index.html` source lives). */
const pkgRoot = path.resolve(__dirname, '..');

describe('static admin shell (no /admin route)', () => {
  let tmpRoot: string;
  let origCwd: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'admin-static-'));
    origCwd = process.cwd();
    process.chdir(tmpRoot);
  });

  afterEach(() => {
    process.chdir(origCwd);
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  /** Run the real astro:config:setup hook with stubbed Astro callbacks. */
  async function runHook() {
    const integration = core({ repo: 'org/repo' });
    const injectRoute = vi.fn();
    const injectScript = vi.fn();
    const updateConfig = vi.fn();
    await integration.hooks['astro:config:setup']!({
      config: {} as any,
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

  it('does NOT inject an /admin route (exactly 2 routes: / and /[slug])', async () => {
    const { injectRoute } = await runHook();
    const routes = injectRoute.mock.calls.map((c) => c[0]);
    const patterns = routes.map((r) => r.pattern);
    expect(patterns).toHaveLength(2);
    // Explicit negative assertions — the admin is static now.
    expect(patterns).not.toContain('/admin');
    expect(patterns.some((p) => p.startsWith('/admin'))).toBe(false);
    // The two remaining routes are intact.
    expect(patterns).toContain('/');
    expect(patterns).toContain('/[slug]');
  });

  it('copies package public/admin/index.html into the consumer public dir', async () => {
    await runHook();
    const dest = path.join(tmpRoot, 'public/admin/index.html');
    expect(fs.existsSync(dest)).toBe(true);
    const copied = fs.readFileSync(dest, 'utf8');
    // Byte-identical to the package source.
    const source = fs.readFileSync(
      path.join(pkgRoot, 'public/admin/index.html'),
      'utf8'
    );
    expect(copied).toBe(source);
    // Sanity: it really is the Sveltia CMS shell (patches preserved).
    expect(copied).toMatch(/sveltia-cms/i);
    expect(copied).toMatch(/showDirectoryPicker/);
  });

  it('skip-if-exists: a pre-existing consumer index.html is NOT overwritten', async () => {
    const dest = path.join(tmpRoot, 'public/admin/index.html');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, 'CONSUMER-OWN-ADMIN');
    await runHook();
    expect(fs.readFileSync(dest, 'utf8')).toBe('CONSUMER-OWN-ADMIN');
  });
});
