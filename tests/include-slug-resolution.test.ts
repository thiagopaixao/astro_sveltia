import { describe, it, expect } from 'vitest';

// SOURCE OF TRUTH: src/layouts/pages/PageLayout.astro (~lines 58-67 and
// ~220-228). The slug-first predicate lives inline there and is not
// importable, so this helper mirrors its semantics exactly:
//   1. frontmatter slug (data.slug) match wins;
//   2. fallback to entry id/filename match (mirrors getEntry-by-id fallback);
//   3. neither → undefined.
const resolve = (
  pages: Array<{ id: string; data: { slug?: string } }>,
  targetSlug: string
) =>
  pages.find((p) => p.data.slug === targetSlug) ??
  pages.find((p) => p.id === targetSlug);

describe('include slug resolution precedence (mirrors PageLayout.astro)', () => {
  it('data.slug match wins over an entry whose id matches', () => {
    const bySlug = { id: 'other', data: { slug: 's1' } };
    const byId = { id: 's1', data: {} };
    expect(resolve([byId, bySlug], 's1')).toBe(bySlug);
  });

  it('falls back to id match when no data.slug matches', () => {
    const byId = { id: 's1', data: {} };
    expect(resolve([byId], 's1')).toBe(byId);
  });

  it('returns undefined when neither slug nor id matches', () => {
    expect(resolve([{ id: 'a', data: {} }], 's1')).toBeUndefined();
  });
});
