'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { PHILOSOPHY_CARDS } from '@/lib/stack-data';
import { cn } from '@/utils/cn';

export default function StackPhilosophy() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'text-center transition-all duration-700 ease-out',
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            How We Choose
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Our{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Stack Philosophy
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Every tool earns its place. Here&apos;s how we decide what goes in and what gets left out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY_CARDS.map((card) => (
            <article
              key={card.num}
              className={cn(
                'rounded-2xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]',
                headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
            >
              <div className="mb-4 font-heading text-5xl font-extrabold leading-none text-[rgba(79,140,255,0.15)]">
                {card.num}
              </div>
              <h3 className="mb-2.5 font-heading text-[1.05rem] font-bold">{card.title}</h3>
              <p className="font-body text-[0.87rem] leading-[1.65] text-[#7b7b99]">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
