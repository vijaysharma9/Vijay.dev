import { sql } from '@vercel/postgres';
import { auth } from '@/auth';
import { NextRequest } from 'next/server';
import { ensureUniqueSlug, readTimeFromHtml } from '@/lib/blog-slug';
import { insertPostRow } from '@/lib/pg-arrays';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const limit = parseInt(searchParams.get('limit') ?? '9', 10);
  const offset = (page - 1) * limit;

  let posts: Record<string, unknown>[];
  let countRows: { count: string }[];

  if (category && tag) {
    const [{ rows: p }, { rows: c }] = await Promise.all([
      sql`
        SELECT id, title, slug, excerpt, cover_image, category, tags,
               status, featured, author, read_time, views, created_at, published_at
        FROM posts
        WHERE status = 'published' AND category = ${category} AND ${tag} = ANY(tags)
        ORDER BY featured DESC, published_at DESC NULLS LAST
        LIMIT ${limit} OFFSET ${offset}
      `,
      sql`
        SELECT COUNT(*)::text as count FROM posts
        WHERE status = 'published' AND category = ${category} AND ${tag} = ANY(tags)
      `
    ]);
    posts = p;
    countRows = c as { count: string }[];
  } else if (category) {
    const [{ rows: p }, { rows: c }] = await Promise.all([
      sql`
        SELECT id, title, slug, excerpt, cover_image, category, tags,
               status, featured, author, read_time, views, created_at, published_at
        FROM posts
        WHERE status = 'published' AND category = ${category}
        ORDER BY featured DESC, published_at DESC NULLS LAST
        LIMIT ${limit} OFFSET ${offset}
      `,
      sql`
        SELECT COUNT(*)::text as count FROM posts
        WHERE status = 'published' AND category = ${category}
      `
    ]);
    posts = p;
    countRows = c as { count: string }[];
  } else if (tag) {
    const [{ rows: p }, { rows: c }] = await Promise.all([
      sql`
        SELECT id, title, slug, excerpt, cover_image, category, tags,
               status, featured, author, read_time, views, created_at, published_at
        FROM posts
        WHERE status = 'published' AND ${tag} = ANY(tags)
        ORDER BY featured DESC, published_at DESC NULLS LAST
        LIMIT ${limit} OFFSET ${offset}
      `,
      sql`
        SELECT COUNT(*)::text as count FROM posts
        WHERE status = 'published' AND ${tag} = ANY(tags)
      `
    ]);
    posts = p;
    countRows = c as { count: string }[];
  } else {
    const [{ rows: p }, { rows: c }] = await Promise.all([
      sql`
        SELECT id, title, slug, excerpt, cover_image, category, tags,
               status, featured, author, read_time, views, created_at, published_at
        FROM posts
        WHERE status = 'published'
        ORDER BY featured DESC, published_at DESC NULLS LAST
        LIMIT ${limit} OFFSET ${offset}
      `,
      sql`
        SELECT COUNT(*)::text as count FROM posts WHERE status = 'published'
      `
    ]);
    posts = p;
    countRows = c as { count: string }[];
  }

  const total = parseInt(countRows[0]?.count ?? '0', 10);
  return Response.json({ posts, total });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await req.json()) as Record<string, unknown>;
  const title = String(body.title ?? '');
  const excerpt = body.excerpt != null ? String(body.excerpt) : null;
  const content = String(body.content ?? '');
  const cover_image =
    body.cover_image != null ? String(body.cover_image) : null;
  const category = String(body.category ?? 'General');
  const tags = Array.isArray(body.tags)
    ? (body.tags as unknown[]).map((t) => String(t))
    : [];
  const status = body.status === 'published' ? 'published' : 'draft';
  const featured = Boolean(body.featured);
  const author = String(body.author ?? 'Vijay Sharma');
  const read_time_override =
    typeof body.read_time === 'number' ? body.read_time : null;

  const slug = await ensureUniqueSlug(title);
  const published_at =
    status === 'published' ? new Date().toISOString() : null;
  const read_time_calc = readTimeFromHtml(content);
  const read_time =
    read_time_override != null && read_time_override > 0
      ? read_time_override
      : read_time_calc;

  const { rows } = await insertPostRow({
    title,
    slug,
    excerpt,
    content,
    cover_image,
    category,
    tags,
    status,
    featured,
    author,
    read_time,
    published_at
  });
  return Response.json({ post: rows[0] }, { status: 201 });
}
