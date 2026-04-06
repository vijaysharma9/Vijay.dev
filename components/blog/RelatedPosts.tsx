import Image from 'next/image';
import Link from 'next/link';

import type { Post } from '@/lib/blog-types';

type Related = Pick<
  Post,
  'id' | 'title' | 'slug' | 'cover_image' | 'category' | 'read_time' | 'published_at'
>;

export default function RelatedPosts({ posts }: { posts: Related[] }) {
  if (!posts.length) return null;

  return (
    <div>
      <h3 className="mb-4 font-[family-name:var(--font-syne)] text-lg font-extrabold text-[var(--text)]">
        Related posts
      </h3>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.id}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex gap-3 rounded-lg border border-transparent border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-2 transition hover:border-[#4f8cff44]"
            >
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-[#12122a]">
                {p.cover_image ? (
                  <Image
                    src={p.cover_image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[#12122a] to-[#09090f]" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
                  {p.category}
                </div>
                <div className="line-clamp-2 text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)]">
                  {p.title}
                </div>
                <div className="mt-1 text-xs text-[var(--muted)]">
                  {p.read_time} min read
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
