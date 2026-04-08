import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { JsonLd } from '@/components/JsonLd';
import { breadcrumbListSchema } from '@/components/Breadcrumb';
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
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

const servicesUrl = new URL('/services', SITE_URL).toString();
const title = 'IT Services — Full-Stack Development, AI & Automation | HireDeveloperShop';
const description =
  '18 specialist IT services: web development, AI & LLM integration, automation, IoT, eCommerce, PHP/Laravel, legacy migration, QA testing, DevOps and more.';

const baseUrl = siteBaseUrl();
const ogImages = defaultOgImageObjects(baseUrl);

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

export default function ServicesPage() {
  const itemList = buildServicesItemListJsonLd(SERVICES.map((s) => s.title));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [itemList]
  };

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
      <JsonLd data={breadcrumbListSchema([{ label: 'Home', href: '/' }, { label: 'Services' }])} />
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
