'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { BreadcrumbNav } from '@/components/Breadcrumb';
import BillingToggle from '@/components/sections/pricing/BillingToggle';
import { cn } from '@/utils/cn';

export default function PricingHero({
  isAnnual,
  onToggle
}: {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="pricing-hero-heading"
      className="relative flex min-h-[80vh] items-center overflow-hidden px-[5vw] pb-[60px] pt-[120px] text-center text-[#e8e8f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-50px] right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,229,160,0.06)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[length:55px_55px] [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5)_20%,rgba(0,0,0,0.5)_80%,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[760px]">
        <BreadcrumbNav
          className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm text-[#7b7b99]"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Pricing' }
          ]}
        />
        <div
          className={cn(
            'mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-[0.9rem] py-[0.32rem] text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#4f8cff] transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f8cff]" aria-hidden />
          Transparent Pricing
        </div>

        <h1
          id="pricing-hero-heading"
          className={cn(
            'font-heading text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] transition-all delay-75 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          Agency Quality.
          <br />
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#22c55e] bg-clip-text text-transparent">
            Freelance Rates.
          </em>
        </h1>

        <p
          className={cn(
            'mx-auto mt-5 max-w-[720px] text-[1.1rem] leading-[1.75] text-[#7b7b99] transition-all delay-150 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          No hidden fees. No retainer lock-ins. No agency markups. Fixed-price projects from $499 —
          with a full scope, timeline, and IP transfer before work begins.
        </p>

        <div
          className={cn(
            'transition-all delay-200 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          <BillingToggle isAnnual={isAnnual} onChange={onToggle} />
        </div>
      </div>
    </section>
  );
}

