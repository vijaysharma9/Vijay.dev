import { sql } from '@vercel/postgres';
import { auth } from '@/auth';

export const dynamic = 'force-dynamic';

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  await sql`DELETE FROM blog_categories WHERE id = ${params.id}`;
  return Response.json({ success: true });
}
