export function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}

export function truncateText(input: string, maxLength: number): string {
  const clean = input.trim();
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, Math.max(0, maxLength - 1)).trimEnd() + '…';
}

export function ensureNonEmpty(value: string | undefined | null): string | null {
  if (value == null) return null;
  const normalized = normalizeWhitespace(String(value));
  return normalized.length > 0 ? normalized : null;
}

