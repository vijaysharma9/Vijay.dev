'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { SERVICES, type Service, type ServiceColor } from '@/lib/services-data';
import { cn } from '@/utils/cn';

const AFTER: Record<ServiceColor, string> = {
  blue: 'after:bg-[linear-gradient(90deg,transparent,#4f8cff,transparent)]',
  purple: 'after:bg-[linear-gradient(90deg,transparent,#a259ff,transparent)]',
  green: 'after:bg-[linear-gradient(90deg,transparent,#00e5a0,transparent)]',
  cyan: 'after:bg-[linear-gradient(90deg,transparent,#00d4ff,transparent)]',
  orange: 'after:bg-[linear-gradient(90deg,transparent,#ff7a45,transparent)]',
  pink: 'after:bg-[linear-gradient(90deg,transparent,#ff4da6,transparent)]',
  yellow: 'after:bg-[linear-gradient(90deg,transparent,#ffd24d,transparent)]'
};

const ICON_BG: Record<ServiceColor, string> = {
  blue: 'bg-[rgba(79,140,255,0.1)]',
  purple: 'bg-[rgba(162,89,255,0.1)]',
  green: 'bg-[rgba(0,229,160,0.1)]',
  cyan: 'bg-[rgba(0,212,255,0.1)]',
  orange: 'bg-[rgba(255,122,69,0.1)]',
  pink: 'bg-[rgba(255,77,166,0.1)]',
  yellow: 'bg-[rgba(255,210,77,0.1)]'
};

function ServiceCard({
  service,
  idProp
}: {
  service: Service;
  idProp?: string;
}) {
  return (
    <article
      id={idProp}
      className={cn(
        'group relative cursor-default overflow-hidden rounded-[18px] border border-white/[0.07] bg-[rgba(255,255,255,0.032)] p-8 transition-[transform,border-color] duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(79,140,255,0.28)] group-hover:after:opacity-100',
        AFTER[service.color]
      )}
    >
      <div
        className={cn(
          'mb-5 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] text-2xl',
          ICON_BG[service.color]
        )}
        aria-hidden
      >
        {service.icon}
      </div>
      <h3 className="mb-2.5 font-heading text-[1.08rem] font-bold text-[#e8e8f0]">
        {service.title}
      </h3>
      <p className="mb-5 font-body text-[0.875rem] leading-[1.65] text-[#7b7b99]">
        {service.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/[0.07] bg-[rgba(255,255,255,0.04)] px-2.5 py-0.5 text-[0.72rem] text-[#7b7b99]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ServicesGrid() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="all-services"
      className="scroll-mt-20 bg-[#09090f] px-[5vw] py-[100px] text-[#e8e8f0]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className={cn(
            'mb-16 text-center transition-all duration-700 ease-out',
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          )}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#4f8cff]">
            18 Specialist Services
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Everything Your{' '}
            <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
              Product Needs
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-base leading-[1.75] text-[#7b7b99]">
            Senior-level execution across the full technology stack. Pick one or combine several.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const anchor =
              service.scrollAnchor ??
              (service.id === 'web-development' ? 'web' : undefined);
            return (
              <div
                key={service.id}
                className={cn(
                  'transition-all duration-700 ease-out',
                  headerInView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
                )}
                style={{ transitionDelay: `${(index % 3) * 70}ms` }}
              >
                <ServiceCard service={service} idProp={anchor} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
