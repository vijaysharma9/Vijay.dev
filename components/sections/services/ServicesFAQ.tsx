'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import { FAQ_ITEMS } from '@/lib/services-data';
import { cn } from '@/utils/cn';

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[800px]">
        <div
          ref={headerRef}
          className={cn(
            'mb-12 text-center transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            Common Questions
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Frequently{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Asked
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Everything you need to know before starting a project.
          </p>
        </div>

        <div
          className={cn(
            'transition-all delay-100 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          {FAQ_ITEMS.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.question}
                className="mb-3 overflow-hidden rounded-xl border border-white/[0.07]"
              >
                <button
                  type="button"
                  className={cn(
                    'flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-[0.95rem] font-bold transition-colors hover:text-[#4f8cff]',
                    open && 'text-[#4f8cff]'
                  )}
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span>{item.question}</span>
                  <span
                    className={cn(
                      'shrink-0 text-[1.1rem] text-[#7b7b99] transition-transform duration-300',
                      open && 'rotate-180 text-[#4f8cff]'
                    )}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 font-body text-[0.9rem] leading-[1.7] text-[#7b7b99]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
