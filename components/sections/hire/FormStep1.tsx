'use client';

import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import { ROLE_OPTIONS } from '@/lib/hire-data';

import type { ProjectFormInput } from './projectFormSchema';

export default function FormStep1({
  register,
  errors
}: {
  register: UseFormRegister<ProjectFormInput>;
  errors: FieldErrors<ProjectFormInput>;
}) {
  return (
    <div className="space-y-5">
      <header className="mb-8">
        <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#4f8cff]">
          Step 1 of 4
        </p>
        <h3 className="font-heading text-xl font-extrabold text-[#e8e8f0]">About You</h3>
        <p className="mt-1 text-[0.87rem] leading-relaxed text-[#7b7b99]">
          Tell us who we&apos;re speaking with so we can personalise our response.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="hire-firstName" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
            First Name <span className="text-[#4f8cff]">*</span>
          </label>
          <input
            id="hire-firstName"
            type="text"
            autoComplete="given-name"
            placeholder="John"
            className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            {...register('firstName')}
          />
          {errors.firstName ? (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.firstName.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="hire-lastName" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
            Last Name <span className="text-[#4f8cff]">*</span>
          </label>
          <input
            id="hire-lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Doe"
            className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            {...register('lastName')}
          />
          {errors.lastName ? (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.lastName.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="hire-email" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Work Email <span className="text-[#4f8cff]">*</span>
        </label>
        <input
          id="hire-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="john@company.com"
          className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email')}
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="hire-phone" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
            Phone (optional)
          </label>
          <input
            id="hire-phone"
            type="tel"
            inputMode="tel"
            placeholder="+1 555 000 0000"
            className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
            {...register('phone')}
          />
        </div>
        <div>
          <label htmlFor="hire-company" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
            Company (optional)
          </label>
          <input
            id="hire-company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
            {...register('company')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="hire-role" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Your Role
        </label>
        <select
          id="hire-role"
          className="w-full cursor-pointer appearance-none rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          {...register('role')}
        >
          {ROLE_OPTIONS.map((r) => (
            <option key={r || 'empty'} value={r}>
              {r || 'Select role…'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
