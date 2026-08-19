import { describe, it, expect } from 'vitest';
// Under vitest, `astro:content` is aliased to astro/zod (see vitest.config.ts),
// so only `z` / `defineCollection` imports are exercised — same as smoke tests.
import { pagesSchema } from '../src/content/schema/pages';

// Minimal valid payload (mirrors tests/smoke.test.ts minimal-shape philosophy):
// `title` alone is sufficient — every other field is optional or defaulted.
const basePayload = { title: 'x' };

describe('pagesSchema nullable pageSettings/pageTheme', () => {
  it('parses minimal payload with pageSettings/pageTheme absent', () => {
    const result = pagesSchema.parse(basePayload);
    expect(result.title).toBe('x');
    expect(result.pageSettings).toBeUndefined();
    expect(result.pageTheme).toBeUndefined();
  });

  it('parses pageSettings: null', () => {
    expect(() =>
      pagesSchema.parse({ ...basePayload, pageSettings: null })
    ).not.toThrow();
  });

  it('parses pageTheme: null', () => {
    expect(() =>
      pagesSchema.parse({ ...basePayload, pageTheme: null })
    ).not.toThrow();
  });

  it('rejects pageSettings when it is a string', () => {
    expect(() =>
      pagesSchema.parse({ ...basePayload, pageSettings: 'oops' })
    ).toThrow();
  });
});
