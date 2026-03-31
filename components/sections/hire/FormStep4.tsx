'use client';

import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import type { ProjectFormInput } from './projectFormSchema';

export default function FormStep4({
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
          Step 4 of 4
        </p>
        <h3 className="font-heading text-xl font-extrabold text-[#e8e8f0]">Project Details</h3>
        <p className="mt-1 text-[0.87rem] leading-relaxed text-[#7b7b99]">
          The more context you give, the more accurate and useful our response will be.
        </p>
      </header>

      <div>
        <label htmlFor="hire-projectTitle" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Project Title / Name
        </label>
        <input
          id="hire-projectTitle"
          type="text"
          placeholder="e.g. 'Customer analytics dashboard for SaaS'"
          className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          {...register('projectTitle')}
        />
      </div>

      <div>
        <label htmlFor="hire-description" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Project Description <span className="text-[#4f8cff]">*</span>
        </label>
        <textarea
          id="hire-description"
          placeholder="Describe what you want to build, the problem it solves, who the users are, and any specific features you have in mind. The more detail, the better."
          rows={6}
          className="min-h-[130px] w-full resize-y rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          aria-invalid={errors.description ? 'true' : 'false'}
          {...register('description')}
        />
        {errors.description ? (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.description.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="hire-tech" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Existing Tech Stack (if any)
        </label>
        <input
          id="hire-tech"
          type="text"
          placeholder="e.g. React frontend, Node.js API, PostgreSQL — or 'starting fresh'"
          className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          {...register('tech')}
        />
      </div>

      <div>
        <label htmlFor="hire-refs" className="mb-1.5 block text-[0.78rem] font-semibold tracking-wide text-[#e8e8f0]">
          Reference or Inspiration Links (optional)
        </label>
        <input
          id="hire-refs"
          type="text"
          placeholder="URLs of similar products or designs you like"
          className="w-full rounded-[10px] border border-white/[0.07] bg-[#0d0d18] px-4 py-3 text-[0.9rem] text-[#e8e8f0] outline-none transition focus:border-[#4f8cff]/50 focus:shadow-[0_0_0_3px_rgba(79,140,255,0.08)]"
          {...register('refs')}
        />
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="hire-website" className="sr-only">
          Leave this field empty
        </label>
        <input
          id="hire-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>
      {errors.website ? (
        <p className="text-sm text-red-400" role="alert">
          {errors.website.message}
        </p>
      ) : null}
    </div>
  );
}
