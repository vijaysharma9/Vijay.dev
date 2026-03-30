'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { ABOUT_STACK } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutStack() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inHeader = useInView(headerRef, { once: true, amount: 0.2 });

  return (
    <section aria-labelledby="about-stack-title" className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'mb-14 text-center transition-all duration-[650ms] ease-out',
            inHeader ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            {ABOUT_STACK.sectionLabel}
          </p>
          <h2
            id="about-stack-title"
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            {ABOUT_STACK.titleLine1}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              {ABOUT_STACK.titleEmphasis}
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] font-body text-[1.05rem] leading-[1.7] text-[#7b7b99]">
            {ABOUT_STACK.sub}
          </p>
        </div>

        {ABOUT_STACK.rows.map((row, rowIndex) => (
          <StackRow key={rowIndex} chips={row} delayIndex={rowIndex} />
        ))}
      </div>
    </section>
  );
}

function StackRow({
  chips,
  delayIndex
}: {
  chips: (typeof ABOUT_STACK.rows)[number];
  delayIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-3 flex flex-wrap justify-center gap-2.5 transition-all duration-[650ms] ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
      style={{ transitionDelay: `${delayIndex * 80}ms` }}
    >
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={cn(
            'cursor-default rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] px-[1.1rem] py-2 font-body text-[0.85rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]',
            chip.accent && 'border-[rgba(79,140,255,0.3)] text-[#4f8cff]'
          )}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
