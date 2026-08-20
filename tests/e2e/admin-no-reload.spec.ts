import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Regression: /admin/ must NOT reload when a content file changes.
 *
 * Root cause of the Sveltia session bug: the dev server's live reload
 * reloads /admin when src/content/** changes, wiping the FS permission
 * granted via showDirectoryPicker (mode: 'readwrite').
 *
 * Strategy:
 *   1. Load /admin/ and wait for the Sveltia CMS script tag (proves the
 *      admin page rendered).
 *   2. Plant `window.__adminMarker = 1`.
 *   3. Touch a real content file in src/content/pages/ — rewrite the SAME
 *      bytes (fires the dev-server watcher without changing content) and
 *      bump mtime via utimesSync.
 *   4. Wait 5s (a reload would fire in <1s).
 *   5. Assert the page did NOT reload: URL unchanged AND marker still 1.
 *
 * Baseline: this spec is expected to FAIL (RED) while the Astro admin.astro
 * route is still active — a reload wipes the marker. It turns GREEN once the
 * static-port fix (public/admin/index.html) lands.
 *
 * Cleanup: the touched file is restored to its exact original bytes in a
 * finally block, so `git status` stays clean after the run.
 */

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'pages');

/** Pick the first .md file in src/content/pages (deterministic, sorted). */
function pickContentFile(): string | null {
  if (!fs.existsSync(CONTENT_DIR)) return null;
  const mdFiles = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort();
  return mdFiles.length > 0 ? path.join(CONTENT_DIR, mdFiles[0]) : null;
}

test('/admin/ does not reload when a content file changes', async ({
  page,
}) => {
  const targetFile = pickContentFile();
  test.skip(
    !targetFile,
    'No .md file found in src/content/pages — cannot run the no-reload regression'
  );

  const originalContent = fs.readFileSync(targetFile!, 'utf8');

  // Secondary signal: count main-frame navigations (initial load = 1).
  let mainFrameNavigations = 0;
  page.on('framenavigated', (frame) => {
    if (frame === page.mainFrame()) mainFrameNavigations += 1;
  });

  try {
    await page.goto('/admin/', { waitUntil: 'domcontentloaded' });

    // Sveltia CMS script must be present — proves we are on the admin page.
    await expect(page.locator('script[src*="sveltia-cms"]')).toHaveCount(1, {
      timeout: 10_000,
    });

    // Plant the marker. A full reload wipes it.
    await page.evaluate(() => {
      (window as unknown as { __adminMarker?: number }).__adminMarker = 1;
    });

    const urlBefore = page.url();

    // Touch the content file with a REAL content change (append a marker
    // line). Identical-bytes rewrites + utimes do NOT reliably fire Astro's
    // content watcher; an actual byte change always does. The exact original
    // bytes are restored in the finally block, so git status stays clean.
    fs.appendFileSync(targetFile!, '\n<!-- e2e-no-reload-touch -->\n');
    const now = new Date();
    fs.utimesSync(targetFile!, now, now);

    // Give the dev server ample time to react (a reload would fire in <1s).
    await page.waitForTimeout(5000);

    // Assert: no reload happened.
    expect(page.url()).toBe(urlBefore);
    expect(mainFrameNavigations).toBe(1);
    const marker = await page.evaluate(
      () => (window as unknown as { __adminMarker?: number }).__adminMarker
    );
    expect(marker).toBe(1);
  } finally {
    // Restore exact original bytes — git status stays clean.
    fs.writeFileSync(targetFile!, originalContent);
  }
});
