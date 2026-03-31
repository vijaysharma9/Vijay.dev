'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/utils/cn';

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const SERVICES = [
  { id: 'ai-dev', label: '🧠 AI Development' },
  { id: 'ai-auto', label: '⚙️ AI Automation' },
  { id: 'web-app', label: '💻 Web Application' },
  { id: 'mobile', label: '📱 Mobile App' },
  { id: 'saas', label: '☁️ SaaS Platform' },
  { id: 'enterprise', label: '🏢 Enterprise Software' },
  { id: 'team', label: '👥 Dedicated Team' },
  { id: 'devops', label: '🛡️ DevOps / Cloud' },
  { id: 'uiux', label: '🎨 UI/UX Design' },
  { id: 'data', label: '📊 Data & Analytics' }
] as const;

const TIMELINES = ['ASAP', '1–3 Months', '3–6 Months', 'Exploring'] as const;

const ROLES = [
  'Founder/CEO',
  'CTO/Tech Lead',
  'Product Manager',
  'Engineering Manager',
  'Developer',
  'Designer',
  'Other'
] as const;

const CODEBASE = [
  'No — starting from scratch',
  'Yes — needs new features',
  'Yes — needs redesign/refactor',
  'Yes — needs AI integration',
  'Unsure'
] as const;

const SOURCES = ['Google Search', 'LinkedIn', 'Twitter/X', 'Referral', 'GitHub', 'Blog', 'Other'] as const;

type Step = 1 | 2 | 3 | 4;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: (typeof ROLES)[number] | '';
  servicesNeeded: string[];
  timeline: (typeof TIMELINES)[number] | '';
  budget: number;
  codebase: (typeof CODEBASE)[number] | '';
  description: string;
  howFound: (typeof SOURCES)[number] | '';
  nda: boolean;
  privacy: boolean;
};

function formatBudget(budget: number) {
  if (budget >= 500_000) return '$500k+';
  if (budget >= 1_000) return `$${Math.round(budget / 1000)}k`;
  return `$${budget}`;
}

function digitsOnlyPhone(raw: string) {
  const digits = raw.replace(/[^\d]/g, '');
  return digits.length > 0 ? digits : null;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ContactFormSection() {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<
    | { type: 'idle' }
    | { type: 'loading' }
    | { type: 'success' }
    | { type: 'error'; message: string }
  >({ type: 'idle' });

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    servicesNeeded: [],
    timeline: '',
    budget: 25_000,
    codebase: '',
    description: '',
    howFound: '',
    nda: false,
    privacy: false
  });

  const step1Valid = useMemo(() => {
    const first = form.firstName.trim();
    const last = form.lastName.trim();
    const email = form.email.trim();
    return first.length > 0 && last.length > 0 && EMAIL_REGEX.test(email);
  }, [form.firstName, form.lastName, form.email]);

  const step2Valid = useMemo(() => {
    return form.servicesNeeded.length >= 1 && Boolean(form.timeline);
  }, [form.servicesNeeded.length, form.timeline]);

  const step3Valid = useMemo(() => {
    return form.description.trim().length >= 10;
  }, [form.description]);

  const canSubmit = step1Valid && step2Valid && step3Valid && form.privacy;

  const progress = useMemo(() => {
    const pct = (step / 4) * 100;
    return clamp(pct, 25, 100);
  }, [step]);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleService = (label: string) => {
    setForm((prev) => {
      const exists = prev.servicesNeeded.includes(label);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== label)
          : [...prev.servicesNeeded, label]
      };
    });
  };

  const nextDisabled =
    (step === 1 && !step1Valid) || (step === 2 && !step2Valid) || (step === 3 && !step3Valid);

  const goNext = () => {
    setStatus({ type: 'idle' });
    setStep((s) => (s < 4 ? ((s + 1) as Step) : s));
  };

  const goBack = () => {
    setStatus({ type: 'idle' });
    setStep((s) => (s > 1 ? ((s - 1) as Step) : s));
  };

  const submit = async () => {
    if (!canSubmit || status.type === 'loading') return;
    setStatus({ type: 'loading' });

    const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();
    const phoneNumber = digitsOnlyPhone(form.phone);

    const lines: string[] = [];
    lines.push(form.description.trim());
    lines.push('');
    lines.push(`Services: ${form.servicesNeeded.join(', ')}`);
    lines.push(`Timeline: ${form.timeline}`);
    lines.push(`Budget: ${formatBudget(form.budget)}`);
    if (form.codebase) lines.push(`Codebase: ${form.codebase}`);
    if (form.role) lines.push(`Role: ${form.role}`);
    if (form.howFound) lines.push(`How found us: ${form.howFound}`);
    if (form.nda) lines.push('NDA requested: Yes');

    const payload: Record<string, unknown> = {
      formType: 'contact',
      fullName,
      email: form.email.trim(),
      phoneCountry: '+224',
      message: lines.join('\n')
    };

    if (phoneNumber) payload.phoneNumber = phoneNumber;
    if (form.company.trim()) payload.company = form.company.trim();

    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = (await res.json().catch(() => null)) as
        | { success: true; message?: string }
        | { success: false; error?: string }
        | null;

      if (!res.ok || !data || !data.success) {
        setStatus({
          type: 'error',
          message:
            data && 'error' in data && typeof data.error === 'string'
              ? data.error
              : 'Could not send your message. Please try again.'
        });
        return;
      }

      setStatus({ type: 'success' });
    } catch {
      setStatus({ type: 'error', message: 'Network error. Check your connection and try again.' });
    }
  };

  if (status.type === 'success') {
    return (
      <div className="w-full rounded-2xl border border-white/[0.07] bg-[rgba(255,255,255,0.035)] p-8 text-[#e8e8f0]">
        <h3 className="font-heading text-2xl font-extrabold">Message Sent Successfully!</h3>
        <p className="mt-3 font-body text-[#7b7b99]">
          Thank you for reaching out. We&apos;ll review your details and respond within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded-lg bg-[#4f8cff] px-6 py-3 text-[0.92rem] font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.38)]"
          >
            Browse Services
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-white/[0.07] px-6 py-3 text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
          >
            Back to Contact
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-white/[0.07] bg-[rgba(255,255,255,0.035)] p-6 text-[#e8e8f0] sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-heading text-[1.2rem] font-bold">Project Inquiry</h3>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b7b99]">
            Step {step} / 4
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-white/[0.06]">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#a259ff] transition-[width] duration-500"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-5">
          <div>
            <h4 className="font-heading text-base font-bold">About You</h4>
            <p className="mt-1 text-sm text-[#7b7b99]">Tell us who we&apos;re speaking with.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First Name *" htmlFor="firstName">
              <input
                id="firstName"
                value={form.firstName}
                onChange={(e) => set('firstName', e.target.value)}
                className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
                placeholder="John"
                autoComplete="given-name"
              />
            </Field>
            <Field label="Last Name *" htmlFor="lastName">
              <input
                id="lastName"
                value={form.lastName}
                onChange={(e) => set('lastName', e.target.value)}
                className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
                placeholder="Doe"
                autoComplete="family-name"
              />
            </Field>
          </div>

          <Field
            label="Work Email *"
            htmlFor="email"
            hint={!form.email || EMAIL_REGEX.test(form.email) ? undefined : 'Please enter a valid email.'}
          >
            <input
              id="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
              placeholder="john@company.com"
              autoComplete="email"
              inputMode="email"
            />
          </Field>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Phone (optional)" htmlFor="phone">
              <input
                id="phone"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
                placeholder="+1 555 000 0000"
                inputMode="tel"
              />
            </Field>
            <Field label="Company (optional)" htmlFor="company">
              <input
                id="company"
                value={form.company}
                onChange={(e) => set('company', e.target.value)}
                className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
                placeholder="Acme Inc."
                autoComplete="organization"
              />
            </Field>
          </div>

          <Field label="Role (optional)" htmlFor="role">
            <select
              id="role"
              value={form.role}
              onChange={(e) => set('role', e.target.value as FormState['role'])}
              className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
            >
              <option value="">Select role…</option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <div>
            <h4 className="font-heading text-base font-bold">Your Project</h4>
            <p className="mt-1 text-sm text-[#7b7b99]">
              Select the services you need and your expected timeline.
            </p>
          </div>

          <div>
            <div className="mb-2 text-sm font-semibold">Services Needed *</div>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((svc) => {
                const selected = form.servicesNeeded.includes(svc.label);
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => toggleService(svc.label)}
                    className={cn(
                      'rounded-full border px-3 py-2 text-sm transition',
                      selected
                        ? 'border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.12)] text-[#e8e8f0]'
                        : 'border-white/[0.08] bg-[rgba(255,255,255,0.03)] text-[#7b7b99] hover:border-[rgba(79,140,255,0.35)] hover:text-[#e8e8f0]'
                    )}
                    aria-pressed={selected}
                  >
                    {svc.label}
                  </button>
                );
              })}
            </div>
            {!step2Valid && form.servicesNeeded.length === 0 ? (
              <p className="mt-2 text-sm text-red-400">Select at least 1 service.</p>
            ) : null}
          </div>

          <div>
            <div className="mb-2 text-sm font-semibold">Timeline *</div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TIMELINES.map((t) => {
                const selected = form.timeline === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set('timeline', t)}
                    className={cn(
                      'rounded-xl border px-4 py-4 text-left transition',
                      selected
                        ? 'border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.12)]'
                        : 'border-white/[0.08] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(79,140,255,0.35)]'
                    )}
                    aria-pressed={selected}
                  >
                    <div className="font-semibold text-[#e8e8f0]">{t}</div>
                    <div className="mt-1 text-sm text-[#7b7b99]">
                      {t === 'ASAP'
                        ? 'Start immediately.'
                        : t === 'Exploring'
                          ? 'Still scoping and researching.'
                          : 'Plan and build with milestones.'}
                    </div>
                  </button>
                );
              })}
            </div>
            {!step2Valid && !form.timeline ? (
              <p className="mt-2 text-sm text-red-400">Select a timeline.</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
          <div>
            <h4 className="font-heading text-base font-bold">Details</h4>
            <p className="mt-1 text-sm text-[#7b7b99]">
              A few details help us respond with the right next steps.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#0b0b14] p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Budget (USD)</div>
              <div className="text-sm font-semibold text-[#4f8cff]">{formatBudget(form.budget)}</div>
            </div>
            <input
              type="range"
              min={5000}
              max={500000}
              step={5000}
              value={form.budget}
              onChange={(e) => set('budget', Number(e.target.value))}
              className="mt-3 w-full accent-[#4f8cff]"
              aria-label="Budget slider"
            />
            <div className="mt-2 flex justify-between text-xs text-[#7b7b99]">
              <span>$5k</span>
              <span>$500k+</span>
            </div>
          </div>

          <Field label="Existing Codebase (optional)" htmlFor="codebase">
            <select
              id="codebase"
              value={form.codebase}
              onChange={(e) => set('codebase', e.target.value as FormState['codebase'])}
              className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
            >
              <option value="">Select option…</option>
              {CODEBASE.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Project Description *"
            htmlFor="description"
            hint={form.description.trim().length >= 10 ? undefined : 'Please write at least 10 characters.'}
          >
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
              className="min-h-[140px] w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
              placeholder="Describe your goals, requirements, and any links or references…"
            />
          </Field>

          <div className="rounded-xl border border-dashed border-white/[0.12] bg-[rgba(255,255,255,0.02)] p-4">
            <div className="text-sm font-semibold">Upload (optional)</div>
            <p className="mt-1 text-sm text-[#7b7b99]">
              Placeholder UI only — you can share links in the description for now.
            </p>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-5">
          <div>
            <h4 className="font-heading text-base font-bold">Send</h4>
            <p className="mt-1 text-sm text-[#7b7b99]">Final details before sending.</p>
          </div>

          <Field label="How did you find us? (optional)" htmlFor="howFound">
            <select
              id="howFound"
              value={form.howFound}
              onChange={(e) => set('howFound', e.target.value as FormState['howFound'])}
              className="w-full rounded-lg border border-white/[0.08] bg-[#0b0b14] px-4 py-3 text-sm text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]"
            >
              <option value="">Select source…</option>
              {SOURCES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.02)] p-4">
            <input
              type="checkbox"
              checked={form.nda}
              onChange={(e) => set('nda', e.target.checked)}
              className="mt-1 h-4 w-4 accent-[#4f8cff]"
            />
            <span>
              <span className="block text-sm font-semibold text-[#e8e8f0]">
                I&apos;d like to sign an NDA before sharing sensitive details.
              </span>
              <span className="mt-1 block text-sm text-[#7b7b99]">Optional.</span>
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.02)] p-4">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => set('privacy', e.target.checked)}
              className="mt-1 h-4 w-4 accent-[#4f8cff]"
            />
            <span>
              <span className="block text-sm font-semibold text-[#e8e8f0]">
                I agree to the Privacy Policy and consent to being contacted.
              </span>
              <span className="mt-1 block text-sm text-[#7b7b99]">Required to submit.</span>
            </span>
          </label>

          {status.type === 'error' ? (
            <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-4 text-sm text-red-300" role="alert">
              {status.message}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 1 || status.type === 'loading'}
          className="rounded-lg border border-white/[0.08] px-5 py-3 text-sm font-semibold text-[#e8e8f0] transition disabled:cursor-not-allowed disabled:opacity-40 hover:border-[#4f8cff] hover:text-[#4f8cff]"
        >
          Back
        </button>

        {step < 4 ? (
          <button
            type="button"
            onClick={goNext}
            disabled={nextDisabled || status.type === 'loading'}
            className="rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.18)] transition disabled:cursor-not-allowed disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.28)]"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit || status.type === 'loading'}
            className="rounded-lg bg-[#4f8cff] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.18)] transition disabled:cursor-not-allowed disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.28)]"
          >
            {status.type === 'loading' ? 'Sending…' : 'Send'}
          </button>
        )}
      </div>

      {step === 4 ? (
        <p className="mt-3 text-xs text-[#7b7b99]">
          Submit is enabled only when steps 1–3 are valid and privacy consent is checked.
        </p>
      ) : null}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-[#e8e8f0]">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-2 text-sm text-red-400">{hint}</p> : null}
    </div>
  );
}

