interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Prune expired entries every 5 minutes to prevent unbounded memory growth.
const interval = setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }
}, 5 * 60 * 1_000);

// Don't keep the process alive just for pruning.
// (Some runtimes may not support unref; optional-chain for safety.)
(interval as any)?.unref?.();

export function isRateLimited(ip: string, limit = 3, windowMs = 60_000): boolean {
  // Never rate-limit on unknown IP — it would create a shared bucket for all
  // requests missing forwarding headers (e.g. direct server-to-server calls).
  if (!ip || ip === 'unknown') return false;

  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= limit) return true;
  entry.count++;
  return false;
}

// Exported for tests only.
export { store as _rateLimitStore };
