'use client';

import type { TocItem } from '@/lib/blog-toc';

export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-4">
      <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
        On this page
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'pl-3' : ''}
          >
            <a
              href={`#${item.id}`}
              className="text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
