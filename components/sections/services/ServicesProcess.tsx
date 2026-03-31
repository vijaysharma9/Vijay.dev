'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { PROCESS_STEPS } from '@/lib/services-data';
import { cn } from '@/utils/cn';

const DELAY: Record<number, string> = {
  0: 'delay-[60ms]',
  1: 'delay-[130ms]',
  2: 'delay-[200ms]',
  3: 'delay-[270ms]',
  4: 'delay-[270ms]'
};

export default function ServicesProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="border-y border-white/[0.07] bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            'mb-14 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            How Every Project Runs
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            A Process Built for{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              On-Time Delivery
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Five repeatable stages that every engagement follows — no surprises, no scope creep.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={cn(
                'rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-4 py-8 text-center transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]',
                DELAY[i] ?? '',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.07)] font-heading text-base font-extrabold text-[#4f8cff]">
                {step.num}
              </div>
              <h3 className="mb-2 font-heading text-[0.9rem] font-bold">{step.title}</h3>
              <p className="font-body text-[0.78rem] leading-[1.5] text-[#7b7b99]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
