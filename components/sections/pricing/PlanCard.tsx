'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import type { Plan } from '@/lib/pricing-data';
import { cn } from '@/utils/cn';

function formatPrice(n: number) {
  return n.toLocaleString('en-US');
}

export default function PlanCard({
  plan,
  isAnnual,
  className
}: {
  plan: Plan;
  isAnnual: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const original = isAnnual ? plan.monthlyPrice : null;

  const tierColor =
    plan.colorClass === 'blue'
      ? 'text-[#4f8cff]'
      : plan.colorClass === 'purple'
        ? 'text-[#a259ff]'
        : 'text-[#00e5a0]';

  return (
    <div
      ref={ref}
      className={cn(
        'relative rounded-[20px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-8 transition-[transform,border-color] duration-200 hover:-translate-y-1',
        plan.popular &&
          'scale-[1.03] border-[rgba(79,140,255,0.28)] bg-[linear-gradient(135deg,rgba(79,140,255,0.06),rgba(162,89,255,0.06))] shadow-[0_0_0_1px_rgba(79,140,255,0.2)]',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0',
        'transition-all duration-700 ease-out',
        className
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,#4f8cff,#a259ff)] px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.06em] text-white">
          ⭐ Most Popular
        </div>
      )}

      <div className={cn('mb-4 text-[0.7rem] font-extrabold uppercase tracking-[0.1em]', tierColor)}>
        {plan.tier}
      </div>

      <div className="min-h-[1.2rem] text-[0.85rem] text-[#7b7b99] line-through">
        {original ? `$${formatPrice(original)}` : '\u00A0'}
      </div>

      <div className="mb-2">
        <div className="font-heading text-[3.2rem] font-extrabold leading-none tracking-[-0.03em] text-[#e8e8f0]">
          <span className="align-top text-[1.5rem] text-[#7b7b99]">$</span>
          {formatPrice(price)}
        </div>
      </div>

      <p className="mb-6 text-[0.88rem] leading-[1.5] text-[#7b7b99]">{plan.tagline}</p>

      <Link
        href={plan.cta.href}
        className={cn(
          'mb-7 block rounded-[10px] px-4 py-3 text-center text-[0.92rem] font-semibold transition',
          plan.ctaStyle === 'primary'
            ? 'bg-[#4f8cff] text-white shadow-[0_0_24px_rgba(79,140,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(79,140,255,0.35)]'
            : 'border border-white/[0.07] text-[#e8e8f0] hover:border-[#4f8cff] hover:text-[#4f8cff]'
        )}
      >
        {plan.cta.label}
      </Link>

      <hr className="mb-6 border-white/[0.07]" />

      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li key={f.text} className="flex items-start gap-3 text-[0.87rem] leading-[1.5]">
            <span
              className={cn(
                'mt-[2px] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border text-[0.6rem]',
                f.included
                  ? 'border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.12)] text-[#00e5a0]'
                  : 'border-white/[0.07] bg-[rgba(255,255,255,0.04)] text-[#7b7b99]'
              )}
              aria-hidden
            >
              {f.included ? '✓' : '–'}
            </span>
            <div>
              <div className={cn('text-[#e8e8f0]', !f.included && 'text-[#7b7b99]')}>{f.text}</div>
              {f.note && <div className="mt-0.5 text-[0.73rem] text-[#7b7b99]">{f.note}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

