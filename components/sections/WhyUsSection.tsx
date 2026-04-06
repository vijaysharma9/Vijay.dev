'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { WHY_CTA, WHY_ITEMS } from '@/constants/whyUs';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export default function WhyUsSection() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inLabel = useInView(labelRef, { once: true, amount: 0.2 });
  const inTitle = useInView(titleRef, { once: true, amount: 0.2 });

  return (
    <section id="why" aria-labelledby="why-title">
      <div className="why-grid">
        <div>
          <span
            ref={labelRef}
            className={cn(
              'section-label transition-all duration-[650ms] ease-out',
              inLabel ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            Why Us
          </span>
          <div
            ref={titleRef}
            className={cn(
              'transition-all delay-75 duration-[650ms] ease-out',
              inTitle ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <div className="divider" aria-hidden="true" />
            <h2 id="why-title" className="section-title">
              Why Clients{' '}
              <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
          </div>

          <ul className="why-list" aria-label="Why clients choose us">
            {WHY_ITEMS.map((item, i) => (
              <WhyItem key={item.id} item={item} delayIndex={i} />
            ))}
          </ul>
        </div>

        <WhyCtaBox />
      </div>
    </section>
  );
}

function WhyItem({
  item,
  delayIndex
}: {
  item: (typeof WHY_ITEMS)[number];
  delayIndex: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <li
      ref={ref}
      className={cn(
        'why-item transition-all duration-[650ms] ease-out',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
      style={{ transitionDelay: `${delayIndex * 70}ms` }}
    >
      <div className="why-check" aria-hidden="true">
        ✓
      </div>
      <div>
        <div className="why-text">{item.title}</div>
        <div className="why-sub">{item.description}</div>
      </div>
    </li>
  );
}

function WhyCtaBox() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      className={cn(
        'why-cta-box top-[100px] transition-all delay-100 duration-[650ms] ease-out md:sticky',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}
    >
      <div className="quote">
        We don't just build projects — we build <em>{WHY_CTA.quoteEmphasis}</em>
        {WHY_CTA.quoteSuffix}
      </div>
      <p className="text-muted mb-8 text-[0.9rem] leading-relaxed">
        {WHY_CTA.paragraph}
      </p>

      <Link href="/hire" className="btn-primary inline-flex justify-center">
        Start Your Project
      </Link>

      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {WHY_CTA.stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <div className="font-heading text-[1.6rem] font-extrabold text-accent">
              {stat.value}
            </div>
            <div className="text-xs text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
