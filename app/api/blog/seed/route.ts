import { sql } from '@vercel/postgres';
import { initDb } from '@/lib/db-init';
import { insertPostRow } from '@/lib/pg-arrays';
import { SEED_POSTS } from '@/lib/seed-posts';
import { ensureUniqueSlug, readTimeFromHtml } from '@/lib/blog-slug';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const headerSecret = req.headers.get('x-seed-secret');
  const querySecret = url.searchParams.get('secret');
  const token = headerSecret ?? querySecret;
  if (!process.env.SEED_SECRET || token !== process.env.SEED_SECRET) {
    return Response.json({ error: 'Forbidden' }, { status: 403 });
  }

  await initDb();
  const inserted: string[] = [];
  const skipped: string[] = [];

  for (const p of SEED_POSTS) {
    const slug = await ensureUniqueSlug(p.title);
    const { rows: exists } = await sql`
      SELECT id FROM posts WHERE slug = ${slug}
    `;
    if (exists[0]) {
      skipped.push(slug);
      continue;
    }

    const read_time =
      p.read_time > 0 ? p.read_time : readTimeFromHtml(p.content);
    const published_at =
      p.status === 'published' ? new Date().toISOString() : null;

    await insertPostRow({
      title: p.title,
      slug,
      excerpt: p.excerpt,
      content: p.content,
      cover_image: p.cover_image,
      category: p.category,
      tags: p.tags,
      status: p.status,
      featured: p.featured,
      author: p.author,
      read_time,
      published_at
    });
    inserted.push(slug);
  }

  return Response.json({
    ok: true,
    inserted,
    skipped,
    note: 'Remove app/api/blog/seed/route.ts after production seeding.'
  });
}
