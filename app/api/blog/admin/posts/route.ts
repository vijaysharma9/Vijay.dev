import { sql } from '@vercel/postgres';
import { auth } from '@/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await auth();
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { rows } = await sql`
    SELECT id, title, slug, category, tags, status, featured,
           views, created_at, updated_at, published_at, cover_image, excerpt
    FROM posts
    ORDER BY updated_at DESC
  `;
  return Response.json({ posts: rows });
}
