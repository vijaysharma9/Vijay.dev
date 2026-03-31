'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

import { cn } from '@/utils/cn';

const STATS = [
  { num: '18', label: 'Specialist Services' },
  { num: '50+', label: 'Projects Delivered' },
  { num: '8+', label: 'Years Experience' },
  { num: '3', label: 'Continents Served' }
];

export default function ServicesHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="services-hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden px-[5vw] pb-20 pt-[120px] text-[#e8e8f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[150px] -top-[200px] h-[800px] w-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79,140,255,0.1) 0%, transparent 65%)'
          }}
        />
        <div
          className="absolute -bottom-[100px] -right-[100px] h-[500px] w-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(162,89,255,0.09) 0%, transparent 65%)'
          }}
        />
        <div
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.55)_25%,rgba(0,0,0,0.55)_75%,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
            backgroundSize: '55px 55px'
          }}
        />
      </div>

      <div className="hero-inner">
        <div className="max-w-[820px]">
        <div
          className={cn(
            'mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(79,140,255,0.25)] bg-[rgba(79,140,255,0.1)] px-[0.9rem] py-[0.32rem] font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#4f8cff] transition-all duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4f8cff]" aria-hidden />
          What We Build
        </div>

        <h1
          id="services-hero-heading"
          className={cn(
            'font-heading text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#e8e8f0] transition-all delay-75 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          End-to-End IT Services
          <br />
          for{' '}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Every Layer
          </em>
        </h1>

        <p
          className={cn(
            'mt-6 max-w-[540px] font-body text-[1.1rem] leading-[1.75] text-[#7b7b99] transition-all delay-150 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          From AI automation to legacy PHP migration — 18 specialist services delivered by a
          senior-only team. No juniors. No bloat. Just results.
        </p>

        <div
          className={cn(
            'mt-10 flex flex-wrap gap-4 transition-all delay-200 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          <Link
            href="/hire"
            className="rounded-lg bg-[#4f8cff] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.38)]"
          >
            Start a Project
          </Link>
          <a
            href="#all-services"
            className="rounded-lg border border-white/[0.07] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
          >
            Browse Services ↓
          </a>
        </div>

        <div
          className={cn(
            'mt-16 flex flex-wrap gap-12 transition-all delay-300 duration-700 ease-out',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <span className="stat-number block text-[2.2rem]">{s.num}</span>
              <div className="stat-label mt-1.5 tracking-[0.06em] text-[#7b7b99]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
