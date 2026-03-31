'use client';

import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import {
  BUDGET_OPTIONS,
  PROJECT_STAGE_OPTIONS,
  SOURCE_OPTIONS,
  TIMELINE_OPTIONS
} from '@/lib/hire-data';

import { cn } from '@/utils/cn';

import type { ProjectFormInput } from './projectFormSchema';

export default function FormStep3({
  register,
  errors,
  selectedBudget,
  onSelectBudget,
  budgetError
}: {
  register: UseFormRegister<ProjectFormInput>;
  errors: FieldErrors<ProjectFormInput>;
  selectedBudget: string;
  onSelectBudget: (value: string) => void;
  budgetError?: string | null;
}) {
  return (
    <div className="space-y-5">
      <header className="mb-8">
        <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#4f8cff]">
          Step 3 of 4
        </p>
        <h3 className="font-heading text-xl font-extrabold text-[#e8e8f0]">Scope & Budget</h3>
        <p className="mt-1 text-[0.87rem] leading-relaxed text-[#7b7b99]">
          This helps us match you to the right plan and ensure we can deliver within your constraints.
        </p>
      </header>

      <div>
        <span className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Budget Range <span className="text-[#4f8cff]">*</span>
        </span>
        <div className="mb-1 flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => {
            const selected = selectedBudget === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onSelectBudget(opt)}
                className={cn(
                  'rounded-lg border px-3 py-2 text-[0.8rem] font-medium transition',
                  selected
                    ? 'border-[#4f8cff] bg-[rgba(79,140,255,0.1)] text-[#4f8cff]'
                    : 'border-white/[0.07] bg-[rgba(255,255,255,0.032)] text-[#7b7b99] hover:border-[rgba(79,140,255,0.3)] hover:text-[#e8e8f0]'
                )}
                aria-pressed={selected}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {budgetError ? (
          <p className="text-sm text-red-400" role="alert">
            {budgetError}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="hire-timeline" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Timeline <span className="text-[#4f8cff]">*</span>
        </label>
        <select
          id="hire-timeline"
          className="w-full cursor-pointer appearance-none rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          aria-invalid={errors.timeline ? 'true' : 'false'}
          {...register('timeline')}
        >
          {TIMELINE_OPTIONS.map((t) => (
            <option key={t || 'tl-empty'} value={t}>
              {t || 'When do you need this delivered?'}
            </option>
          ))}
        </select>
        {errors.timeline ? (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.timeline.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="hire-stage" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Project Stage
        </label>
        <select
          id="hire-stage"
          className="w-full cursor-pointer appearance-none rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          {...register('projectStage')}
        >
          {PROJECT_STAGE_OPTIONS.map((s) => (
            <option key={s || 'st-empty'} value={s}>
              {s || 'Where are you right now?'}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="hire-source" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          How did you hear about us?
        </label>
        <select
          id="hire-source"
          className="w-full cursor-pointer appearance-none rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          {...register('source')}
        >
          {SOURCE_OPTIONS.map((s) => (
            <option key={s || 'src-empty'} value={s}>
              {s || 'Select…'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
