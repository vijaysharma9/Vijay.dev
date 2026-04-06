import Link from 'next/link';

import { cn } from '@/utils/cn';

export default function Pagination({
  page,
  totalPages,
  basePath,
  category
}: {
  page: number;
  totalPages: number;
  basePath: string;
  category: string | null;
}) {
  if (totalPages <= 1) return null;

  const qs = (p: number) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (p > 1) params.set('page', String(p));
    const q = params.toString();
    return q ? `${basePath}?${q}` : basePath;
  };

  return (
    <nav
      className="mt-14 flex flex-wrap items-center justify-center gap-2"
      aria-label="Blog pagination"
    >
      <Link
        href={qs(Math.max(1, page - 1))}
        className={cn(
          'rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]',
          page <= 1 && 'pointer-events-none opacity-40'
        )}
        aria-disabled={page <= 1}
      >
        Previous
      </Link>
      <span className="px-2 text-sm text-[var(--muted)]">
        Page {page} of {totalPages}
      </span>
      <Link
        href={qs(Math.min(totalPages, page + 1))}
        className={cn(
          'rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]',
          page >= totalPages && 'pointer-events-none opacity-40'
        )}
        aria-disabled={page >= totalPages}
      >
        Next
      </Link>
    </nav>
  );
}
