'use client';

import Link from 'next/link';

export default function BlogError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center"
      style={{
        background: '#09090f',
        color: '#e8e8f0',
        ['--muted' as string]: '#7b7b99'
      }}
    >
      <h1 className="font-[family-name:var(--font-syne)] text-2xl font-extrabold">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-[var(--muted)]">
        We could not load the blog. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-[#4f8cff] px-5 py-2 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <Link
          href="/blog"
          className="rounded-lg border border-white/10 px-5 py-2 text-sm text-[#e8e8f0]"
        >
          Back to blog
        </Link>
      </div>
    </div>
  );
}
