'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { CASE_DEEP } from '@/lib/work-data';
import { cn } from '@/utils/cn';

export default function CaseStudyDeepDive() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="case-saas"
      ref={ref}
      className="case-deep bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]"
      aria-labelledby="case-deep-heading"
    >
      <div className="case-deep-inner mx-auto max-w-[1200px]">
        <div
          className={cn(
            'mb-10 max-w-[640px] transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Case Study Deep Dive
          </p>
          <h2
            id="case-deep-heading"
            className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            {CASE_DEEP.heading.split('SaaS Platform').map((part, idx) =>
              idx === 1 ? (
                <span key={idx}>
                  SaaS Platform
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h2>
          <p className="section-sub mt-4 max-w-[640px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            {CASE_DEEP.subheading}
          </p>
        </div>

        <div
          className={cn(
            'case-header grid gap-[4vw] transition-all duration-700 ease-out lg:grid-cols-2',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <div className="case-challenge rounded-[16px] border border-white/[0.07] bg-[#0d0d18] p-8">
            <h3 className="mb-4 font-heading text-[1rem] font-bold text-[#4f8cff]">
              ⚠ The Challenges
            </h3>
            <div className="challenge-list flex flex-col gap-[0.8rem] text-[0.87rem] leading-[1.55] text-[#7b7b99]">
              {CASE_DEEP.challenges.map((item) => (
                <div key={item} className="ch-item flex items-start gap-[0.8rem]">
                  <span className="ch-icon mt-[2px] flex-shrink-0 text-[#ff7a45]">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-solution rounded-[16px] border border-white/[0.07] bg-[#0d0d18] p-8">
            <h3 className="mb-4 font-heading text-[1rem] font-bold text-[#00e5a0]">
              ✓ How We Solved It
            </h3>
            <div className="space-y-[0.8rem] text-[0.87rem] leading-[1.55] text-[#7b7b99]">
              {CASE_DEEP.solutions.map((item) => (
                <div key={item} className="sol-item flex items-start gap-[0.8rem]">
                  <span className="sol-icon mt-[2px] flex-shrink-0 text-[#00e5a0]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="case-outcomes mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CASE_DEEP.outcomes.map((o, index) => (
            <div
              key={o.label}
              className={cn(
                'outcome-card rounded-[14px] border border-white/[0.07] bg-[#0d0d18] p-6 text-center transition-colors duration-200 hover:border-[rgba(0,229,160,0.3)]',
                `transition-delay-[${index * 70}ms]`
              )}
            >
              <div className="outcome-num font-heading text-[2rem] font-extrabold text-[#00e5a0]">
                {o.num}
              </div>
              <div className="outcome-label mt-[0.4rem] text-[0.78rem] leading-[1.4] text-[#7b7b99]">
                {o.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

