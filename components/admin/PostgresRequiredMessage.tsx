import Link from 'next/link';

/**
 * Shown when POSTGRES_URL is missing so admin routes fail gracefully during local setup.
 */
export default function PostgresRequiredMessage() {
  return (
    <div className="max-w-2xl rounded-xl border border-amber-500/30 bg-amber-500/10 p-8 text-[#e8e8f0]">
      <h1 className="font-[family-name:var(--font-syne)] text-2xl font-extrabold text-amber-100">
        Database connection missing
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[#bdbdd5]">
        The admin panel needs a Postgres URL. Add{' '}
        <code className="rounded bg-black/30 px-1.5 py-0.5 text-[#7dd3fc]">
          POSTGRES_URL
        </code>{' '}
        to your environment (e.g. <code className="text-[#7dd3fc]">.env.local</code> for{' '}
        <code className="text-[#7dd3fc]">npm run dev</code>), then restart the dev server.
      </p>

      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-amber-200/90">
        Quick setup (Vercel Postgres)
      </h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-[#bdbdd5]">
        <li>
          Vercel Dashboard → your project → <strong>Storage</strong> → Create →{' '}
          <strong>Postgres</strong> (pick a region).
        </li>
        <li>
          Connect the database to the project; copy{' '}
          <code className="text-[#7dd3fc]">POSTGRES_URL</code> from the integration tab.
        </li>
        <li>
          Local: run <code className="text-[#7dd3fc]">vercel env pull .env.local</code> (CLI
          logged in), or paste <code className="text-[#7dd3fc]">POSTGRES_URL=...</code> into{' '}
          <code className="text-[#7dd3fc]">.env.local</code> manually.
        </li>
        <li>
          Run SQL from <code className="text-[#7dd3fc]">lib/schema.sql</code> in the Vercel
          Postgres query UI, or call <code className="text-[#7dd3fc]">GET /api/blog/seed</code>{' '}
          with <code className="text-[#7dd3fc]">SEED_SECRET</code> set (creates tables + sample
          posts).
        </li>
      </ol>

      <p className="mt-6 text-sm text-[#7b7b99]">
        Also set <code className="text-[#7dd3fc]">AUTH_SECRET</code>,{' '}
        <code className="text-[#7dd3fc]">ADMIN_USERNAME</code>,{' '}
        <code className="text-[#7dd3fc]">ADMIN_PASSWORD_HASH</code>, and{' '}
        <code className="text-[#7dd3fc]">BLOB_READ_WRITE_TOKEN</code> for full admin features.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-[#4f8cff] hover:underline"
      >
        ← Back to site
      </Link>
    </div>
  );
}
