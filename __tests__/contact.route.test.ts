import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/contact', () => ({
  sendContactMessage: vi.fn()
}));

vi.mock('@/lib/rateLimit', () => ({
  isRateLimited: vi.fn()
}));

import { POST } from '@/app/api/contact/route';
import { sendContactMessage } from '@/lib/contact';
import { isRateLimited } from '@/lib/rateLimit';

async function readJson(res: Response) {
  return (await res.json()) as Record<string, unknown>;
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('valid body, send succeeds -> 200 success:true', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(false);
    (sendContactMessage as ReturnType<typeof vi.fn>).mockResolvedValue({
      provider: 'formsubmit'
    });

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Vijay',
        email: 'vijay@example.com',
        message: 'Hello there, this is a valid message.',
        website: ''
      })
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(true);
    expect(typeof json.message).toBe('string');
  });

  it('valid body, sendContactMessage throws -> 500 success:false', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(false);
    (sendContactMessage as ReturnType<typeof vi.fn>).mockRejectedValue(
      new Error('boom')
    );

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Vijay',
        email: 'vijay@example.com',
        message: 'Hello there, this is a valid message.',
        website: ''
      })
    });

    const res = await POST(req);
    expect(res.status).toBe(500);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(false);
    expect(typeof json.error).toBe('string');
  });

  it('missing name -> 400 success:false', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(false);

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: 'vijay@example.com',
        message: 'Hello there, this is a valid message.',
        website: ''
      })
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(false);
    expect(typeof json.error).toBe('string');
  });

  it('message under 10 chars -> 400 success:false', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(false);

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Vijay',
        email: 'vijay@example.com',
        message: 'short',
        website: ''
      })
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(false);
    expect(typeof json.error).toBe('string');
  });

  it('honeypot website filled -> 400 success:false', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(false);

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Vijay',
        email: 'vijay@example.com',
        message: 'Hello there, this is a valid message.',
        website: 'spam'
      })
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(false);
    expect(typeof json.error).toBe('string');
  });

  it('rate limited -> 429 success:false', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(true);

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Vijay',
        email: 'vijay@example.com',
        message: 'Hello there, this is a valid message.',
        website: ''
      })
    });

    const res = await POST(req);
    expect(res.status).toBe(429);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(false);
    expect(json.error).toContain('Too many');
  });

  it('non-POST method (GET) -> 405', async () => {
    (isRateLimited as ReturnType<typeof vi.fn>).mockReturnValue(false);

    const req = new Request('http://localhost/api/contact', {
      method: 'GET'
    });

    const res = await POST(req);
    expect(res.status).toBe(405);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    const json = await readJson(res);
    expect(json.success).toBe(false);
    expect(typeof json.error).toBe('string');
  });
});
