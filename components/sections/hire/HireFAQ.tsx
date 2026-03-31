'use client';

import { useState } from 'react';

import { HIRE_FAQ } from '@/lib/hire-data';

import { cn } from '@/utils/cn';

export default function HireFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#09090f] px-5 py-24 sm:px-[5vw]">
      <div className="mx-auto max-w-[800px]">
        <div className="text-center">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            FAQ
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#e8e8f0]">
            Common{' '}
            <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-[#7b7b99]">Quick answers before you reach out.</p>
        </div>

        <div className="mt-10 flex flex-col gap-2">
          {HIRE_FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-xl border transition-colors',
                  open ? 'border-[rgba(79,140,255,0.25)]' : 'border-white/[0.07]'
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-[0.93rem] font-bold text-[#e8e8f0] transition hover:text-[#4f8cff]"
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span
                    className={cn(
                      'shrink-0 text-[#7b7b99] transition-transform',
                      open && 'rotate-180 text-[#4f8cff]'
                    )}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 text-[0.9rem] leading-relaxed text-[#7b7b99]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
