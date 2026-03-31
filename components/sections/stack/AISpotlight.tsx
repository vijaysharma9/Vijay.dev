'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import {
  AI_SPOTLIGHT_COPY,
  AI_SPOTLIGHT_STATS,
  AI_TOOLS
} from '@/lib/stack-data';
import { cn } from '@/utils/cn';

export default function AISpotlight() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });

  return (
    <section
      id="ai-spotlight"
      className="scroll-mt-20 bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mt-12 grid grid-cols-1 items-center gap-[5vw] lg:grid-cols-2">
          <div
            ref={leftRef}
            className={cn(
              'transition-all duration-700 ease-out',
              leftInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
            )}
          >
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
              {AI_SPOTLIGHT_COPY.eyebrow}
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              We Build{' '}
              <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
                With AI
              </em>
              ,
              <br />
              Not Just For AI
            </h2>
            <p className="mt-4 max-w-full font-body text-base leading-[1.75] text-[#7b7b99]">
              {AI_SPOTLIGHT_COPY.body}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {AI_SPOTLIGHT_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] px-5 py-5 text-center"
                >
                  <span className="stat-number block text-[1.8rem] leading-none">{s.num}</span>
                  <div className="mt-1.5 text-[0.75rem] uppercase tracking-[0.05em] text-[#7b7b99]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={cn(
              'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2',
              rightInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0',
              'transition-all delay-100 duration-700 ease-out'
            )}
          >
            {AI_TOOLS.map((tool) => (
              <article
                key={tool.name}
                className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-6 transition-[transform,border-color] duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-[#4f8cff] before:to-[#a259ff] hover:-translate-y-1 hover:border-[rgba(162,89,255,0.3)]"
              >
                <div className="mb-3 text-[2rem]" aria-hidden>
                  {tool.icon}
                </div>
                <h4 className="mb-2 font-heading text-base font-bold">{tool.name}</h4>
                <p className="font-body text-[0.83rem] leading-[1.6] text-[#7b7b99]">
                  {tool.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] font-semibold text-[#00e5a0]">
                  {tool.badge}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
