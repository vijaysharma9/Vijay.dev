export const dynamic = 'force-dynamic';

async function checkFormSubmitReachable(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3_000);
    const res = await fetch('https://formsubmit.co', {
      method: 'HEAD',
      signal: controller.signal
    });
    clearTimeout(id);
    return res.ok || res.status < 500;
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');
  const expected = process.env.HEALTH_CHECK_SECRET;

  if (!expected || token !== expected) {
    if (process.env.NODE_ENV === 'production') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  return Response.json({
    resendConfigured: !!(
      process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM_EMAIL &&
      process.env.RESEND_TO_EMAIL
    ),
    formSubmitTarget: process.env.FORM_SUBMIT_TO_EMAIL ? 'set' : 'default',
    formSubmitReachable: await checkFormSubmitReachable(),
    provider: process.env.CONTACT_FORM_PROVIDER ?? 'auto'
  });
}
