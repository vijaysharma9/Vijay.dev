import { describe, it, expect, vi, beforeEach } from 'vitest';

import { contactSubmitErrorMessage } from '@/lib/contactSubmitErrorMessage';
import type { ContactApiResponse } from '@/types';

vi.mock('@/constants/contact', () => ({
  CONTACT: {
    emailValue: 'test@example.com',
    emailHref: 'mailto:test@example.com',
    emailLabel: 'Email',
    phoneLabel: '',
    phoneHref: '',
    phoneValue: '',
    locationLabel: '',
    locationValue: '',
    socials: []
  }
}));

function mockResponse(status: number): Response {
  return { status } as Response;
}

describe('contactSubmitErrorMessage', () => {
  beforeEach(() => {
    vi.stubEnv('NODE_ENV', 'test');
  });

  it('VALIDATION_ERROR with server message returns that message', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: { code: 'VALIDATION_ERROR', message: 'Name is required.' }
    };
    expect(contactSubmitErrorMessage(mockResponse(400), data)).toBe(
      'Name is required.'
    );
  });

  it('VALIDATION_ERROR with no message returns the fields fallback', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: { code: 'VALIDATION_ERROR', message: '' }
    };
    expect(contactSubmitErrorMessage(mockResponse(400), data)).toBe(
      'Please check the highlighted fields and try again.'
    );
  });

  it('CONTACT_SEND_FAILED includes the contact email', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: { code: 'CONTACT_SEND_FAILED', message: 'FormSubmit request failed' }
    };
    const out = contactSubmitErrorMessage(mockResponse(500), data);
    expect(out).toContain('test@example.com');
  });

  it('RATE_LIMITED with server message returns that message', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: {
        code: 'RATE_LIMITED',
        message: 'Too many requests — please wait a minute before trying again.'
      }
    };
    expect(contactSubmitErrorMessage(mockResponse(429), data)).toBe(
      'Too many requests — please wait a minute before trying again.'
    );
  });

  it('bot in server message returns refresh copy without the word bot', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: { code: 'VALIDATION_ERROR', message: 'Bot detected.' }
    };
    const out = contactSubmitErrorMessage(mockResponse(400), data);
    expect(out.toLowerCase()).not.toContain('bot');
    expect(out).toContain('refresh');
  });

  it('empty message and unknown code returns safe generic fallback', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: { code: 'UNKNOWN', message: '' }
    };
    expect(contactSubmitErrorMessage(mockResponse(400), data)).toBe(
      'Could not send your message. Please try again.'
    );
  });

  it('500 with unknown code includes the direct email address', () => {
    const data: ContactApiResponse = {
      ok: false,
      error: { code: 'UNKNOWN', message: '' }
    };
    const out = contactSubmitErrorMessage(mockResponse(500), data);
    expect(out).toContain('test@example.com');
  });
});
