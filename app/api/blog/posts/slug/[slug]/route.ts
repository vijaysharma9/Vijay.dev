import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const { rows } = await sql`
    UPDATE posts SET views = views + 1
    WHERE slug = ${slug} AND status = 'published'
    RETURNING *
  `;
  if (!rows[0])
    return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json({ post: rows[0] });
}
