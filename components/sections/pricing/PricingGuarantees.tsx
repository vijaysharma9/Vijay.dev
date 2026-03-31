'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { GUARANTEES } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';

export default function PricingGuarantees() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            'centered text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Our Guarantees
          </p>
          <h2 className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            We Back Every Project with{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Real Guarantees
            </em>
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-[520px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            Not just words. Commitments that are written into every contract.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {GUARANTEES.map((g, idx) => (
            <article
              key={g.title}
              className={cn(
                'rounded-[16px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-7 transition-all duration-700 ease-out hover:border-[rgba(0,229,160,0.2)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: isInView ? `${idx * 70}ms` : undefined }}
            >
              <div className="mb-4 text-[2.2rem]">{g.icon}</div>
              <h3 className="mb-2 font-heading text-[1rem] font-bold">{g.title}</h3>
              <p className="text-[0.87rem] leading-[1.65] text-[#7b7b99]">{g.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

