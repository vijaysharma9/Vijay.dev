import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import BlogPost from '@/components/blog/BlogPost';
import type { Post } from '@/lib/blog-types';

type RelatedPost = Pick<
  Post,
  'id' | 'title' | 'slug' | 'cover_image' | 'category' | 'read_time' | 'published_at'
>;

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { rows } = await sql`
    SELECT title, excerpt, cover_image FROM posts
    WHERE slug = ${params.slug} AND status = 'published'
  `;
  const row = rows[0] as
    | { title: string; excerpt: string | null; cover_image: string | null }
    | undefined;
  if (!row) return {};
  return {
    title: `${row.title} | HireDeveloperShop Blog`,
    description: row.excerpt ?? undefined,
    openGraph: {
      title: row.title,
      description: row.excerpt ?? undefined,
      images: row.cover_image ? [{ url: row.cover_image }] : []
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const { rows } = await sql`
    UPDATE posts SET views = views + 1
    WHERE slug = ${params.slug} AND status = 'published'
    RETURNING *
  `;
  const post = rows[0] as Post | undefined;
  if (!post) notFound();

  const { rows: related } = await sql`
    SELECT id, title, slug, cover_image, category, read_time, published_at
    FROM posts
    WHERE status = 'published' AND category = ${post.category}
      AND slug != ${params.slug}
    ORDER BY published_at DESC NULLS LAST
    LIMIT 3
  `;

  return (
    <BlogPost post={post} related={related as RelatedPost[]} />
  );
}
