'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

import { ABOUT_CTA } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutCta() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden bg-[#0f0f1a] px-[5vw] py-[100px] text-center text-[#e8e8f0]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 70%)'
        }}
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-[680px]">
        <div
          className={cn(
            'transition-all duration-[650ms] ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            {ABOUT_CTA.sectionLabel}
          </p>
          <h2
            id="about-cta-heading"
            className="mb-5 font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            {ABOUT_CTA.titleBefore}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              {ABOUT_CTA.titleEm}
            </em>
            {ABOUT_CTA.titleAfter}
          </h2>
          <p className="mb-10 font-body text-[1.05rem] leading-[1.7] text-[#7b7b99]">{ABOUT_CTA.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ABOUT_CTA.primaryHref}
              className="inline-flex items-center justify-center rounded-lg bg-[#4f8cff] px-7 py-3 font-body text-[0.95rem] font-semibold text-white shadow-[0_0_30px_rgba(79,140,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.4)]"
            >
              {ABOUT_CTA.primaryLabel}
            </Link>
            <a
              href={ABOUT_CTA.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.07)] px-7 py-3 font-body text-[0.95rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              {ABOUT_CTA.secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
