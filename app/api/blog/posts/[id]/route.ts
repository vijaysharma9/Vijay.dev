import { sql } from '@vercel/postgres';
import { auth } from '@/auth';
import { NextRequest } from 'next/server';
import { ensureUniqueSlug, readTimeFromHtml } from '@/lib/blog-slug';
import { updatePostRow } from '@/lib/pg-arrays';

export const dynamic = 'force-dynamic';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { rows } = await sql`SELECT * FROM posts WHERE id = ${id}`;
  if (!rows[0])
    return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json({ post: rows[0] });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = params;
  const body = (await req.json()) as Record<string, unknown>;

  const { rows: existingRows } = await sql`
    SELECT id, title, slug, status, published_at FROM posts WHERE id = ${id}
  `;
  const existing = existingRows[0] as
    | {
        id: number;
        title: string;
        slug: string;
        status: string;
        published_at: string | null;
      }
    | undefined;
  if (!existing)
    return Response.json({ error: 'Not found' }, { status: 404 });

  const title = String(body.title ?? existing.title);
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

  let slug = existing.slug;
  if (title !== existing.title) {
    slug = await ensureUniqueSlug(title, Number(id));
  }

  const wasPublished = existing.status === 'published';
  const nowPublished = status === 'published';
  let published_at: string | null = existing.published_at;
  if (!wasPublished && nowPublished) {
    published_at = new Date().toISOString();
  } else if (wasPublished && !nowPublished) {
    published_at = null;
  }

  const read_time_calc = readTimeFromHtml(content);
  const read_time =
    read_time_override != null && read_time_override > 0
      ? read_time_override
      : read_time_calc;

  const { rows } = await updatePostRow(id, {
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
  return Response.json({ post: rows[0] });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = params;
  await sql`DELETE FROM posts WHERE id = ${id}`;
  return Response.json({ success: true });
}
