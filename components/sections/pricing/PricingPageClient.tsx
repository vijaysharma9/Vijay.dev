'use client';

import { useState } from 'react';

import PricingHero from '@/components/sections/pricing/PricingHero';
import PricingCards from '@/components/sections/pricing/PricingCards';

export default function PricingPageClient() {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <>
      <PricingHero isAnnual={isAnnual} onToggle={setIsAnnual} />
      <PricingCards isAnnual={isAnnual} />
    </>
  );
}

