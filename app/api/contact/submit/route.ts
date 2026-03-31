import { z } from 'zod';

import { sendContactMessage } from '@/lib/contact';

export const dynamic = 'force-dynamic';

const SECURE_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Content-Type': 'application/json; charset=utf-8'
} as const;

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const submitSchema = z.object({
  formType: z.literal('contact'),
  fullName: z.string().min(2).max(120),
  email: z.string().regex(emailRegex, 'Invalid email.'),
  phoneCountry: z.string().min(1).max(10),
  phoneNumber: z.string().regex(/^\d{7,15}$/).optional(),
  company: z.string().max(120).optional(),
  message: z.string().min(10).max(10_000)
});

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = submitSchema.safeParse(body);

  if (!parsed.success) {
    const first = parsed.error.issues[0];
    const msg = first?.message ?? 'Invalid request.';
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 400,
      headers: SECURE_HEADERS
    });
  }

  try {
    await sendContactMessage({
      name: parsed.data.fullName,
      email: parsed.data.email,
      message: parsed.data.message
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: '✅ Message sent! We will get back to you within 24 hours.'
      }),
      { status: 201, headers: SECURE_HEADERS }
    );
  } catch (err) {
    const reason = err instanceof Error ? err.message : 'Unknown error';
    console.error('[/api/contact/submit] sendContactMessage failed:', reason);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Email could not be sent. Please try again later or contact us directly.'
      }),
      { status: 500, headers: SECURE_HEADERS }
    );
  }
}

