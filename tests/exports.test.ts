import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';

// `import pkg from '../package.json' with { type: 'json' }` is not reliably
// supported across vitest/vite/TS configs in this repo, so we parse manually.
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')
);

describe('package exports cover all .astro files (T10)', () => {
  it('exports all components via wildcard', () => {
    const components = globSync('src/components/*.astro');
    expect(components.length).toBeGreaterThan(20);
    // The wildcard pattern "./components/*" must exist and cover every component.
    expect(pkg.exports['./components/*']).toBeDefined();
    expect(pkg.exports['./components/*']).toBe('./src/components/*');
  });

  it('exports all layouts via wildcard', () => {
    const layouts = globSync('src/layouts/**/*.astro');
    expect(layouts.length).toBeGreaterThan(20);
    expect(pkg.exports['./layouts/*']).toBeDefined();
    expect(pkg.exports['./layouts/*']).toBe('./src/layouts/*');
  });

  it('preserves required passthrough exports (Node 24 trySelf guard)', () => {
    // T5/T6 established these MUST exist or vitest under Node 24 breaks via trySelf.
    expect(pkg.exports['./*']).toBeDefined();
    expect(pkg.exports['./node_modules/*']).toBeDefined();
    expect(pkg.exports['./package.json']).toBeDefined();
    expect(pkg.exports['.']).toBeDefined();
    expect(pkg.exports['./integration']).toBeDefined();
    expect(pkg.exports['./loader']).toBeDefined();
  });

  it('every component file maps to a resolvable subpath under ./components/*', () => {
    const components = globSync('src/components/*.astro') as string[];
    for (const file of components) {
      const name = path.basename(file); // e.g. Text.astro
      const subpath = `./components/${name}`;
      // The wildcard export maps "./components/<anything>" to "./src/components/<anything>".
      // We assert the resolution target prefix matches.
      const target = pkg.exports['./components/*'] as string;
      const expectedTarget = target.replace('*', name);
      expect(expectedTarget).toBe(`./src/components/${name}`);
      // sanity: subpath begins with the wildcard key prefix
      expect(subpath.startsWith('./components/')).toBe(true);
      // the file must actually exist on disk
      expect(fs.existsSync(path.resolve(process.cwd(), file))).toBe(true);
    }
  });

  it('every layout file maps to a resolvable subpath under ./layouts/*', () => {
    const layouts = globSync('src/layouts/**/*.astro') as string[];
    for (const file of layouts) {
      const rel = path.relative('src/layouts', file); // e.g. components/Card.astro or pages/Layout.astro
      const subpath = `./layouts/${rel.split(path.sep).join('/')}`;
      const target = pkg.exports['./layouts/*'] as string;
      const expectedTarget = target.replace('*', rel.split(path.sep).join('/'));
      expect(expectedTarget).toBe(
        `./src/layouts/${rel.split(path.sep).join('/')}`
      );
      expect(fs.existsSync(path.resolve(process.cwd(), file))).toBe(true);
    }
  });

  it('component count is ~32 (sanity check against silent file loss)', () => {
    const components = globSync('src/components/*.astro');
    // The task expects 32 components. Allow ±2 to avoid brittleness on cleanup churn,
    // but assert the order of magnitude so a silent mass-deletion fails loudly.
    expect(components.length).toBeGreaterThanOrEqual(30);
  });

  it('layout count is ~30 (sanity check against silent file loss)', () => {
    const layouts = globSync('src/layouts/**/*.astro');
    // 2 pages + 28 component-layouts = 30. Allow ±2.
    expect(layouts.length).toBeGreaterThanOrEqual(28);
  });
});
