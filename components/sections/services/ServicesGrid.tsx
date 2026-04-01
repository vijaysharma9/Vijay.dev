'use client';

import { SERVICES } from '@/lib/services-data';
import ServicesShowcase from '@/components/sections/services/ServicesShowcase';

export default function ServicesGrid() {
  return (
    <ServicesShowcase
      id="all-services"
      className="scroll-mt-20"
      services={SERVICES}
      eyebrow="18 Specialist Services"
      title={
        <>
          Everything Your{' '}
          <em className="not-italic bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">
            Product Needs
          </em>
        </>
      }
      description="Senior-level execution across the full technology stack. Pick one or combine several."
    />
  );
}
