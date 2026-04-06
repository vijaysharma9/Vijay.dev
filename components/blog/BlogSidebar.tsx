import Link from 'next/link';

import type { Post } from '@/lib/blog-types';
import type { TocItem } from '@/lib/blog-toc';

import RelatedPosts from '@/components/blog/RelatedPosts';
import TableOfContents from '@/components/blog/TableOfContents';

type Related = Pick<
  Post,
  'id' | 'title' | 'slug' | 'cover_image' | 'category' | 'read_time' | 'published_at'
>;

export default function BlogSidebar({
  toc,
  related
}: {
  toc: TocItem[];
  related: Related[];
}) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
      <TableOfContents items={toc} />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(79,140,255,0.2)] text-sm font-bold text-[var(--accent)]">
            VS
          </div>
          <div>
            <div className="font-semibold text-[var(--text)]">Vijay Sharma</div>
            <div className="text-sm text-[var(--muted)]">Full-Stack Developer</div>
          </div>
        </div>
        <a
          href="https://www.upwork.com/freelancers/~019b3aee9c5d781d36"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#14a80055] bg-[rgba(20,168,0,0.08)] px-3 py-2 text-xs font-semibold text-[#14a800]"
        >
          View on Upwork
        </a>
      </div>

      <RelatedPosts posts={related} />

      <div className="rounded-xl border border-[var(--border)] bg-gradient-to-br from-[rgba(79,140,255,0.12)] to-[rgba(162,89,255,0.08)] p-5">
        <h3 className="font-[family-name:var(--font-syne)] text-lg font-extrabold text-[var(--text)]">
          Start a project
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Book a free call and get a clear delivery plan for your product.
        </p>
        <Link
          href="/hire"
          className="mt-4 inline-flex w-full justify-center rounded-lg bg-[#4f8cff] py-2.5 text-sm font-semibold text-white transition hover:bg-[#3d7ae6]"
        >
          Book a free call
        </Link>
      </div>
    </aside>
  );
}
