/**
 * Caption sanitization helpers (pure, no DOM, no deps — server + client safe).
 *
 * Consumed by `src/layouts/components/MapboxLayout.astro` (SSR icon HTML) and
 * by MapBoxHandler.js runtime captions (legend hardening). Minimal surface:
 *
 *   escapeHtml(value)       — escapes `& < > " '` for innerHTML contexts
 *   sanitizeIconName(value) — Material Symbols name whitelist [a-z0-9_-];
 *                             returns '' when outside the pattern
 *   sanitizeColor(value)    — accepts #hex (3/4/6/8 digits) or basic rgb()/rgba();
 *                             falls back to 'inherit'
 *   buildIconHtml(item)     — byte-compatible with the legacy MapboxLayout
 *                             template: `<span class="material-symbols-{type}"
 *                             style="color: {color}; font-variation-settings:
 *                             'FILL' {0|1}">{icon}</span>`; returns null when
 *                             icon/typeIcon fail their whitelists or when
 *                             colorIcon is missing (legacy truthiness gate).
 */

/** Material Symbols variants allowed in the icon class name. */
const ICON_TYPES: readonly string[] = ['outlined', 'rounded', 'sharp'];

const ICON_NAME_RE = /^[a-z0-9_-]+$/i;

const HEX_COLOR_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

// rgb()/rgba() with integer channels 0-999 (basic validation) and an optional
// alpha of 0-1 (decimal) or 0-100%.
const RGB_COLOR_RE =
  /^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(?:,\s*(?:\d{1,3}%|0(?:\.\d+)?|1(?:\.0+)?)\s*)?\)$/i;

export function escapeHtml(value: unknown): string {
  const str = typeof value === 'string' ? value : String(value ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function sanitizeIconName(value: unknown): string {
  return typeof value === 'string' && ICON_NAME_RE.test(value) ? value : '';
}

export function sanitizeColor(value: unknown): string {
  if (typeof value !== 'string') return 'inherit';
  return HEX_COLOR_RE.test(value) || RGB_COLOR_RE.test(value)
    ? value
    : 'inherit';
}

export interface IconInput {
  icon?: unknown;
  colorIcon?: unknown;
  typeIcon?: unknown;
  iconFill?: unknown;
}

export function buildIconHtml(item: IconInput): string | null {
  if (!item) return null;

  const safeIcon = sanitizeIconName(item.icon);
  if (!safeIcon) return null;

  // Legacy gate from MapboxLayout: icon, colorIcon and typeIcon must all be
  // present; items failing it are passed through unchanged (caller's job).
  if (typeof item.colorIcon !== 'string' || item.colorIcon === '') return null;
  if (
    typeof item.typeIcon !== 'string' ||
    !ICON_TYPES.includes(item.typeIcon)
  ) {
    return null;
  }

  const fillValue = item.iconFill ? 1 : 0;
  return `<span class="material-symbols-${item.typeIcon}" style="color: ${sanitizeColor(
    item.colorIcon
  )}; font-variation-settings: 'FILL' ${fillValue}">${safeIcon}</span>`;
}
