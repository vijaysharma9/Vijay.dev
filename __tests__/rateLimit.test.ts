import { describe, it, expect, beforeEach, vi } from 'vitest';

import { isRateLimited, _rateLimitStore } from '@/lib/rateLimit';

describe('rateLimit', () => {
  beforeEach(() => {
    _rateLimitStore.clear();
    vi.restoreAllMocks();
  });

  it('first request from an IP -> not limited', () => {
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
  });

  it('second and third requests -> not limited (limit 3)', () => {
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
  });

  it('fourth request within window -> limited', () => {
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 60_000)).toBe(true);
  });

  it('after resetAt expires -> counter resets', () => {
    const now = vi.spyOn(Date, 'now');
    now.mockReturnValue(0);

    expect(isRateLimited('1.2.3.4', 3, 1_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 1_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 1_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 3, 1_000)).toBe(true);

    now.mockReturnValue(2_000);
    expect(isRateLimited('1.2.3.4', 3, 1_000)).toBe(false);
  });

  it('ip \"unknown\" -> never limited', () => {
    for (let i = 0; i < 10; i++) {
      expect(isRateLimited('unknown', 1, 1)).toBe(false);
    }
  });

  it('two different IPs -> independent counters', () => {
    expect(isRateLimited('1.2.3.4', 1, 60_000)).toBe(false);
    expect(isRateLimited('1.2.3.4', 1, 60_000)).toBe(true);

    expect(isRateLimited('5.6.7.8', 1, 60_000)).toBe(false);
    expect(isRateLimited('5.6.7.8', 1, 60_000)).toBe(true);
  });
});

