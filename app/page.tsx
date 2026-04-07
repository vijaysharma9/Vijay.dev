import { Suspense } from 'react';
import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';

import { JsonLd } from '@/components/JsonLd';
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
import HomeFAQSection from '@/components/sections/HomeFAQSection';

const AISpotlight = nextDynamic(() => import('@/components/sections/stack/AISpotlight'), {
  ssr: false
});

import { buildServicesJsonLd } from '@/lib/schema';
import { buildFaqPageSchema } from '@/lib/seo-jsonld';
import { SERVICES } from '@/constants/services';
import { HOMEPAGE_FAQS } from '@/constants/homepage-faqs';
import { SITE_URL } from '@/constants/navigation';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(SITE_URL);
  const title =
    'Hire Dedicated Developers | Full-Stack, AI & IT Consultancy | HireDeveloperShop';
  const description =
    'Hire dedicated full-stack developers for SaaS, AI, eCommerce & web apps. Upwork Top Rated — 8+ years, 50+ projects, 100% satisfaction. Book a free consultation today.';

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: {
      canonical: 'https://www.hiredevelopershop.com'
    },
    openGraph: {
      type: 'website',
      title: 'Hire Dedicated Developers | Full-Stack, AI & IT Consultancy',
      description:
        'Hire dedicated full-stack developers for SaaS, AI, eCommerce & web apps. Upwork Top Rated. 50+ projects delivered.',
      url: 'https://www.hiredevelopershop.com',
      images: [
        {
          url: new URL('/opengraph-image', baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: 'HireDeveloperShop — Hire Dedicated Developers'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default function HomePage() {
  const servicesGraph = buildServicesJsonLd(SERVICES);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [...servicesGraph]
  };

  const faqSchema = buildFaqPageSchema(HOMEPAGE_FAQS);

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
      <JsonLd data={jsonLd} />
      <JsonLd data={faqSchema} />

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
        <HomeFAQSection />
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
