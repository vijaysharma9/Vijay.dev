'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import type { ContactApiResponse } from '@/types';
import { contactSubmitErrorMessage } from '@/lib/contactSubmitErrorMessage';
import { normalizeWhitespace } from '@/utils/formatters';

const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, 'Please enter your name.')
      .max(80, 'Name is too long.'),
    email: z.string().email('Please enter a valid email address.'),
    projectType: z.string().optional(),
    budgetRange: z.string().optional(),
    message: z
      .string()
      .min(10, 'Please describe your project (at least 10 characters).')
      .max(2000, 'Message is too long.'),
    // Honeypot: bots often fill it; real users keep it empty.
    website: z.string().optional()
  })
  .refine(
    (data) => {
      const honeypot = (data.website ?? '').trim();
      return honeypot.length === 0;
    },
    { message: 'Bot detected.', path: ['website'] }
  )
  .transform((data) => ({
    ...data,
    projectType: data.projectType ? normalizeWhitespace(data.projectType) : undefined,
    budgetRange: data.budgetRange ? normalizeWhitespace(data.budgetRange) : undefined,
    name: normalizeWhitespace(data.name),
    email: data.email.trim(),
    message: normalizeWhitespace(data.message)
  }));

type ContactSchema = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [serverStatus, setServerStatus] = useState<
    { type: 'idle' } | { type: 'success'; message: string } | { type: 'error'; message: string }
  >({ type: 'idle' });

  const schemaResolver = useMemo(() => zodResolver(contactSchema), []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactSchema>({
    resolver: schemaResolver,
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      budgetRange: '',
      message: '',
      website: ''
    }
  });

  const submit = async (values: ContactSchema) => {
    setServerStatus({ type: 'idle' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values)
      });

      let data: ContactApiResponse;
      try {
        data = (await res.json()) as ContactApiResponse;
      } catch {
        setServerStatus({
          type: 'error',
          message: 'Could not read the server response. Please try again.'
        });
        return;
      }

      if (!res.ok || !data.success) {
        setServerStatus({
          type: 'error',
          message: contactSubmitErrorMessage(res, data)
        });
        return;
      }

      setServerStatus({
        type: 'success',
        message:
          data.message ||
          'Message sent! I will get back to you within 24 hours.'
      });
      reset();

      // Keep the UX close to the legacy site: move the user back to the contact section.
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      setServerStatus({
        type: 'error',
        message: 'Network error. Check your connection and try again.'
      });
    }
  };

  const successId = 'contact-success';
  const errorId = 'contact-error';

  return (
    <div className="contact-form reveal" aria-label="Contact form">
      <h3 className="font-heading text-[1.15rem] font-bold mb-[1.75rem]">Send a Message</h3>

      <div
        className="mt-3"
        aria-live="polite"
        role="status"
        aria-atomic="true"
        id="contact-form-status"
      >
        {serverStatus.type === 'success' ? (
          <div id={successId} className="text-accent2 font-semibold">
            ✅ {serverStatus.message}
          </div>
        ) : null}

        {serverStatus.type === 'error' ? (
          <div id={errorId} className="text-red-400 font-semibold" role="alert">
            ❌ {serverStatus.message}
          </div>
        ) : null}
      </div>

      <form id="contactForm" onSubmit={handleSubmit(submit)} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">Your Name *</label>
            <input
              id="fname"
              type="text"
              placeholder="John Doe"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'fname-error' : undefined}
              {...register('name')}
            />
            {errors.name ? (
              <p id="fname-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="femail">Email Address *</label>
            <input
              id="femail"
              type="email"
              placeholder="john@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'femail-error' : undefined}
              {...register('email')}
            />
            {errors.email ? (
              <p id="femail-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ftype">Project Type</label>
          <select id="ftype" {...register('projectType')}>
            <option value="">Select a service…</option>
            <option>Web Application / SaaS</option>
            <option>eCommerce Store</option>
            <option>AI / Automation Solution</option>
            <option>WordPress / Webflow Site</option>
            <option>Mobile App</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fbudget">Budget Range</label>
          <select id="fbudget" {...register('budgetRange')}>
            <option value="">Select budget…</option>
            <option>Under $500</option>
            <option>$500 – $2,000</option>
            <option>$2,000 – $5,000</option>
            <option>$5,000+</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fmsg">Tell me about your project *</label>
          <textarea
            id="fmsg"
            placeholder="Describe your idea, requirements, or questions…"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'fmsg-error' : undefined}
            {...register('message')}
          />
          {errors.message ? (
            <p id="fmsg-error" className="text-red-400 text-sm mt-1" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <div className="hidden">
          <label htmlFor="honeypot-website" className="sr-only">
            Leave this field empty
          </label>
          <input
            id="honeypot-website"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            {...register('website')}
          />
        </div>

        <button
          type="submit"
          className="form-submit"
          disabled={isSubmitting}
          aria-label="Send message"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

