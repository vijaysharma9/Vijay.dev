import { sql } from '@vercel/postgres';
import type { Metadata } from 'next';

import BlogListing from '@/components/blog/BlogListing';

export const metadata: Metadata = {
  title: 'Blog — Web Dev, AI & Tech Insights | HireDeveloperShop',
  description:
    'Practical articles on full-stack development, AI integration, DevOps, eCommerce, and SaaS architecture from the HireDeveloperShop team.'
};

export const revalidate = 60;

export default async function BlogPage({
  searchParams
}: {
  searchParams: { category?: string; page?: string };
}) {
  const category = searchParams.category ?? null;
  const page = Math.max(1, parseInt(searchParams.page ?? '1', 10));
  const limit = 9;
  const offset = (page - 1) * limit;

  try {
  const [{ rows: posts }, { rows: countRows }, { rows: categories }] =
    await Promise.all([
      category
        ? sql`
            SELECT id, title, slug, excerpt, cover_image, category, tags, featured,
                   read_time, views, published_at, author, status
            FROM posts
            WHERE status = 'published' AND category = ${category}
            ORDER BY featured DESC, published_at DESC NULLS LAST
            LIMIT ${limit} OFFSET ${offset}
          `
        : sql`
            SELECT id, title, slug, excerpt, cover_image, category, tags, featured,
                   read_time, views, published_at, author, status
            FROM posts
            WHERE status = 'published'
            ORDER BY featured DESC, published_at DESC NULLS LAST
            LIMIT ${limit} OFFSET ${offset}
          `,
      category
        ? sql`
            SELECT COUNT(*)::text as count FROM posts
            WHERE status = 'published' AND category = ${category}
          `
        : sql`
            SELECT COUNT(*)::text as count FROM posts WHERE status = 'published'
          `,
      sql`SELECT * FROM blog_categories ORDER BY name`
    ]);

  const total = parseInt(countRows[0]?.count ?? '0', 10);

  return (
    <BlogListing
      posts={posts as Record<string, unknown>[]}
      categories={categories as { id: number; name: string; slug: string; color: string; description: string | null }[]}
      total={total}
      currentCategory={category}
      page={page}
      limit={limit}
    />
  );
  } catch {
    return (
      <div
        className="mx-auto max-w-lg px-4 py-32 text-center"
        style={{ color: '#e8e8f0', background: '#09090f' }}
      >
        <h1 className="text-xl font-bold">Blog temporarily unavailable</h1>
        <p className="mt-2 text-sm text-[#7b7b99]">
          Configure <code className="text-[#4f8cff]">POSTGRES_URL</code> to load posts from the database.
        </p>
      </div>
    );
  }
}
