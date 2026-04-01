'use client';

import Link from 'next/link';

import ServicesShowcase from '@/components/sections/services/ServicesShowcase';
import { SERVICES } from '@/lib/services-data';

export default function ServicesSection() {
  return (
    <ServicesShowcase
      id="services"
      ariaLabelledby="services-title"
      className="bg-[#0d0d18]"
      headerAlign="split"
      services={SERVICES.slice(0, 6)}
      eyebrow="What We Do"
      title={
        <span id="services-title">
          End-to-End IT Services{' '}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Under One Roof
          </em>
        </span>
      }
      description="From concept to deployment, we cover the complete product lifecycle so you never need to juggle multiple vendors."
      headerRight={
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[0.85rem] font-semibold text-[#e8e8f0] transition-colors hover:border-white/[0.14] hover:bg-[rgba(255,255,255,0.05)]"
        >
          All 18 Services <span aria-hidden>→</span>
        </Link>
      }
    />
  );
}

