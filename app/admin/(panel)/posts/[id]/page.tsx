import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

import PostForm from '@/components/admin/PostForm';
import PostgresRequiredMessage from '@/components/admin/PostgresRequiredMessage';
import type { Post } from '@/lib/blog-types';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({
  params
}: {
  params: { id: string };
}) {
  if (!process.env.POSTGRES_URL) {
    return <PostgresRequiredMessage />;
  }

  const { rows } = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const raw = rows[0] as Post | undefined;
  if (!raw) notFound();
  const post: Post = {
    ...raw,
    tags: Array.isArray(raw.tags) ? (raw.tags as string[]) : []
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold">
            Edit post
          </h1>
          <p className="mt-2 text-sm text-[#7b7b99]">/{post.slug}</p>
        </div>
        {post.status === 'published' ? (
          <a
            href={`/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[rgba(255,255,255,0.12)] px-4 py-2 text-sm text-[#4f8cff] hover:bg-[rgba(79,140,255,0.1)]"
          >
            View live post
          </a>
        ) : null}
      </div>
      <div className="mt-10">
        <PostForm mode="edit" initial={post} />
      </div>
    </div>
  );
}
