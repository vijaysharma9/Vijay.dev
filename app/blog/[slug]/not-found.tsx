import Link from 'next/link';

export default function BlogSlugNotFound() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center"
      style={{ background: '#09090f', color: '#e8e8f0' }}
    >
      <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold">
        Post not found
      </h1>
      <p className="mt-4 max-w-md text-[#7b7b99]">
        That article does not exist or was unpublished.
      </p>
      <Link
        href="/blog"
        className="mt-8 rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-semibold text-white"
      >
        View all posts
      </Link>
    </div>
  );
}
