'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { PROCESS_STEPS } from '@/lib/work-data';
import { cn } from '@/utils/cn';

export default function WorkProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="work-process bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]"
      aria-labelledby="work-process-heading"
    >
      <div className="inner mx-auto max-w-[1200px]">
        <div
          className={cn(
            'centered mb-10 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            How Projects Run
          </p>
          <h2
            id="work-process-heading"
            className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            The Process Behind{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Every Delivery
            </em>
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-[500px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            The same 5-stage process runs on every project — regardless of size.
          </p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[34px] z-0 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(79,140,255,0.45),rgba(162,89,255,0.45),transparent)] md:block" />
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.num}
              className={cn(
                'wp-step relative z-10 rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.028)] px-5 py-7 text-center transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: isInView ? `${index * 70}ms` : undefined }}
            >
              <div className="wp-num mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.07)] font-heading text-[0.95rem] font-extrabold text-[#4f8cff]">
                {step.num}
              </div>
              <h3 className="mb-1 font-heading text-[0.9rem] font-bold">{step.title}</h3>
              <p className="mx-auto max-w-[16rem] text-[0.78rem] leading-[1.55] text-[#7b7b99]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

