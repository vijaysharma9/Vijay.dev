import { CONTACT } from '@/constants/contact';
import type { ContactApiResponse } from '@/types';

/**
 * Maps API + HTTP errors to user-visible copy (used by the contact form).
 */
export function contactSubmitErrorMessage(
  res: Response,
  data: ContactApiResponse
): string {
  if (data.success) {
    return res.status >= 500
      ? 'Something went wrong while sending your message. Please try again in a moment.'
      : 'Could not send your message. Please check the form and try again.';
  }

  const raw = data.error;

  if (process.env.NODE_ENV === 'development' && raw) {
    return raw;
  }

  if (raw?.toLowerCase().includes('bot')) {
    return 'Something went wrong. Please refresh the page and try again.';
  }

  if (res.status === 429) {
    return raw ?? 'Too many attempts — please wait a minute and try again.';
  }

  if (res.status === 400) {
    return raw || 'Please check the highlighted fields and try again.';
  }

  if (res.status === 500) {
    return (
      raw ||
      `We couldn't send your message. Please try again or write to us at ${CONTACT.emailValue}.`
    );
  }

  return raw || 'Could not send your message. Please try again.';
}
