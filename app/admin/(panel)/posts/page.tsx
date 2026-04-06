import { sql } from '@vercel/postgres';
import Link from 'next/link';

import AdminPostsTable from '@/components/admin/AdminPostsTable';
import PostgresRequiredMessage from '@/components/admin/PostgresRequiredMessage';

export const dynamic = 'force-dynamic';

export default async function AdminPostsListPage() {
  if (!process.env.POSTGRES_URL) {
    return <PostgresRequiredMessage />;
  }

  const { rows } = await sql`
    SELECT id, title, slug, excerpt, category, status, featured, views, updated_at, cover_image
    FROM posts
    ORDER BY updated_at DESC
  `;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold">
            All posts
          </h1>
          <p className="mt-2 text-sm text-[#7b7b99]">Manage and filter blog posts.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-[#4f8cff] px-5 py-2.5 text-sm font-semibold text-white"
        >
          New post
        </Link>
      </div>

      <div className="mt-10">
        <AdminPostsTable posts={rows as never} />
      </div>
    </div>
  );
}
