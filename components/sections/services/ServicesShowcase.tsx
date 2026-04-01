'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { cn } from '@/utils/cn';
import type { Service } from '@/lib/services-data';
import ServiceGridCard from '@/components/sections/services/ServiceGridCard';

export default function ServicesShowcase({
  services,
  eyebrow,
  title,
  description,
  headerAlign = 'center',
  headerRight,
  as = 'section',
  id,
  ariaLabelledby,
  className
}: {
  services: Service[];
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  headerAlign?: 'center' | 'split';
  headerRight?: React.ReactNode;
  as?: 'section' | 'div';
  id?: string;
  ariaLabelledby?: string;
  className?: string;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const Wrapper = as;

  return (
    <Wrapper
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]', className)}
    >
      <div className="mx-auto max-w-[1200px]">
        {headerAlign === 'split' ? (
          <div
            ref={headerRef}
            className={cn(
              'mb-16 flex flex-col items-start justify-between gap-6 transition-all duration-700 ease-out md:flex-row md:items-end',
              headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
            )}
          >
            <div className="max-w-[680px]">
              <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
                {eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(2.1rem,4.2vw,3.05rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                {title}
              </h2>
              {description ? (
                <p className="mt-4 max-w-[560px] font-body text-base leading-[1.75] text-[#7b7b99]">
                  {description}
                </p>
              ) : null}
            </div>
            {headerRight ? <div className="shrink-0">{headerRight}</div> : null}
          </div>
        ) : (
          <div
            ref={headerRef}
            className={cn(
              'mb-16 text-center transition-all duration-700 ease-out',
              headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
            )}
          >
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
              {eyebrow}
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
                {description}
              </p>
            ) : null}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                'transition-all duration-700 ease-out',
                headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              )}
              style={{ transitionDelay: `${(index % 3) * 70}ms` }}
            >
              <ServiceGridCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

