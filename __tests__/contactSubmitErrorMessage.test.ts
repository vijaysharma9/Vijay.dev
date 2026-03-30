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

  it('validation error with server message returns that message', () => {
    const data: ContactApiResponse = {
      success: false,
      error: 'Name is required.'
    };
    expect(contactSubmitErrorMessage(mockResponse(400), data)).toBe(
      'Name is required.'
    );
  });

  it('validation error with no message returns the fields fallback', () => {
    const data: ContactApiResponse = {
      success: false,
      error: ''
    };
    expect(contactSubmitErrorMessage(mockResponse(400), data)).toBe(
      'Please check the highlighted fields and try again.'
    );
  });

  it('500 with explicit error string returns that string', () => {
    const data: ContactApiResponse = {
      success: false,
      error:
        'Email could not be sent. Please try again later or contact us directly.'
    };
    expect(contactSubmitErrorMessage(mockResponse(500), data)).toBe(
      'Email could not be sent. Please try again later or contact us directly.'
    );
  });

  it('rate limit message returns that message', () => {
    const data: ContactApiResponse = {
      success: false,
      error: 'Too many requests — please wait a minute before trying again.'
    };
    expect(contactSubmitErrorMessage(mockResponse(429), data)).toBe(
      'Too many requests — please wait a minute before trying again.'
    );
  });

  it('bot in server message returns refresh copy without the word bot', () => {
    const data: ContactApiResponse = {
      success: false,
      error: 'Bot detected.'
    };
    const out = contactSubmitErrorMessage(mockResponse(400), data);
    expect(out.toLowerCase()).not.toContain('bot');
    expect(out).toContain('refresh');
  });

  it('empty message and unknown status returns safe generic fallback', () => {
    const data: ContactApiResponse = {
      success: false,
      error: ''
    };
    expect(contactSubmitErrorMessage(mockResponse(418), data)).toBe(
      'Could not send your message. Please try again.'
    );
  });

  it('500 with empty error includes the direct email address', () => {
    const data: ContactApiResponse = {
      success: false,
      error: ''
    };
    const out = contactSubmitErrorMessage(mockResponse(500), data);
    expect(out).toContain('test@example.com');
  });
});
