import { Suspense } from 'react';
import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechStackSection from '@/components/sections/TechStackSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

const AISpotlight = nextDynamic(() => import('@/components/sections/stack/AISpotlight'), {
  ssr: false
});

import {
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  buildServicesJsonLd
} from '@/lib/schema';
import { SERVICES } from '@/constants/services';
import { SITE_URL } from '@/constants/navigation';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(SITE_URL);

  const title = 'Hire Dedicated Developers | Full Stack & IT Consultancy Services';
  const description =
    'Hire dedicated developers for full-stack web, SaaS, eCommerce, and AI projects with expert IT consultancy. Get a free consultation and fast delivery.';

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: {
      canonical: baseUrl.toString()
    },
    openGraph: {
      type: 'website',
      url: baseUrl,
      title,
      description,
      images: [
        {
          url: new URL('/assets/feature-image.png', baseUrl).toString(),
          alt: 'HireDeveloperShop feature image showcasing IT consultancy and full-stack development services.'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [new URL('/assets/feature-image.png', baseUrl).toString()]
    }
  };
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationJsonLd(),
      buildWebsiteJsonLd(),
      ...buildServicesJsonLd(SERVICES)
    ]
  };

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
      <script
        type="application/ld+json"
        // JSON-LD for SEO; safe because it's generated from constants.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={null}>
        <TechStackSection />
      </Suspense>
      <Suspense fallback={null}>
        <WhyUsSection />
      </Suspense>
      <Suspense fallback={null}>
        <AISpotlight />
      </Suspense>
      <Suspense fallback={null}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={null}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={null}>
        <CTASection />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </main>
  );
}

