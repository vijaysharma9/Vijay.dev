'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { ABOUT_VALUES } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutValues() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inLabel = useInView(labelRef, { once: true, amount: 0.2 });
  const inTitle = useInView(titleRef, { once: true, amount: 0.2 });

  return (
    <section aria-labelledby="about-values-title" className="bg-[#0f0f1a] px-[5vw] py-[100px] text-[#e8e8f0]">
      <div className="mx-auto max-w-[1200px]">
        <p
          ref={labelRef}
          className={cn(
            'mb-4 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff] transition-all duration-[650ms] ease-out',
            inLabel ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          {ABOUT_VALUES.sectionLabel}
        </p>
        <h2
          ref={titleRef}
          id="about-values-title"
          className={cn(
            'font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] transition-all delay-75 duration-[650ms] ease-out',
            inTitle ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          {ABOUT_VALUES.titleLine1}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            {ABOUT_VALUES.titleEmphasis}
          </em>
        </h2>

        <div className="mt-12 grid items-start gap-[5vw] md:grid-cols-2">
          <div className="flex flex-col gap-5">
            {ABOUT_VALUES.items.map((item, i) => (
              <ValueItem key={item.id} item={item} delayIndex={i} />
            ))}
          </div>

          <AsideQuote />
        </div>
      </div>
    </section>
  );
}

function ValueItem({
  item,
  delayIndex
}: {
  item: (typeof ABOUT_VALUES.items)[number];
  delayIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className={cn(
        'flex cursor-default gap-5 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.035)] p-5 transition-all duration-[650ms] ease-out hover:border-[rgba(79,140,255,0.3)]',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
      style={{ transitionDelay: `${delayIndex * 70}ms` }}
    >
      <div className="min-w-8 font-heading text-[1.8rem] font-extrabold leading-none text-[rgba(79,140,255,0.2)]">
        {item.num}
      </div>
      <div>
        <h4 className="mb-1.5 font-heading text-base font-bold">{item.title}</h4>
        <p className="font-body text-[0.875rem] leading-relaxed text-[#7b7b99]">{item.description}</p>
      </div>
    </div>
  );
}

function AsideQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className={cn(
        'top-[100px] transition-all delay-100 duration-[650ms] ease-out md:sticky',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
    >
      <div className="relative rounded-[20px] border border-[rgba(79,140,255,0.2)] bg-gradient-to-br from-[rgba(79,140,255,0.08)] to-[rgba(162,89,255,0.08)] p-10 before:absolute before:left-8 before:top-[-20px] before:font-heading before:text-[8rem] before:leading-none before:text-[#4f8cff] before:opacity-20 before:content-['\201C']">
        <blockquote className="relative z-[1] mb-6 font-body text-xl italic leading-[1.7] text-[#e8e8f0]">
          {ABOUT_VALUES.quote}
        </blockquote>
        <cite className="relative z-[1] font-body text-[0.85rem] not-italic text-[#7b7b99]">
          — <strong className="text-[#4f8cff]">{ABOUT_VALUES.citeName}</strong>, {ABOUT_VALUES.citeRole}
        </cite>
      </div>
      <div className="mt-8 flex flex-wrap gap-2.5">
        {ABOUT_VALUES.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] px-3 py-1 font-body text-[0.78rem] text-[#7b7b99]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
