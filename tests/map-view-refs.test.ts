import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

/**
 * Task 3 — mapView ↔ views validator.
 *
 * Mirrors the REAL include/inheritance semantics of
 * src/layouts/pages/PageLayout.astro (NOT astro:content — its vitest alias
 * only exposes `z`):
 *
 * - Include resolution (:220-242): target = component.slug || component.targetSlug;
 *   page found by scanning data.slug first, entry id/filename as fallback.
 * - pageInclude.mainSlug inheritance (:56-77): a standalone page whose own
 *   frontmatter has no MapBox module inherits the parent's module (and thus
 *   its views). Own module always wins.
 * - Views are defined ONLY in the MapBox module (`modules[].views[].id`);
 *   refs are `mapView` fields on ANY component at ANY nesting depth
 *   (components have nested components via `components` arrays and
 *   column objects like `column1.components`).
 *
 * Pure functions are exported for reuse by Task 12 (resistencia_intro fix).
 */

// ---------------------------------------------------------------------------
// Pure validator functions (exported — reused by Task 12)
// ---------------------------------------------------------------------------

export interface ParsedPage {
  /** basename, e.g. "nhanderekoa-2.md" */
  file: string;
  /** raw frontmatter text between the --- fences */
  fmText: string;
  /** filename-derived id (Astro glob loader id / getEntry fallback key) */
  idFromFile: string;
  /** frontmatter slug if truthy, else filename-derived id */
  slug: string;
  /** parsed frontmatter object */
  data: any;
}

export interface IncludeGraph {
  /** slug → parent page resolved from pageInclude.mainSlug (null if none/unresolvable) */
  parentOf: Map<string, ParsedPage | null>;
  /** slug → pages whose top-level components Include this page (depth-1) */
  includersOf: Map<string, ParsedPage[]>;
}

export interface OrphanRef {
  file: string;
  slug: string;
  view: string;
  /** 1-based file line of the `mapView:` field, or null when line attribution
   * is ambiguous (e.g. flow-style YAML where raw scan and structural walk
   * disagree). The ref itself is still reported. */
  line: number | null;
}

/** Parse every `*.md` in dir. Files failing YAML parse are skipped with a
 * warning (non-ASCII filenames like `licenc╠ºa.md` must never crash us). */
export function parsePages(dir: string): ParsedPage[] {
  const pages: ParsedPage[] = [];
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith('.md')) continue;
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) continue;
    let data: any;
    try {
      data = yaml.load(match[1]);
    } catch (err) {
      // eslint-disable-next-line no-console -- graceful skip is part of the contract
      console.warn(
        `[map-view-refs] skipping ${file}: YAML parse failed: ${(err as Error).message}`
      );
      continue;
    }
    if (!data || typeof data !== 'object') continue;
    const idFromFile = file.replace(/\.md$/, '');
    pages.push({
      file,
      fmText: match[1],
      idFromFile,
      slug: typeof data.slug === 'string' && data.slug ? data.slug : idFromFile,
      data,
    });
  }
  return pages;
}

/** Recursively collect `mapView` refs from a component tree (any depth:
 * nested `components` arrays and column objects like column1/column2). */
export function collectMapViewRefs(
  components: unknown,
  out: string[] = []
): string[] {
  if (!Array.isArray(components)) return out;
  for (const component of components) {
    if (!component || typeof component !== 'object') continue;
    if (
      typeof (component as any).mapView === 'string' &&
      (component as any).mapView
    ) {
      out.push((component as any).mapView);
    }
    for (const value of Object.values(component)) {
      if (Array.isArray(value)) {
        collectMapViewRefs(value, out);
      } else if (
        value &&
        typeof value === 'object' &&
        Array.isArray((value as any).components)
      ) {
        collectMapViewRefs((value as any).components, out);
      }
    }
  }
  return out;
}

/** Recursively collect Include targets (slug || targetSlug) from a component tree. */
function collectIncludeTargets(
  components: unknown,
  out: string[] = []
): string[] {
  if (!Array.isArray(components)) return out;
  for (const component of components) {
    if (!component || typeof component !== 'object') continue;
    const c = component as any;
    if (
      c.type === 'Include' &&
      (typeof c.slug === 'string' || typeof c.targetSlug === 'string')
    ) {
      out.push(c.slug || c.targetSlug);
    }
    for (const value of Object.values(c)) {
      if (Array.isArray(value)) {
        collectIncludeTargets(value, out);
      } else if (
        value &&
        typeof value === 'object' &&
        Array.isArray((value as any).components)
      ) {
        collectIncludeTargets((value as any).components, out);
      }
    }
  }
  return out;
}

/** View ids defined by the page's own MapBox module (empty if no module). */
function ownModuleViews(data: any): { hasModule: boolean; views: Set<string> } {
  const modules = Array.isArray(data?.modules) ? data.modules : [];
  const mapbox = modules.find((m: any) => m && m.type === 'MapBox');
  if (!mapbox) return { hasModule: false, views: new Set() };
  const views = new Set<string>(
    (Array.isArray(mapbox.views) ? mapbox.views : [])
      .map((v: any) => (v && typeof v.id === 'string' ? v.id : ''))
      .filter(Boolean)
  );
  return { hasModule: true, views };
}

/** Build the depth-1 include graph with PageLayout resolution precedence:
 * frontmatter `data.slug` scan first, entry id/filename fallback. */
export function resolveIncludeGraph(pages: ParsedPage[]): IncludeGraph {
  const bySlug = new Map<string, ParsedPage>();
  const byId = new Map<string, ParsedPage>();
  for (const page of pages) {
    if (!bySlug.has(page.slug)) bySlug.set(page.slug, page);
    if (!byId.has(page.idFromFile)) byId.set(page.idFromFile, page);
  }
  const resolve = (target: string | null | undefined): ParsedPage | null => {
    if (!target) return null;
    return bySlug.get(target) ?? byId.get(target) ?? null;
  };

  const parentOf = new Map<string, ParsedPage | null>();
  const includersOf = new Map<string, ParsedPage[]>();
  for (const page of pages) {
    const mainSlug = page.data?.pageInclude?.mainSlug;
    parentOf.set(page.slug, mainSlug ? resolve(mainSlug) : null);
    includersOf.set(page.slug, []);
  }
  for (const page of pages) {
    for (const target of collectIncludeTargets(page.data?.components ?? [])) {
      const included = resolve(target);
      if (included) includersOf.get(included.slug)?.push(page);
    }
  }
  return { parentOf, includersOf };
}

/** Scan raw frontmatter lines for `mapView: <view>` with file line numbers.
 * File line = fmText index + 2 (fmText starts after the `---` fence on line 1). */
function scanMapViewLines(fmText: string): { view: string; line: number }[] {
  const out: { view: string; line: number }[] = [];
  fmText.split(/\r?\n/).forEach((line, i) => {
    const m = line.match(/^\s+mapView:\s*(?:'([^']*)'|"([^"]*)"|(\S+))\s*$/);
    if (!m) return;
    const view = (m[1] ?? m[2] ?? m[3] ?? '').trim();
    if (view) out.push({ view, line: i + 2 });
  });
  return out;
}

/** Views available to a page, mirroring PageLayout:
 * own module (always wins) ∪ parent's module when inheriting via
 * pageInclude.mainSlug ∪ each includer's module (refs render inside the
 * includer's route with the includer's MapBox). */
function availableViewsFor(page: ParsedPage, graph: IncludeGraph): Set<string> {
  const own = ownModuleViews(page.data);
  const views = new Set(own.views);
  if (!own.hasModule) {
    const parent = graph.parentOf.get(page.slug);
    if (parent) ownModuleViews(parent.data).views.forEach((v) => views.add(v));
  }
  for (const includer of graph.includersOf.get(page.slug) ?? []) {
    ownModuleViews(includer.data).views.forEach((v) => views.add(v));
  }
  return views;
}

/** Full validation: every mapView ref in every page must resolve against the
 * views available to that page. Returns orphan refs sorted by (file, line). */
export function findOrphanRefs(dir: string): OrphanRef[] {
  const pages = parsePages(dir);
  const graph = resolveIncludeGraph(pages);
  const orphans: OrphanRef[] = [];
  for (const page of pages) {
    const refs = collectMapViewRefs(page.data?.components ?? []);
    const rawLines = scanMapViewLines(page.fmText);
    // Attribute line numbers only when raw scan and structural walk agree on
    // the full ref sequence; otherwise report with line: null.
    const aligned =
      rawLines.length === refs.length &&
      rawLines.every((r, i) => r.view === refs[i]);
    const available = availableViewsFor(page, graph);
    refs.forEach((view, i) => {
      if (!available.has(view)) {
        orphans.push({
          file: page.file,
          slug: page.slug,
          view,
          line: aligned ? rawLines[i].line : null,
        });
      }
    });
  }
  return orphans.sort(
    (a, b) => a.file.localeCompare(b.file) || (a.line ?? 0) - (b.line ?? 0)
  );
}

// ---------------------------------------------------------------------------
// Tests against the real content collection
// ---------------------------------------------------------------------------

const PAGES_DIR = fileURLToPath(
  new URL('../src/content/pages', import.meta.url)
);

describe('map-view-refs validator — real content', () => {
  it('pending: resistencia_intro — exact census: 9 refs in 3 files (known bug, plan §Bug 3)', () => {
    const orphans = findOrphanRefs(PAGES_DIR);
    const refs = orphans.filter((o) => o.view === 'resistencia_intro');
    // Census is the plan's ground truth — a divergent count means the
    // validator itself is buggy (task acceptance: "census divergente").
    expect(refs.map((r) => `${r.file}:${r.line}`)).toEqual([
      'nhanderekoa-2.md:627',
      'nhanderekoa-2.md:1348',
      'nhanderekoa-3.md:111',
      'nhanderekoa-3.md:550',
      'nhanderekoa-studio-autonoma.md:1406',
      'nhanderekoa-studio-autonoma.md:2102',
      'nhanderekoa-studio-autonoma.md:2207',
      'nhanderekoa-studio-autonoma.md:2313',
      'nhanderekoa-studio-autonoma.md:2362',
    ]);
    expect(new Set(refs.map((r) => r.file)).size).toBe(3);
  });

  it.fails(
    'pending: resistencia_intro — zero orphan refs in D1 scope (nhanderekoa.md/-2/-3) once Task 12 defines the view in the parent',
    () => {
      // Controlled failure documenting the bug. Task 12 (D1: add the view to
      // nhanderekoa.md's MapBox module) makes this assertion pass — then drop
      // the `.fails` marker there.
      const inD1Scope = findOrphanRefs(PAGES_DIR).filter(
        (o) =>
          o.view === 'resistencia_intro' &&
          o.file !== 'nhanderekoa-studio-autonoma.md'
      );
      expect(inD1Scope).toHaveLength(0);
    }
  );

  it('pending: D1b debt — the 5 studio-autonoma refs stay documented (own MapBox module, no parent, out of scope by decision)', () => {
    const refs = findOrphanRefs(PAGES_DIR).filter(
      (o) =>
        o.view === 'resistencia_intro' &&
        o.file === 'nhanderekoa-studio-autonoma.md'
    );
    expect(refs.map((r) => r.line)).toEqual([1406, 2102, 2207, 2313, 2362]);
  });

  it('no crash on the whole collection (non-ASCII filenames, mixed frontmatter)', () => {
    expect(() => findOrphanRefs(PAGES_DIR)).not.toThrow();
  });
});

// ---------------------------------------------------------------------------
// Meta-test: the validator detects a broken ref in an isolated fixture
// ---------------------------------------------------------------------------

describe('meta-test: map-view-refs validator on mkdtemp fixture', () => {
  let tmpRoot: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'map-view-refs-'));
  });

  afterEach(() => {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  /** Write a page file with frontmatter fences around the given YAML. */
  function writePage(name: string, frontmatter: string): void {
    fs.writeFileSync(
      path.join(tmpRoot, name),
      `---\n${frontmatter}\n---\n\nbody\n`
    );
  }

  const parentPage = [
    'title: A',
    'slug: a',
    'modules:',
    '  - type: MapBox',
    '    style: mapbox://styles/x',
    '    token: tk',
    '    views:',
    '      - id: v_ok',
    'components:',
    '  - type: Include',
    '    slug: b',
  ].join('\n');

  const childPage = [
    'title: B',
    'slug: b',
    'pageInclude:',
    '  mainSlug: a',
    'components:',
    '  - type: MapView',
    '    mapView: v_ok',
    '  - type: MapView',
    '    mapView: v_gone',
  ].join('\n');

  it('fixture: page A includes B; B references a missing view → detected at the exact line', () => {
    writePage('a.md', parentPage);
    writePage('b.md', childPage);
    // v_ok resolves via pageInclude.mainSlug inheritance (PageLayout:56-77);
    // v_gone exists nowhere → the only orphan.
    expect(findOrphanRefs(tmpRoot)).toEqual([
      { file: 'b.md', slug: 'b', view: 'v_gone', line: 10 },
    ]);
  });

  it('fixture: inherited view is NOT an orphan when it is the only ref', () => {
    writePage('a.md', parentPage);
    writePage(
      'b.md',
      childPage.replace('  - type: MapView\n    mapView: v_gone', '')
    );
    expect(findOrphanRefs(tmpRoot)).toEqual([]);
  });

  it('fixture: view defined only in the includer resolves for the included page (depth-1)', () => {
    // C includes D (D has NO pageInclude): refs inside D render on C's route
    // with C's MapBox, so v_ok is not orphan even though D alone has no views.
    writePage(
      'c.md',
      parentPage.replace('slug: a', 'slug: c').replace('slug: b', 'slug: d')
    );
    writePage(
      'd.md',
      [
        'title: D',
        'slug: d',
        'components:',
        '  - type: MapView',
        '    mapView: v_ok',
      ].join('\n')
    );
    expect(findOrphanRefs(tmpRoot)).toEqual([]);
  });

  it('fixture: broken ref on a standalone page without any module is an orphan', () => {
    writePage(
      'solo.md',
      [
        'title: Solo',
        'slug: solo',
        'components:',
        '  - type: MapView',
        '    mapView: v_nowhere',
      ].join('\n')
    );
    expect(findOrphanRefs(tmpRoot)).toEqual([
      { file: 'solo.md', slug: 'solo', view: 'v_nowhere', line: 6 },
    ]);
  });

  it('fixture: file failing YAML parse is skipped with a warning, not a crash', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    writePage('a.md', parentPage);
    writePage('b.md', childPage);
    fs.writeFileSync(
      path.join(tmpRoot, 'broken.md'),
      '---\ntitle: [unclosed\n---\n'
    );
    let orphans: OrphanRef[] = [];
    expect(() => {
      orphans = findOrphanRefs(tmpRoot);
    }).not.toThrow();
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('broken.md'));
    // The valid pages were still validated.
    expect(orphans).toEqual([
      { file: 'b.md', slug: 'b', view: 'v_gone', line: 10 },
    ]);
    warnSpy.mockRestore();
  });
});
