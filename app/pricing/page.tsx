import type { Metadata } from 'next';

import PricingPageClient from '@/components/sections/pricing/PricingPageClient';
import CompareTable from '@/components/sections/pricing/CompareTable';
import AddOns from '@/components/sections/pricing/AddOns';
import BillingProcess from '@/components/sections/pricing/BillingProcess';
import PricingGuarantees from '@/components/sections/pricing/PricingGuarantees';
import PricingFAQ from '@/components/sections/pricing/PricingFAQ';
import PageCta from '@/components/ui/PageCta';
import { PLANS } from '@/lib/pricing-data';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    absolute: 'Pricing — Fixed-Price Projects from $499 | HireDeveloperShop'
  },
  description:
    'Transparent pricing for web development, SaaS, AI integration, and eCommerce. Fixed-price projects from $499 with full IP transfer and 30-day post-launch support.',
  openGraph: {
    title: 'Pricing — Fixed-Price Projects from $499 | HireDeveloperShop',
    description:
      'Transparent pricing for web development, SaaS, AI integration, and eCommerce. Fixed-price projects from $499 with full IP transfer and 30-day post-launch support.'
  },
  twitter: {
    title: 'Pricing — Fixed-Price Projects from $499 | HireDeveloperShop',
    description:
      'Transparent pricing for web development, SaaS, AI integration, and eCommerce. Fixed-price projects from $499 with full IP transfer and 30-day post-launch support.'
  }
};

function PricingJsonLd() {
  const priceSpecifications = PLANS.map((plan) => ({
    '@type': 'Offer',
    name: `${plan.tier} plan`,
    url: 'https://www.hiredevelopershop.com/pricing',
    priceCurrency: 'USD',
    priceSpecification: [
      {
        '@type': 'PriceSpecification',
        name: 'Monthly',
        priceCurrency: 'USD',
        price: plan.monthlyPrice
      },
      {
        '@type': 'PriceSpecification',
        name: 'Annual (20% off)',
        priceCurrency: 'USD',
        price: plan.annualPrice
      }
    ]
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationJsonLd(), buildWebsiteJsonLd(), ...priceSpecifications]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />
      <PricingPageClient />
      <CompareTable />
      <AddOns />
      <BillingProcess />
      <PricingGuarantees />
      <PricingFAQ />
      <PageCta
        eyebrow="Ready to Start?"
        title={
          <>
            Not Sure Which Plan?
            <br />
            Let&apos;s <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">Figure It Out</span> Together.
          </>
        }
        description="Book a free 30-minute call. Describe your project and we'll tell you exactly which plan fits — or quote you a custom price on the spot. No obligation, no hard sell."
        primary={{ href: '/#contact', label: 'Book a Free Call' }}
        secondary={{
          href: 'https://wa.me/918527594730?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.',
          label: 'WhatsApp Us',
          external: true
        }}
      />
    </>
  );
}

