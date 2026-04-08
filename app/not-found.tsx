import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#09090f] px-[5vw] py-28 text-[#e8e8f0]">
      <div className="mx-auto max-w-lg text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#4f8cff]">404</p>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl">Page not found</h1>
        <p className="mt-4 text-[#7b7b99]">
          The page you requested doesn&apos;t exist or was moved. Try one of the links below.
        </p>
        <nav className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-[#e8e8f0] hover:border-[#4f8cff]"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-[#e8e8f0] hover:border-[#4f8cff]"
          >
            Work
          </Link>
        </nav>
      </div>
    </main>
  );
}
