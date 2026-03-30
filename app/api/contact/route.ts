import { z } from 'zod';

import type { ContactApiResponse } from '@/types';
import { sendContactMessage } from '@/lib/contact';
import { isRateLimited } from '@/lib/rateLimit';

const contactRequestSchema = z
  .object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    projectType: z.string().optional().nullable(),
    budgetRange: z.string().optional().nullable(),
    message: z.string().min(10).max(2000),
    website: z.string().optional().nullable()
  })
  .refine(
    (data) => {
      const honeypot = (data.website ?? '').trim();
      return honeypot.length === 0;
    },
    { message: 'Bot detected.', path: ['website'] }
  );

export const dynamic = 'force-dynamic';

const SECURE_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY'
} as const;

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return jsonResponse({
      ok: false,
      error: { code: 'METHOD_NOT_ALLOWED', message: 'Only POST is allowed.' }
    }, 405);
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return Response.json(
      {
        ok: false,
        error: {
          code: 'RATE_LIMITED',
          message: 'Too many requests — please wait a minute before trying again.'
        }
      },
      {
        status: 429,
        headers: {
          ...SECURE_HEADERS,
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    );
  }

  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? 'Invalid request.';

    const response: ContactApiResponse = {
      ok: false,
      error: { code: 'VALIDATION_ERROR', message }
    };

    return jsonResponse(response, 400);
  }

  try {
    const { name, email, message, projectType, budgetRange } = parsed.data;

    await sendContactMessage({
      name,
      email,
      message,
      projectType: projectType ?? undefined,
      budgetRange: budgetRange ?? undefined
    });

    const response: ContactApiResponse = {
      ok: true,
      message: '✅ Message sent! I will get back to you within 24 hours.'
    };

    return jsonResponse(response, 200);
  } catch (err) {
    console.error(
      '[/api/contact] sendContactMessage failed:',
      err instanceof Error ? err.message : err
    );

    const message =
      process.env.NODE_ENV === 'development'
        ? err instanceof Error
          ? err.message
          : 'Unknown error'
        : 'FormSubmit request failed';

    const response: ContactApiResponse = {
      ok: false,
      error: { code: 'CONTACT_SEND_FAILED', message }
    };

    return jsonResponse(response, 500);
  }
}

function jsonResponse(payload: ContactApiResponse, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...SECURE_HEADERS,
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
