'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

import { cn } from '@/utils/cn';

export default function PageCta({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  className
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string; external?: boolean };
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-[#0d0d18] px-[5vw] py-[100px] text-center text-[#e8e8f0]',
        className
      )}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.1)_0%,transparent_65%)]"
        aria-hidden
      />
      <div
        className={cn(
          'relative z-[1] mx-auto max-w-[660px] transition-all duration-700 ease-out',
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
        )}
      >
        <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
          {eyebrow}
        </p>
        <h2 className="mb-5 font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
          {title}
        </h2>
        <p className="mb-10 font-body text-base leading-[1.75] text-[#7b7b99]">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primary.href}
            className="rounded-lg bg-[#4f8cff] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-semibold text-white shadow-[0_0_28px_rgba(79,140,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(79,140,255,0.38)]"
          >
            {primary.label}
          </Link>
          {secondary.external ? (
            <a
              href={secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.07] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              {secondary.label}
            </a>
          ) : (
            <Link
              href={secondary.href}
              className="rounded-lg border border-white/[0.07] px-[1.7rem] py-[0.72rem] text-[0.92rem] font-medium text-[#e8e8f0] transition hover:border-[#4f8cff] hover:text-[#4f8cff]"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

