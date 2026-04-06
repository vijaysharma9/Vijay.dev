import Image from 'next/image';
import Link from 'next/link';

import type { Post } from '@/lib/blog-types';
import { cn } from '@/utils/cn';

import CategoryBadge from '@/components/blog/CategoryBadge';

type CardPost = Pick<
  Post,
  | 'title'
  | 'slug'
  | 'excerpt'
  | 'cover_image'
  | 'category'
  | 'author'
  | 'read_time'
  | 'views'
  | 'published_at'
>;

const categoryColors: Record<string, string> = {
  'Web Development': '#4f8cff',
  'AI & Automation': '#a259ff',
  DevOps: '#00d4ff',
  eCommerce: '#ff7a45',
  'Case Studies': '#00e5a0',
  'Tech Insights': '#ffd24d'
};

export default function BlogCard({
  post,
  featured = false
}: {
  post: Partial<CardPost> & { title?: string; slug?: string };
  featured?: boolean;
}) {
  const href = `/blog/${post.slug ?? ''}`;
  const color = post.category
    ? categoryColors[post.category] ?? '#4f8cff'
    : '#4f8cff';

  return (
    <Link
      href={href}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg2)] transition duration-300',
        'hover:-translate-y-1 hover:border-[#4f8cff55]',
        featured && 'md:col-span-3 md:flex-row'
      )}
    >
      <div
        className={cn(
          'relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#12122a] to-[#09090f]',
          featured && 'md:aspect-auto md:min-h-[280px] md:w-1/2'
        )}
      >
        {post.cover_image ? (
          <Image
            src={post.cover_image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes={featured ? '(max-width:768px) 100vw, 50vw' : '(max-width:768px) 100vw, 33vw'}
          />
        ) : (
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: `linear-gradient(135deg, #09090f 0%, ${color}33 100%)`
            }}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-7">
        <div className="mb-3">
          <CategoryBadge name={post.category ?? 'General'} color={color} />
        </div>
        <h2
          className={cn(
            'font-[family-name:var(--font-syne)] text-xl font-extrabold leading-snug tracking-tight text-[var(--text)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden',
            featured && 'md:text-3xl'
          )}
        >
          {post.title}
        </h2>
        {post.excerpt ? (
          <p
            className="mt-3 text-sm leading-relaxed text-[var(--muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden"
            style={{ color: 'var(--muted)' }}
          >
            {post.excerpt}
          </p>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(79,140,255,0.15)] text-[11px] font-bold text-[var(--accent)]">
            VS
          </span>
          <span>{post.author ?? 'Vijay Sharma'}</span>
          <span className="opacity-40">|</span>
          <span>{post.read_time ?? 5} min read</span>
          <span className="opacity-40">|</span>
          <span>{post.views ?? 0} views</span>
        </div>
      </div>
    </Link>
  );
}
