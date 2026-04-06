import { sql } from '@vercel/postgres';
import { auth } from '@/auth';
import { slugFromTitle } from '@/lib/blog-slug';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { rows } = await sql`
    SELECT c.*,
      (SELECT COUNT(*)::int FROM posts p WHERE p.category = c.name) AS post_count
    FROM blog_categories c
    ORDER BY c.name
  `;
  return Response.json({ categories: rows });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session)
    return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await req.json()) as {
    name?: string;
    color?: string;
    description?: string;
  };
  const name = String(body.name ?? '').trim();
  if (!name) {
    return Response.json({ error: 'Name required' }, { status: 400 });
  }
  const slug = slugFromTitle(name);
  const color = body.color ?? '#4f8cff';
  const description = body.description != null ? String(body.description) : '';

  const { rows } = await sql`
    INSERT INTO blog_categories (name, slug, color, description)
    VALUES (${name}, ${slug}, ${color}, ${description})
    RETURNING *
  `;
  return Response.json({ category: rows[0] }, { status: 201 });
}
