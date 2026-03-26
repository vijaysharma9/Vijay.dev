import { z } from 'zod';

import type { ContactApiResponse } from '@/types';
import { sendContactMessage } from '@/lib/contact';

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

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return jsonResponse({
      ok: false,
      error: { code: 'METHOD_NOT_ALLOWED', message: 'Only POST is allowed.' }
    });
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
    const message =
      err instanceof Error ? err.message : 'Could not send the message.';

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
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

