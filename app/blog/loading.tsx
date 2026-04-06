export default function BlogLoading() {
  return (
    <div
      className="min-h-screen pb-20 pt-28"
      style={{ background: '#09090f' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 h-8 w-48 animate-pulse rounded-full bg-white/10" />
        <div className="h-12 w-3/4 max-w-xl animate-pulse rounded-lg bg-white/10" />
        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-white/5" />
        <div className="mt-8 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-24 animate-pulse rounded-full bg-white/10" />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d18]"
            >
              <div className="aspect-[16/9] animate-pulse bg-white/10" />
              <div className="space-y-3 p-5">
                <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
                <div className="h-6 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
