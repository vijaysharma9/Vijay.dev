'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { ABOUT_PROCESS } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutProcess() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inHeader = useInView(headerRef, { once: true, amount: 0.15 });

  return (
    <section aria-labelledby="about-process-title" className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'mb-16 transition-all duration-[650ms] ease-out',
            inHeader ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            {ABOUT_PROCESS.sectionLabel}
          </p>
          <h2
            id="about-process-title"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            {ABOUT_PROCESS.titleLine1}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              {ABOUT_PROCESS.titleEmphasis}
            </em>
          </h2>
          <p className="mt-4 max-w-[520px] font-body text-[1.05rem] leading-[1.7] text-[#7b7b99]">
            {ABOUT_PROCESS.sub}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-transparent via-[#4f8cff] to-transparent opacity-30 lg:block"
            aria-hidden
          />
          {ABOUT_PROCESS.steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} delayIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  delayIndex
}: {
  step: (typeof ABOUT_PROCESS.steps)[number];
  delayIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className={cn(
        'relative z-[1] rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] px-4 py-8 text-center transition-all duration-[650ms] ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.3)]',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
      style={{ transitionDelay: `${delayIndex * 80}ms` }}
    >
      <div className="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-[rgba(79,140,255,0.4)] bg-[rgba(79,140,255,0.08)] font-heading text-[1.1rem] font-extrabold text-[#4f8cff]">
        {step.num}
      </div>
      <h3 className="mb-2 font-heading text-base font-bold">{step.title}</h3>
      <p className="font-body text-[0.85rem] leading-[1.55] text-[#7b7b99]">{step.description}</p>
    </div>
  );
}
