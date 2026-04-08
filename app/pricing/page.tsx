import type { Metadata } from 'next';

import { breadcrumbListSchema } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import PricingPageClient from '@/components/sections/pricing/PricingPageClient';
import CompareTable from '@/components/sections/pricing/CompareTable';
import AddOns from '@/components/sections/pricing/AddOns';
import BillingProcess from '@/components/sections/pricing/BillingProcess';
import PricingGuarantees from '@/components/sections/pricing/PricingGuarantees';
import PricingFAQ from '@/components/sections/pricing/PricingFAQ';
import PageCta from '@/components/ui/PageCta';
import { SITE_URL } from '@/constants/navigation';
import { PLANS } from '@/lib/pricing-data';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/schema';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

const base = SITE_URL.replace(/\/$/, '');
const pricingUrl = `${base}/pricing`;
const title = 'Pricing — Fixed-Price Projects from $499 | HireDeveloperShop';
const description =
  'Transparent pricing for web development, SaaS, AI integration, and eCommerce. Fixed-price projects from $499 with full IP transfer and 30-day post-launch support.';
const baseUrl = siteBaseUrl();
const ogImages = defaultOgImageObjects(baseUrl);

export const metadata: Metadata = {
  title: {
    absolute: title
  },
  description,
  alternates: { canonical: pricingUrl },
  openGraph: {
    type: 'website',
    url: pricingUrl,
    siteName: SITE_NAME_OG,
    title,
    description,
    images: ogImages
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_SITE,
    title,
    description,
    images: [OG_IMAGE_PATH]
  }
};

function PricingJsonLd() {
  const starter = PLANS.find((p) => p.id === 'starter')!;
  const growth = PLANS.find((p) => p.id === 'growth')!;

  const tierOffers = [
    {
      '@type': 'Offer',
      name: 'Starter',
      description: 'Single-page or landing page projects — starting from $499.',
      url: pricingUrl,
      priceCurrency: 'USD',
      price: String(starter.monthlyPrice)
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      description: 'Full-stack web apps and SaaS MVPs — starting from $1,999.',
      url: pricingUrl,
      priceCurrency: 'USD',
      price: String(growth.monthlyPrice)
    },
    {
      '@type': 'Offer',
      name: 'Enterprise',
      description: 'Custom enterprise engagements — contact for pricing.',
      url: `${base}/hire`,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        name: 'Custom',
        description: 'Scoped per project'
      }
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationJsonLd(), buildWebsiteJsonLd(), ...tierOffers]
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
      <JsonLd
        data={breadcrumbListSchema([
          { label: 'Home', href: '/' },
          { label: 'Pricing' }
        ])}
      />
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
        primary={{ href: '/hire', label: 'Book a Free Call' }}
        secondary={{
          href: 'https://wa.me/918527594730?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.',
          label: 'WhatsApp Us',
          external: true
        }}
      />
    </>
  );
}

