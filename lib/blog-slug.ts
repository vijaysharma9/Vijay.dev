import { sql } from '@vercel/postgres';
import slugify from 'slugify';

export function slugFromTitle(title: string): string {
  return slugify(title, { lower: true, strict: true });
}

export async function ensureUniqueSlug(
  title: string,
  excludePostId?: number
): Promise<string> {
  const base = slugFromTitle(title);
  let candidate = base;
  let n = 2;

  while (true) {
    const { rows } =
      excludePostId !== undefined
        ? await sql`
            SELECT id FROM posts WHERE slug = ${candidate} AND id <> ${excludePostId}
          `
        : await sql`SELECT id FROM posts WHERE slug = ${candidate}`;
    if (!rows[0]) return candidate;
    candidate = `${base}-${n}`;
    n += 1;
  }
}

export function readTimeFromHtml(content: string): number {
  const text = content.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
