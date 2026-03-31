'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { INDUSTRIES } from '@/lib/services-data';
import { cn } from '@/utils/cn';

export default function ServicesIndustries() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Who We Build For
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Industries We{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Specialise In
            </em>
          </h2>
          <p className="mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Deep domain knowledge across 8 verticals — not just generic tech output.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.id}
              className={cn(
                'rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-5 text-center transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.25)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-3 text-[2rem]" aria-hidden>
                {ind.icon}
              </div>
              <h4 className="mb-1 font-heading text-[0.88rem] font-bold">{ind.title}</h4>
              <p className="font-body text-[0.78rem] leading-[1.45] text-[#7b7b99]">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
