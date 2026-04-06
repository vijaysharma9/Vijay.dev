import Link from 'next/link';

import type { BlogListingProps } from '@/lib/blog-types';
import { cn } from '@/utils/cn';

import BlogCard from '@/components/blog/BlogCard';
import Pagination from '@/components/blog/Pagination';

export default function BlogListing({
  posts,
  categories,
  total,
  currentCategory,
  page,
  limit
}: BlogListingProps) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const featuredPost = posts.find((p) => p.featured);
  const gridPosts = featuredPost
    ? posts.filter((p) => p.slug !== featuredPost.slug)
    : posts;

  return (
    <div
      className="relative min-h-screen pb-20 pt-28"
      style={{
        background: 'var(--bg)',
        ['--bg' as string]: '#09090f',
        ['--bg2' as string]: '#0d0d18',
        ['--accent' as string]: '#4f8cff',
        ['--accent2' as string]: '#a259ff',
        ['--green' as string]: '#00e5a0',
        ['--text' as string]: '#e8e8f0',
        ['--muted' as string]: '#7b7b99',
        ['--border' as string]: 'rgba(255,255,255,0.07)'
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="hero-badge mb-6 inline-flex rounded-full border border-[var(--border)] bg-[rgba(79,140,255,0.08)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Available for projects · Worldwide
        </div>

        <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
          Tech Insights &amp;{' '}
          <span className="bg-gradient-to-r from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Dev Articles
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
          Practical notes on full-stack delivery, AI integration, and shipping SaaS—written
          by the HireDeveloperShop team.
        </p>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href="/blog"
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition',
              !currentCategory
                ? 'border-[#4f8cff66] bg-[rgba(79,140,255,0.15)] text-[var(--text)]'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[#4f8cff44] hover:text-[var(--text)]'
            )}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/blog?category=${encodeURIComponent(c.name)}`}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition',
                currentCategory === c.name
                  ? 'border-[#4f8cff66] bg-[rgba(79,140,255,0.15)] text-[var(--text)]'
                  : 'border-[var(--border)] text-[var(--muted)] hover:border-[#4f8cff44] hover:text-[var(--text)]'
              )}
              style={
                currentCategory === c.name
                  ? { borderColor: `${c.color}88` }
                  : undefined
              }
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPost ? (
            <div className="md:col-span-2 lg:col-span-3">
              <BlogCard post={featuredPost} featured />
            </div>
          ) : null}
          {gridPosts.map((post) => (
            <BlogCard key={post.slug ?? post.id} post={post} />
          ))}
        </div>

        {!posts.length ? (
          <p className="mt-16 text-center text-[var(--muted)]">
            No posts in this category yet.{' '}
            <Link href="/blog" className="text-[var(--accent)] underline">
              View all posts
            </Link>
            .
          </p>
        ) : null}

        <Pagination
          page={page}
          totalPages={totalPages}
          basePath="/blog"
          category={currentCategory}
        />
      </div>
    </div>
  );
}
