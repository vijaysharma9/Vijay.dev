'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { TRENDING_ITEMS, type TrendBadge } from '@/lib/stack-data';
import { cn } from '@/utils/cn';

const BADGE: Record<TrendBadge, string> = {
  hot: 'border-[rgba(255,122,69,0.25)] bg-[rgba(255,122,69,0.1)] text-[#ff7a45]',
  new: 'border-emerald-500/25 bg-emerald-500/10 text-[#00e5a0]',
  rising: 'border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] text-[#4f8cff]'
};

const BADGE_LABEL: Record<TrendBadge, string> = {
  hot: 'Hot',
  new: 'New',
  rising: 'Rising'
};

export default function TrendingTech() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0d0d18] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'text-center transition-all duration-700 ease-out',
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            What&apos;s New in Our Stack
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Trending Tools We&apos;re{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Actively Using
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Technologies we&apos;ve adopted in the last 12 months — all battle-tested on real client work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRENDING_ITEMS.map((item) => (
            <article
              key={item.title}
              className={cn(
                'relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[rgba(79,140,255,0.28)]',
                headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
            >
              <div
                className={cn(
                  'absolute right-4 top-4 rounded border px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.05em]',
                  BADGE[item.badge]
                )}
              >
                {BADGE_LABEL[item.badge]}
              </div>
              <div className="mb-3 text-[2rem]" aria-hidden>
                {item.icon}
              </div>
              <h4 className="mb-2 font-heading text-[0.98rem] font-bold">{item.title}</h4>
              <p className="font-body text-[0.83rem] leading-[1.6] text-[#7b7b99]">
                {item.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/[0.07] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 text-[0.7rem] text-[#7b7b99]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
