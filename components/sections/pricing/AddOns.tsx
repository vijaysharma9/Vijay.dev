'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { ADDONS } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';

export default function AddOns() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            'transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Optional Add-Ons
          </p>
          <h2 className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Extend Any Plan with{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Add-Ons
            </em>
          </h2>
          <p className="section-sub mt-4 max-w-[520px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            Bolt-on services available with any tier. Quoted separately and added to your fixed-price
            contract.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ADDONS.map((a, idx) => (
            <article
              key={a.title}
              className={cn(
                'rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.25)]',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: isInView ? `${idx * 70}ms` : undefined }}
            >
              <div className="mb-3 text-[1.8rem]">{a.icon}</div>
              <h3 className="mb-2 font-heading text-[0.95rem] font-bold">{a.title}</h3>
              <p className="mb-4 text-[0.83rem] leading-[1.55] text-[#7b7b99]">{a.desc}</p>
              <div className="font-heading text-[1.1rem] font-extrabold text-[#4f8cff]">
                From ${a.priceFrom.toLocaleString('en-US')}{' '}
                <span className="font-body text-[0.78rem] font-normal text-[#7b7b99]">
                  / {a.unit}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

