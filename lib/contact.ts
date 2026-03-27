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
      to: formSubmitTo!,
      subject,
      replyTo: email,
      name,
      text: messageText
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
}

async function sendViaFormSubmit({
  to,
  subject,
  replyTo,
  name,
  text
}: {
  to: string;
  subject: string;
  replyTo: string;
  name: string;
  text: string;
}) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name,
      email: replyTo,
      _subject: subject,
      _replyto: replyTo,
      message: text
    })
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as
      | { message?: string; error?: string }
      | Record<string, unknown>;

    const msg =
      typeof (data as any)?.message === 'string'
        ? (data as any).message
        : typeof (data as any)?.error === 'string'
          ? (data as any).error
          : 'FormSubmit request failed';

    throw new Error(msg);
  }
}

