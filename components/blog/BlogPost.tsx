import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

import type { Post } from '@/lib/blog-types';
import { addHeadingIds, extractTocFromHtml } from '@/lib/blog-toc';

import BlogSidebar from '@/components/blog/BlogSidebar';
import CategoryBadge from '@/components/blog/CategoryBadge';
import ShareButtons from '@/components/blog/ShareButtons';

import '@/app/blog/blog-prose.css';

import { SITE_URL } from '@/constants/navigation';
import { servicePathForBlogCategory } from '@/lib/blog-related-service';

type Related = Pick<
  Post,
  'id' | 'title' | 'slug' | 'cover_image' | 'category' | 'read_time' | 'published_at'
>;

export default function BlogPost({
  post,
  related
}: {
  post: Post;
  related: Related[];
}) {
  const htmlWithIds = addHeadingIds(post.content);
  const toc = extractTocFromHtml(htmlWithIds);
  const published = post.published_at
    ? format(new Date(post.published_at), 'MMM d, yyyy')
    : '';
  const site = SITE_URL.replace(/\/$/, '');
  const canonical = `${site}/blog/${post.slug}`;

  return (
    <article
      className="pb-24 pt-28"
      style={{
        ['--bg' as string]: '#09090f',
        ['--bg2' as string]: '#0d0d18',
        ['--accent' as string]: '#4f8cff',
        ['--text' as string]: '#e8e8f0',
        ['--muted' as string]: '#7b7b99',
        ['--border' as string]: 'rgba(255,255,255,0.07)',
        background: 'var(--bg)'
      }}
    >
      {post.cover_image ? (
        <div className="relative mx-auto max-h-[480px] w-full overflow-hidden">
          <Image
            src={post.cover_image}
            alt=""
            width={1920}
            height={480}
            className="h-auto max-h-[480px] w-full object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className="mb-8 flex flex-wrap gap-2 text-sm text-[var(--muted)]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[var(--accent)]">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/blog" className="hover:text-[var(--accent)]">
            Blog
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="hover:text-[var(--accent)]"
          >
            {post.category}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-[var(--text)] line-clamp-1">{post.title}</span>
        </nav>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="min-w-0 flex-[0.65]">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              <CategoryBadge
                name={post.category}
                href={`/blog?category=${encodeURIComponent(post.category)}`}
              />
              <span className="text-[var(--muted)]">{post.read_time} min read</span>
              {published ? (
                <span className="text-[var(--muted)]">{published}</span>
              ) : null}
              <span className="text-[var(--muted)]">{post.views} views</span>
            </div>

            <h1 className="font-[family-name:var(--font-syne)] text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-[var(--text)]">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(79,140,255,0.2)] text-sm font-bold text-[var(--accent)]">
                VS
              </div>
              <div>
                <div className="font-semibold text-[var(--text)]">{post.author}</div>
                <div className="text-sm text-[var(--muted)]">Author</div>
              </div>
            </div>

            <div
              className="blog-prose prose-dark mt-10"
              dangerouslySetInnerHTML={{ __html: htmlWithIds }}
            />

            {post.tags?.length ? (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            ) : null}

            <section
              className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6"
              aria-labelledby="related-reading-heading"
            >
              <h2
                id="related-reading-heading"
                className="font-[family-name:var(--font-syne)] text-lg font-extrabold text-[var(--text)]"
              >
                Related reading
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <Link
                    href="/blog/how-to-hire-dedicated-developer-2025"
                    className="text-[var(--accent)] hover:underline"
                  >
                    How to hire a dedicated developer in 2025 (guide)
                  </Link>
                </li>
                <li>
                  <Link
                    href={servicePathForBlogCategory(post.category)}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {post.category} services — scope &amp; process
                  </Link>
                </li>
                <li>
                  <Link href="/hire" className="text-[var(--accent)] hover:underline">
                    Book a free consultation
                  </Link>
                </li>
              </ul>
            </section>

            <div className="mt-10 border-t border-[var(--border)] pt-8">
              <ShareButtons url={canonical} title={post.title} />
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-8">
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-extrabold text-[var(--text)]">
                Need help with {post.category}?
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                Tell us about your timeline and stack—we will propose a practical plan.
              </p>
              <Link
                href="/hire"
                className="mt-6 inline-flex rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3d7ae6]"
              >
                Book a free call
              </Link>
            </div>
          </div>

          <div className="flex-[0.35]">
            <BlogSidebar toc={toc} related={related} />
          </div>
        </div>
      </div>
    </article>
  );
}
