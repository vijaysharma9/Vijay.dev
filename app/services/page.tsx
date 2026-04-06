import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCategoryNav from '@/components/sections/services/ServicesCategoryNav';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
const AIDeepDive = dynamic(() => import('@/components/sections/services/AIDeepDive'), {
  ssr: false
});
const ServicesProcess = dynamic(() => import('@/components/sections/services/ServicesProcess'), {
  ssr: false
});
const ServicesIndustries = dynamic(
  () => import('@/components/sections/services/ServicesIndustries'),
  { ssr: false }
);
const ComparisonTable = dynamic(() => import('@/components/sections/services/ComparisonTable'), {
  ssr: false
});
const ServicesFAQ = dynamic(() => import('@/components/sections/services/ServicesFAQ'), {
  ssr: false
});
const ServicesCTA = dynamic(() => import('@/components/sections/services/ServicesPageCta'), {
  ssr: false
});

import { SITE_URL } from '@/constants/navigation';
import { SERVICES } from '@/lib/services-data';
import { buildServicesItemListJsonLd } from '@/lib/schema';

const servicesUrl = new URL('/services', SITE_URL).toString();
const title = 'IT Services — Full-Stack Development, AI & Automation | HireDeveloperShop';
const description =
  '18 specialist IT services: web development, AI & LLM integration, automation, IoT, eCommerce, PHP/Laravel, legacy migration, QA testing, DevOps and more.';

export const metadata: Metadata = {
  title: {
    absolute: title
  },
  description,
  alternates: {
    canonical: servicesUrl
  },
  openGraph: {
    type: 'website',
    url: servicesUrl,
    title,
    description
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
};

export default function ServicesPage() {
  const itemList = buildServicesItemListJsonLd(SERVICES.map((s) => s.title));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [itemList]
  };

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <ServicesCategoryNav />
      <ServicesGrid />
      <AIDeepDive />
      <ServicesProcess />
      <ServicesIndustries />
      <ComparisonTable />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  );
}
