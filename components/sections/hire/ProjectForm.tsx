'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { contactSubmitErrorMessage } from '@/lib/contactSubmitErrorMessage';
import { PROJECT_TYPES } from '@/lib/hire-data';
import { normalizeWhitespace } from '@/utils/formatters';
import { cn } from '@/utils/cn';
import type { ContactApiResponse } from '@/types';

import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormSuccess from './FormSuccess';
import { projectFormSchema, type ProjectFormInput } from './projectFormSchema';

const ASIDE_STEPS = [
  { step: 1, title: 'About You', sub: 'Name, email, company' },
  { step: 2, title: 'Project Type', sub: 'What are we building?' },
  { step: 3, title: 'Scope & Budget', sub: 'Timeline and investment' },
  { step: 4, title: 'Details', sub: 'Brief and goals' }
] as const;

function buildApiMessage(
  values: ProjectFormInput,
  selectedTypes: string[],
  budgetRange: string
): string {
  const tech = (values.tech ?? '').trim();
  const refs = (values.refs ?? '').trim();
  const desc = values.description.trim();
  let body = `${desc}\n\nTech Stack: ${tech || '—'}\n\nReferences: ${refs || '—'}`;
  const labels = PROJECT_TYPES.filter((p) => selectedTypes.includes(p.value)).map((p) => p.label);
  const extras: string[] = [];
  if (values.projectTitle?.trim()) extras.push(`Project title: ${values.projectTitle.trim()}`);
  extras.push(`Project types: ${labels.join(', ') || '—'}`);
  extras.push(`Budget: ${budgetRange}`);
  extras.push(`Timeline: ${values.timeline}`);
  if (values.projectStage) extras.push(`Stage: ${values.projectStage}`);
  if (values.source) extras.push(`Source: ${values.source}`);
  if (values.phone) extras.push(`Phone: ${values.phone}`);
  if (values.company) extras.push(`Company: ${values.company}`);
  if (values.role) extras.push(`Role: ${values.role}`);
  body += '\n\n---\n' + extras.join('\n');
  if (body.length > 2000) {
    body = body.slice(0, 1997) + '...';
  }
  return body;
}

export default function ProjectForm({ layout = 'page' }: { layout?: 'page' | 'embed' }) {
  const [step, setStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [step2Error, setStep2Error] = useState<string | null>(null);
  const [step3Error, setStep3Error] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const resolver = useMemo(() => zodResolver(projectFormSchema), []);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ProjectFormInput>({
    resolver,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      timeline: '',
      projectStage: '',
      source: '',
      projectTitle: '',
      description: '',
      tech: '',
      refs: '',
      website: ''
    }
  });

  const toggleType = (value: string) => {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setStep2Error(null);
  };

  const onBudgetSelect = (value: string) => {
    setSelectedBudget(value);
    setStep3Error(null);
  };

  const nextStep = async () => {
    setSubmitError(null);
    if (step === 1) {
      const ok = await trigger(['firstName', 'lastName', 'email', 'phone', 'company', 'role']);
      if (ok) setStep(2);
      return;
    }
    if (step === 2) {
      if (selectedTypes.length === 0) {
        setStep2Error('Select at least one project type.');
        return;
      }
      setStep2Error(null);
      setStep(3);
      return;
    }
    if (step === 3) {
      if (!selectedBudget) {
        setStep3Error('Select a budget range.');
        return;
      }
      setStep3Error(null);
      const ok = await trigger(['timeline', 'projectStage', 'source']);
      if (ok) setStep(4);
    }
  };

  const prevStep = () => {
    setSubmitError(null);
    setStep((s) => Math.max(1, s - 1));
  };

  const onSubmit = async (values: ProjectFormInput) => {
    setSubmitError(null);
    if (selectedTypes.length === 0) {
      setSubmitError('Select at least one project type.');
      setStep(2);
      return;
    }
    if (!selectedBudget) {
      setSubmitError('Select a budget range.');
      setStep(3);
      return;
    }

    const name = `${normalizeWhitespace(values.firstName)} ${normalizeWhitespace(values.lastName)}`.trim();
    const message = buildApiMessage(values, selectedTypes, selectedBudget);
    const projectType = PROJECT_TYPES.filter((p) => selectedTypes.includes(p.value))
      .map((p) => p.label)
      .join(', ');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email: values.email.trim(),
          projectType,
          budgetRange: selectedBudget,
          message,
          website: (values.website ?? '').trim()
        })
      });

      let data: ContactApiResponse;
      try {
        data = (await res.json()) as ContactApiResponse;
      } catch {
        setSubmitError('Could not read the server response. Please try again.');
        return;
      }

      if (!res.ok || !data.success) {
        setSubmitError(contactSubmitErrorMessage(res, data));
        return;
      }

      setSuccess(true);
      reset();
      setSelectedTypes([]);
      setSelectedBudget('');
      setStep(1);
    } catch {
      setSubmitError('Network error. Check your connection and try again.');
    }
  };

  const progressPct = success ? 100 : (step / 4) * 100;

  const inner = (
    <>
      <h2 id="hire-form-heading" className="sr-only">
        Project inquiry form
      </h2>
      <div
        className={cn(
          'grid grid-cols-1 gap-10',
          layout === 'embed' ? '' : 'lg:grid-cols-[1fr_1.5fr] lg:items-start lg:gap-16'
        )}
      >
        {layout !== 'embed' ? (
          <aside className="lg:sticky lg:top-28">
            <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
              Project Inquiry
            </p>
            <h3 className="font-heading text-[1.4rem] font-extrabold leading-tight text-[#e8e8f0]">
              Tell Us About Your Project
            </h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-[#7b7b99]">
              4 quick steps. Takes about 3 minutes. The more detail you give, the more accurate our quote
              will be.
            </p>
            <div className="mt-8 flex flex-col gap-2.5">
              {ASIDE_STEPS.map((s) => {
                const isActive = !success && step === s.step;
                const isDone = success || step > s.step;
                return (
                  <div
                    key={s.step}
                    className={cn(
                      'flex items-center gap-3 rounded-[10px] border px-4 py-3 transition-colors',
                      isActive && 'border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.06)]',
                      isDone && !isActive && 'border-[rgba(0,229,160,0.15)] bg-[rgba(0,229,160,0.05)]',
                      !isActive && !isDone && 'border-white/[0.07] bg-transparent'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-heading text-[0.75rem] font-bold transition-colors',
                        isActive && 'border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.15)] text-[#4f8cff]',
                        isDone && !isActive && 'border-[rgba(0,229,160,0.3)] bg-[rgba(0,229,160,0.15)] text-[#00e5a0]',
                        !isActive && !isDone && 'border-white/[0.07] bg-white/[0.05] text-[#7b7b99]'
                      )}
                      aria-hidden
                    >
                      {isDone ? '✓' : s.step}
                    </div>
                    <div>
                      <h4 className="font-heading text-[0.85rem] font-bold text-[#e8e8f0]">{s.title}</h4>
                      <p className="text-[0.75rem] text-[#7b7b99]">{s.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        ) : null}

        <div
          className={cn(
            'overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#09090f]',
            layout === 'embed' && 'w-full min-w-0'
          )}
        >
            <div className="h-[3px] w-full bg-white/[0.05]">
              <div
                className="h-full bg-gradient-to-r from-[#4f8cff] to-[#00e5a0] transition-[width] duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
                aria-hidden
              />
            </div>

            <div className="p-6 sm:p-10">
              {success ? (
                <FormSuccess />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {step === 1 ? <FormStep1 register={register} errors={errors} /> : null}
                  {step === 2 ? (
                    <FormStep2
                      selectedTypes={selectedTypes}
                      onToggle={toggleType}
                      error={step2Error}
                    />
                  ) : null}
                  {step === 3 ? (
                    <FormStep3
                      register={register}
                      errors={errors}
                      selectedBudget={selectedBudget}
                      onSelectBudget={onBudgetSelect}
                      budgetError={step3Error}
                    />
                  ) : null}
                  {step === 4 ? <FormStep4 register={register} errors={errors} /> : null}

                  {submitError ? (
                    <p className="mb-4 text-sm font-semibold text-red-400" role="alert">
                      {submitError}
                    </p>
                  ) : null}

                  {step < 4 ? (
                    <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-[0.78rem] text-[#7b7b99]">
                        Step {step} of 4
                      </span>
                      <div className="flex flex-wrap items-center gap-3">
                        {step > 1 ? (
                          <button
                            type="button"
                            onClick={prevStep}
                            className="rounded-lg border border-white/[0.07] px-5 py-2.5 text-[0.88rem] font-medium text-[#7b7b99] transition hover:border-[#e8e8f0] hover:text-[#e8e8f0]"
                          >
                            ← Back
                          </button>
                        ) : null}
                        <button
                          type="button"
                          onClick={nextStep}
                          className="rounded-lg bg-[#4f8cff] px-6 py-2.5 text-[0.88rem] font-semibold text-white transition hover:opacity-90"
                        >
                          {step === 1
                            ? 'Next — Project Type →'
                            : step === 2
                              ? 'Next — Budget →'
                              : 'Next — Project Details →'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8 space-y-4 border-t border-white/[0.07] pt-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={prevStep}
                          disabled={isSubmitting}
                          className="rounded-lg border border-white/[0.07] px-5 py-2.5 text-[0.88rem] font-medium text-[#7b7b99] transition hover:border-[#e8e8f0] hover:text-[#e8e8f0] disabled:opacity-50"
                        >
                          ← Back
                        </button>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-gradient-to-r from-[#4f8cff] to-[#00e5a0] py-3 text-[0.95rem] font-bold text-white transition hover:opacity-95 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending…' : '🚀 Send Project Brief'}
                      </button>
                      <p className="text-center text-[0.75rem] text-[#7b7b99]">
                        We&apos;ll respond within 4 business hours with a clear next step.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
    </>
  );

  if (layout === 'embed') {
    return (
      <div id="project-form" className="scroll-mt-24" aria-labelledby="hire-form-heading">
        {inner}
      </div>
    );
  }

  return (
    <section
      id="project-form"
      className="scroll-mt-24 border-t border-white/[0.07] bg-[#0d0d18] py-16 sm:py-24"
      aria-labelledby="hire-form-heading"
    >
      <div className="mx-auto max-w-[1100px] px-5">{inner}</div>
    </section>
  );
}
