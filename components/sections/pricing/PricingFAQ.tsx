'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import { PRICING_FAQ } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';

export default function PricingFAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[800px]">
        <div
          className={cn(
            'mb-12 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="section-label mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            FAQ
          </p>
          <h2 className="section-title font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Pricing{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Questions
            </em>
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-[500px] text-[1rem] leading-[1.75] text-[#7b7b99]">
            Everything you need to know before committing to a project.
          </p>
        </div>

        <div className="space-y-3">
          {PRICING_FAQ.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-[12px] border border-white/[0.07] transition-colors',
                  isOpen && 'border-[rgba(79,140,255,0.25)]'
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-[0.95rem] font-bold transition-colors hover:text-[#4f8cff]"
                  onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span
                    className={cn(
                      'text-[1rem] text-[#7b7b99] transition-transform duration-300',
                      isOpen && 'rotate-180 text-[#4f8cff]'
                    )}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={cn(
                    'max-h-0 overflow-hidden transition-[max-height,padding] duration-300 ease-out',
                    isOpen && 'max-h-[260px] pb-5'
                  )}
                >
                  <p className="px-6 text-[0.9rem] leading-[1.75] text-[#7b7b99]">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

