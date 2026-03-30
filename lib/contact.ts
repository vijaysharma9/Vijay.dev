/**
 * Contact email delivery (Resend preferred, FormSubmit.co fallback).
 *
 * FormSubmit.co — one-time activation (per recipient email):
 * The first time you use an address with FormSubmit, you must confirm it.
 * Submit the contact form once from your deployed site (or POST to their endpoint),
 * then check that inbox for FormSubmit’s activation email and click the link.
 * Until activation, AJAX requests may fail or return success: "false".
 *
 * Env: FORM_SUBMIT_TO_EMAIL, NEXT_PUBLIC_SITE_URL (Origin/Referer for AJAX),
 * optional CONTACT_FORM_PROVIDER (`resend` | `formsubmit`), Resend vars when using Resend.
 */

import { normalizeWhitespace } from '@/utils/formatters';

export type ContactSenderInput = {
  name: string;
  email: string;
  projectType?: string;
  budgetRange?: string;
  message: string;
};

type Provider = 'resend' | 'formsubmit';

export async function sendContactMessage(input: ContactSenderInput): Promise<{
  provider: Provider;
}> {
  const name = normalizeWhitespace(input.name);
  const email = input.email.trim();

  const projectType = input.projectType ? normalizeWhitespace(input.projectType) : undefined;
  const budgetRange = input.budgetRange ? normalizeWhitespace(input.budgetRange) : undefined;

  const messageText =
    `Project type: ${projectType ?? '—'}\n` +
    `Budget: ${budgetRange ?? '—'}\n\n` +
    `${normalizeWhitespace(input.message)}`;

  const subject = 'New message from HireDeveloperShop.com contact form';

  const preferred = process.env.CONTACT_FORM_PROVIDER?.trim().toLowerCase();

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL;
  const resendTo = process.env.RESEND_TO_EMAIL;

  // Safety fallback so production contact works even if env sync is delayed.
  const formSubmitTo =
    process.env.FORM_SUBMIT_TO_EMAIL?.trim() || 'vijaysharma6918h@gmail.com';

  const canResend = Boolean(resendApiKey && resendFrom && resendTo);
  const canFormSubmit = Boolean(formSubmitTo);

  if ((preferred === 'resend' || !preferred) && canResend) {
    await sendViaResend({
      apiKey: resendApiKey!,
      from: resendFrom!,
      to: resendTo!,
      subject,
      text: messageText
    });
    return { provider: 'resend' };
  }

  if ((preferred === 'formsubmit' || !preferred) && canFormSubmit) {
    await sendViaFormSubmit({
      name,
      email,
      projectType,
      budgetRange,
      message: normalizeWhitespace(input.message)
    });
    return { provider: 'formsubmit' };
  }

  throw new Error(
    'Contact email sender is not configured. Set RESEND_API_KEY/RESEND_FROM_EMAIL/RESEND_TO_EMAIL or FORM_SUBMIT_TO_EMAIL.'
  );
}

async function sendViaResend({
  apiKey,
  from,
  to,
  subject,
  text
}: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
}) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text
    })
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as
      | { error?: { message?: string } }
      | Record<string, unknown>;

    const msg =
      typeof (data as any)?.error?.message === 'string'
        ? (data as any).error.message
        : 'Resend request failed';

    throw new Error(msg);
  }

  const data = (await res.json().catch(() => ({}))) as { id?: string };
  console.log('[Resend] message delivered, id:', data?.id ?? 'n/a');
}

async function sendViaFormSubmit({
  name,
  email,
  projectType,
  budgetRange,
  message
}: {
  name: string;
  email: string;
  projectType?: string;
  budgetRange?: string;
  message: string;
}) {
  const formSubmitTarget =
    process.env.FORM_SUBMIT_TO_EMAIL?.trim() || 'vijaysharma6918h@gmail.com';
  if (!formSubmitTarget || !formSubmitTarget.includes('@')) {
    throw new Error('FORM_SUBMIT_TO_EMAIL is not a valid email address');
  }

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? 'https://www.hiredevelopershop.com'
  ).replace(/\/+$/, '');

  const payload = {
    name,
    email,
    _subject: `New contact from ${name} — HireDeveloperShop`,
    _replyto: email,
    _next: siteUrl,
    _captcha: 'false',
    _template: 'table',
    message: `Project Type: ${projectType || 'Not specified'}\nBudget: ${budgetRange || 'Not specified'}\n\n${message}`
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8_000);

  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(formSubmitTarget)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: siteUrl,
          Referer: siteUrl
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      }
    );

    const responseText = await res.text();
    console.error('[FormSubmit] status:', res.status, 'body:', responseText);

    if (!res.ok) {
      throw new Error(`FormSubmit HTTP ${res.status}: ${responseText}`);
    }

    let json: { success?: string } = {};
    try {
      json = JSON.parse(responseText) as { success?: string };
    } catch {
      /* non-JSON body */
    }

    if (json.success !== 'true') {
      throw new Error(`FormSubmit rejected: ${responseText}`);
    }

    console.log('[FormSubmit] message delivered to', formSubmitTarget);
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('FormSubmit timed out after 8 s — try again later');
    }
    if (err instanceof Error) {
      if (
        err.message.startsWith('FormSubmit HTTP') ||
        err.message.startsWith('FormSubmit rejected')
      ) {
        throw err;
      }
    }
    const inner = err instanceof Error ? err.message : String(err);
    throw new Error(
      `FormSubmit failed: ${inner}. Raw response is logged above as [FormSubmit] body.`
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
