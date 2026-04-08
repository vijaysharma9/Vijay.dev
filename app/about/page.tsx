import type { Metadata } from 'next';

import AboutHero from '@/components/sections/about/AboutHero';
import AboutStory from '@/components/sections/about/AboutStory';
import AboutMission from '@/components/sections/about/AboutMission';
import AboutValues from '@/components/sections/about/AboutValues';
import AboutProcess from '@/components/sections/about/AboutProcess';
import AboutTeam from '@/components/sections/about/AboutTeam';
import AboutStack from '@/components/sections/about/AboutStack';
import AboutCta from '@/components/sections/about/AboutCta';

import { breadcrumbListSchema } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { SITE_URL } from '@/constants/navigation';
import { buildOrganizationJsonLd } from '@/lib/schema';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

const aboutUrl = new URL('/about', SITE_URL).toString();
const description =
  'Meet the HireDeveloperShop freelance team — senior full-stack developers and IT consultants with 8+ years building web apps, SaaS platforms, and AI solutions.';
const pageTitle = 'About Us — Freelance Full-Stack Team | HireDeveloperShop';
const baseUrl = siteBaseUrl();
const ogImages = defaultOgImageObjects(baseUrl);

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description,
  alternates: {
    canonical: aboutUrl
  },
  openGraph: {
    type: 'website',
    url: aboutUrl,
    siteName: SITE_NAME_OG,
    title: pageTitle,
    description,
    images: ogImages
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_SITE,
    title: pageTitle,
    description,
    images: [OG_IMAGE_PATH]
  }
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationJsonLd()]
  };

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
      <JsonLd
        data={breadcrumbListSchema([
          { label: 'Home', href: '/' },
          { label: 'About' }
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutProcess />
      <AboutTeam />
      <AboutStack />
      <AboutCta />
    </main>
  );
}
