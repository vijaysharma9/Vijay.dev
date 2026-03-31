'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { BILLING_STEPS } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';

export default function BillingProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            'centered text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            How It Works
          </p>
          <h2 className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Simple,{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Transparent
            </em>{' '}
            Billing
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-[540px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            No retainers. No hourly surprises. No scope creep invoices. Just four clear steps.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BILLING_STEPS.map((step, idx) => (
            <article
              key={step.num}
              className={cn(
                'rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-6 text-center transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.25)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: isInView ? `${idx * 70}ms` : undefined }}
            >
              <div className="mx-auto mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.07)] font-heading text-[0.95rem] font-extrabold text-[#4f8cff]">
                {step.num}
              </div>
              <h3 className="mb-2 font-heading text-[0.92rem] font-bold">{step.title}</h3>
              <p className="text-[0.8rem] leading-[1.5] text-[#7b7b99]">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

