import { sql } from '@vercel/postgres';
import Link from 'next/link';

import PostgresRequiredMessage from '@/components/admin/PostgresRequiredMessage';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  if (!process.env.POSTGRES_URL) {
    return <PostgresRequiredMessage />;
  }

  const { rows } = await sql`
    SELECT
      (SELECT COUNT(*)::int FROM posts) AS total,
      (SELECT COUNT(*)::int FROM posts WHERE status = 'published') AS published,
      (SELECT COUNT(*)::int FROM posts WHERE status = 'draft') AS drafts,
      (SELECT COALESCE(SUM(views), 0)::bigint FROM posts) AS views
  `;
  const s = rows[0] as {
    total: number;
    published: number;
    drafts: number;
    views: bigint;
  };

  const { rows: recent } = await sql`
    SELECT id, title, slug, category, status, views, updated_at
    FROM posts
    ORDER BY updated_at DESC
    LIMIT 10
  `;

  return (
    <div>
      <h1 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold">
        Dashboard
      </h1>
      <p className="mt-2 text-sm text-[#7b7b99]">Overview of your blog.</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total posts', value: s.total, icon: '📝' },
          { label: 'Published', value: s.published, icon: '✅' },
          { label: 'Drafts', value: s.drafts, icon: '📋' },
          { label: 'Total views', value: Number(s.views), icon: '👁️' }
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d18] p-5"
          >
            <div className="text-2xl">{card.icon}</div>
            <div className="mt-2 text-3xl font-bold text-[#e8e8f0]">{card.value}</div>
            <div className="text-sm text-[#7b7b99]">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/admin/posts/new"
          className="inline-flex rounded-lg bg-[#4f8cff] px-5 py-2.5 text-sm font-semibold text-white"
        >
          New post
        </Link>
        <Link
          href="/admin/categories"
          className="inline-flex rounded-lg border border-[rgba(255,255,255,0.12)] px-5 py-2.5 text-sm text-[#e8e8f0]"
        >
          Manage categories
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="font-[family-name:var(--font-syne)] text-xl font-extrabold">
          Recent posts
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.08)]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d18] text-[#7b7b99]">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Views</th>
                <th className="px-4 py-3 font-medium">Updated</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {recent.map((p) => (
                <tr
                  key={p.id as number}
                  className="border-b border-[rgba(255,255,255,0.05)]"
                >
                  <td className="px-4 py-3 font-medium text-[#e8e8f0]">
                    {p.title as string}
                  </td>
                  <td className="px-4 py-3 text-[#7b7b99]">{p.category as string}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        p.status === 'published'
                          ? 'rounded-full bg-[rgba(0,229,160,0.15)] px-2 py-0.5 text-xs text-[#00e5a0]'
                          : 'rounded-full bg-[rgba(245,158,11,0.15)] px-2 py-0.5 text-xs text-amber-200'
                      }
                    >
                      {p.status as string}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#7b7b99]">{p.views as number}</td>
                  <td className="px-4 py-3 text-[#7b7b99]">
                    {new Date(p.updated_at as string).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/posts/${p.id}`}
                      className="text-[#4f8cff] hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
