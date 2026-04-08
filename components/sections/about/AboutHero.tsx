'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

import { BreadcrumbNav } from '@/components/Breadcrumb';
import { ABOUT_HERO } from '@/lib/about-data';
import { cn } from '@/utils/cn';

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      aria-labelledby="about-hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden px-[5vw] pb-20 pt-[120px] text-[#e8e8f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[100px] -top-[200px] h-[700px] w-[700px] rounded-full opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute -bottom-[100px] -right-[100px] h-[500px] w-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(162,89,255,0.1) 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-100 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.6)_70%,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="hero-inner">
        <div className="max-w-[900px]">
          <BreadcrumbNav
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#7b7b99]"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About' }
            ]}
          />
          <div
            className={cn(
              'mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-[0.9rem] py-[0.35rem] font-body text-xs font-semibold uppercase tracking-[0.1em] text-[#4f8cff] transition-all duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f8cff]" aria-hidden />
            {ABOUT_HERO.eyebrow}
          </div>

          <h1
            id="about-hero-heading"
            className={cn(
              'font-heading text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e8e8f0] transition-all delay-75 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            {ABOUT_HERO.titleLine1}
            <br />
            {ABOUT_HERO.titleLine2}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              {ABOUT_HERO.titleEmphasis}
            </em>
          </h1>

          <p
            className={cn(
              'mt-6 max-w-[560px] font-body text-lg leading-[1.7] text-[#7b7b99] transition-all delay-150 duration-700 ease-out sm:text-[1.15rem]',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            {ABOUT_HERO.subtitle}
          </p>

          <div
            className={cn(
              'mt-10 flex flex-wrap gap-4 transition-all delay-200 duration-700 ease-out',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <Link
              href={ABOUT_HERO.primaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg bg-[#4f8cff] px-7 py-3 font-body text-[0.95rem] font-semibold text-white shadow-[0_0_30px_rgba(79,140,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.4)]"
            >
              {ABOUT_HERO.primaryCtaLabel}
            </Link>
            <Link
              href={ABOUT_HERO.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.07)] px-7 py-3 font-body text-[0.95rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              {ABOUT_HERO.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div
          className={cn(
            'mt-16 w-full transition-all delay-300 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
          aria-label="Key metrics"
        >
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8 md:gap-x-10 lg:max-w-4xl">
            {ABOUT_HERO.stats.map((s) => (
              <li key={s.label} className="min-w-0 text-left">
                <span className="block font-heading text-4xl font-extrabold leading-none tracking-tight text-transparent bg-gradient-to-b from-white from-30% to-sky-400 bg-clip-text md:text-[2.75rem]">
                  {s.value}
                </span>
                <span className="mt-2 block font-body text-[0.7rem] font-medium uppercase leading-snug tracking-[0.12em] text-[#7b7b99] sm:text-xs">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
