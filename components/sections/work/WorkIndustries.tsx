'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { INDUSTRIES } from '@/lib/work-data';
import { cn } from '@/utils/cn';

export default function WorkIndustries() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]"
      aria-labelledby="work-industries-heading"
    >
      <div className="inner mx-auto max-w-[1200px]">
        <div
          className={cn(
            'centered mb-10 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Industries
          </p>
          <h2
            id="work-industries-heading"
            className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
          >
            9 Verticals,{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Deep Domain Knowledge
            </em>
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-[500px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            Not generic tech output — we understand the business context before writing a line of
            code.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, idx) => (
            <article
              key={ind.name}
              className={cn(
                'ind-card rounded-[12px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-5 text-center transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.25)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: isInView ? `${idx * 70}ms` : undefined }}
            >
              <div className="ind-icon mb-3 text-[2rem]">{ind.icon}</div>
              <h3 className="mb-1 font-heading text-[0.88rem] font-bold">{ind.name}</h3>
              <p className="mb-2 text-[0.78rem] leading-[1.45] text-[#7b7b99]">{ind.desc}</p>
              <div className="ind-count text-[0.68rem] font-semibold text-[#4f8cff]">
                {ind.count}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

