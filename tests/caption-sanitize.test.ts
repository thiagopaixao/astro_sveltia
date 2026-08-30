import { describe, it, expect } from 'vitest';
import {
  escapeHtml,
  sanitizeIconName,
  sanitizeColor,
  buildIconHtml,
} from '../src/lib/caption-sanitize';

// Legacy construction copied verbatim from MapboxLayout.astro (pre-refactor,
// formerly line 164). buildIconHtml MUST stay byte-identical to this for
// valid inputs — zero visual regression is the contract.
function legacyIconHtml(item: {
  icon: string;
  colorIcon: string;
  typeIcon: string;
  iconFill: boolean;
}): string {
  const fillValue = item.iconFill ? 1 : 0;
  return `<span class="material-symbols-${item.typeIcon}" style="color: ${item.colorIcon}; font-variation-settings: 'FILL' ${fillValue}">${item.icon}</span>`;
}

describe('escapeHtml', () => {
  it('escapes the five dangerous characters', () => {
    expect(escapeHtml('&')).toBe('&amp;');
    expect(escapeHtml('<')).toBe('&lt;');
    expect(escapeHtml('>')).toBe('&gt;');
    expect(escapeHtml('"')).toBe('&quot;');
    expect(escapeHtml('\u0027')).toBe('&#39;');
  });

  it('escapes combined payloads without touching safe text', () => {
    expect(escapeHtml('<script>a&&b</script>')).toBe(
      '&lt;script&gt;a&amp;&amp;b&lt;/script&gt;'
    );
    expect(escapeHtml('Ka' + '\u0027' + 'aguy Mirim')).toBe(
      'Ka&#39;aguy Mirim'
    );
  });

  it('coerces non-strings (title=42) instead of throwing', () => {
    expect(escapeHtml(42)).toBe('42');
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
  });
});

describe('sanitizeIconName', () => {
  it('accepts Material Symbols names (letters, digits, _ and -)', () => {
    expect(sanitizeIconName('circle')).toBe('circle');
    expect(sanitizeIconName('show_chart')).toBe('show_chart');
    expect(sanitizeIconName('arrow-back-2')).toBe('arrow-back-2');
    expect(sanitizeIconName('1x_mobiledata')).toBe('1x_mobiledata');
  });

  it('is case-insensitive on the whitelist', () => {
    expect(sanitizeIconName('Circle')).toBe('Circle');
    expect(sanitizeIconName('SHOW-chart')).toBe('SHOW-chart');
  });

  it('returns empty string outside the pattern', () => {
    expect(sanitizeIconName('<img src=x onerror=alert(1)>')).toBe('');
    expect(sanitizeIconName('alert(1)')).toBe('');
    expect(sanitizeIconName('circle 2')).toBe('');
    expect(sanitizeIconName('')).toBe('');
    expect(sanitizeIconName(42)).toBe('');
    expect(sanitizeIconName(null)).toBe('');
  });
});

describe('sanitizeColor', () => {
  it('accepts hex with 3/4/6/8 digits and basic rgb()/rgba()', () => {
    expect(sanitizeColor('#66ea5d')).toBe('#66ea5d');
    expect(sanitizeColor('#abc')).toBe('#abc');
    expect(sanitizeColor('#abcd')).toBe('#abcd');
    expect(sanitizeColor('#aabbccdd')).toBe('#aabbccdd');
    expect(sanitizeColor('#AABBCC')).toBe('#AABBCC');
    expect(sanitizeColor('rgb(255, 99, 71)')).toBe('rgb(255, 99, 71)');
    expect(sanitizeColor('rgba(255, 99, 71, 0.5)')).toBe(
      'rgba(255, 99, 71, 0.5)'
    );
  });

  it('falls back to inherit for anything else', () => {
    expect(sanitizeColor('javascript:alert(1)')).toBe('inherit');
    expect(sanitizeColor('red; background:url(x)')).toBe('inherit');
    expect(sanitizeColor('#12g')).toBe('inherit');
    expect(sanitizeColor('#12345')).toBe('inherit');
    expect(sanitizeColor('')).toBe('inherit');
    expect(sanitizeColor(123)).toBe('inherit');
  });
});

describe('buildIconHtml', () => {
  it('is byte-identical to the legacy MapboxLayout template for real items', () => {
    // Real caption items from src/content/pages/nhanderekoa.md (view map1_ti)
    const items = [
      {
        icon: 'circle',
        colorIcon: '#66ea5d',
        typeIcon: 'outlined',
        iconFill: false,
      },
      {
        icon: 'show_chart',
        colorIcon: '#1b9613',
        typeIcon: 'outlined',
        iconFill: false,
      },
      {
        icon: 'circle',
        colorIcon: '#fb8f13',
        typeIcon: 'outlined',
        iconFill: false,
      },
      {
        icon: 'show_chart',
        colorIcon: '#9b16d4',
        typeIcon: 'outlined',
        iconFill: false,
      },
    ];
    for (const item of items) {
      expect(buildIconHtml(item)).toBe(legacyIconHtml(item));
    }
  });

  it('produces the exact legacy string for the canonical item', () => {
    expect(
      buildIconHtml({
        icon: 'circle',
        colorIcon: '#66ea5d',
        typeIcon: 'outlined',
        iconFill: false,
      })
    ).toBe(
      '<span class="material-symbols-outlined" style="color: #66ea5d; font-variation-settings: \'FILL\' 0">circle</span>'
    );
  });

  it('maps iconFill true to FILL 1 (legacy ternary)', () => {
    expect(
      buildIconHtml({
        icon: 'circle',
        colorIcon: '#66ea5d',
        typeIcon: 'rounded',
        iconFill: true,
      })
    ).toBe(
      '<span class="material-symbols-rounded" style="color: #66ea5d; font-variation-settings: \'FILL\' 1">circle</span>'
    );
  });

  it('accepts only whitelisted typeIcon variants', () => {
    expect(
      buildIconHtml({
        icon: 'circle',
        colorIcon: '#66ea5d',
        typeIcon: 'sharp',
        iconFill: false,
      })
    ).toContain('material-symbols-sharp');
  });

  it('neutralizes <img src=x onerror=alert(1)> as icon (null, no markup)', () => {
    expect(
      buildIconHtml({
        icon: '<img src=x onerror=alert(1)>',
        colorIcon: '#66ea5d',
        typeIcon: 'outlined',
        iconFill: false,
      })
    ).toBeNull();
  });

  it('falls back to inherit for javascript: colorIcon', () => {
    const html = buildIconHtml({
      icon: 'circle',
      colorIcon: 'javascript:alert(1)',
      typeIcon: 'outlined',
      iconFill: false,
    });
    expect(html).toBe(
      '<span class="material-symbols-outlined" style="color: inherit; font-variation-settings: \'FILL\' 0">circle</span>'
    );
    expect(html).not.toContain('javascript:');
  });

  it('rejects malicious typeIcon (x" onload=")', () => {
    expect(
      buildIconHtml({
        icon: 'circle',
        colorIcon: '#66ea5d',
        typeIcon: 'x" onload="',
        iconFill: false,
      })
    ).toBeNull();
  });

  it('keeps the legacy gate: missing icon/colorIcon/typeIcon → null', () => {
    expect(
      buildIconHtml({
        colorIcon: '#66ea5d',
        typeIcon: 'outlined',
        iconFill: false,
      })
    ).toBeNull();
    expect(
      buildIconHtml({
        icon: 'circle',
        colorIcon: '',
        typeIcon: 'outlined',
        iconFill: false,
      })
    ).toBeNull();
    expect(
      buildIconHtml({ icon: 'circle', colorIcon: '#66ea5d', iconFill: false })
    ).toBeNull();
    expect(buildIconHtml({})).toBeNull();
  });
});
