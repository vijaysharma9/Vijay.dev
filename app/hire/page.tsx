import type { Metadata } from 'next';

import { JsonLd } from '@/components/JsonLd';
import BookACall from '@/components/sections/hire/BookACall';
import HireFAQ from '@/components/sections/hire/HireFAQ';
import HireHero from '@/components/sections/hire/HireHero';
import ProjectForm from '@/components/sections/hire/ProjectForm';
import QuickChannels from '@/components/sections/hire/QuickChannels';
import WhyChooseUs from '@/components/sections/hire/WhyChooseUs';
import { buildContactPageSchema } from '@/lib/seo-jsonld';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';
import { SITE_URL } from '@/constants/navigation';

const base = SITE_URL.replace(/\/$/, '');
const hireUrl = `${base}/hire`;

const title = 'Hire Us — Start Your Project | HireDeveloperShop';
const description =
  'Start a project with HireDeveloperShop. Fixed-price web development, AI integration, SaaS, and eCommerce. Free discovery call, 24hr proposal, work starts within 72 hours.';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = siteBaseUrl();
  const ogImages = defaultOgImageObjects(baseUrl);
  return {
    title,
    description,
    alternates: { canonical: hireUrl },
    openGraph: {
      type: 'website',
      url: hireUrl,
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
}

export default function HirePage() {
  return (
    <main>
      <JsonLd data={buildContactPageSchema()} />
      <HireHero />
      <QuickChannels />
      <ProjectForm />
      <WhyChooseUs />
      <BookACall />
      <HireFAQ />
    </main>
  );
}
