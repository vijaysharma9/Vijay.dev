import type { Metadata } from 'next';

import AboutHero from '@/components/sections/about/AboutHero';
import AboutStory from '@/components/sections/about/AboutStory';
import AboutMission from '@/components/sections/about/AboutMission';
import AboutValues from '@/components/sections/about/AboutValues';
import AboutProcess from '@/components/sections/about/AboutProcess';
import AboutTeam from '@/components/sections/about/AboutTeam';
import AboutStack from '@/components/sections/about/AboutStack';
import AboutCta from '@/components/sections/about/AboutCta';

import { SITE_URL } from '@/constants/navigation';
import { buildOrganizationJsonLd, buildPersonJsonLd } from '@/lib/schema';

const aboutUrl = new URL('/about', SITE_URL).toString();
const description =
  'Learn about Vijay Sharma, a full-stack developer and IT consultant with 8+ years experience building scalable web apps, SaaS platforms, and AI solutions.';

export const metadata: Metadata = {
  title: {
    absolute: 'About Vijay Sharma — Full-Stack Developer | HireDeveloperShop'
  },
  description,
  alternates: {
    canonical: aboutUrl
  },
  openGraph: {
    type: 'website',
    url: aboutUrl,
    title: 'About Vijay Sharma — Full-Stack Developer | HireDeveloperShop',
    description
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vijay Sharma — Full-Stack Developer | HireDeveloperShop',
    description
  }
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationJsonLd(), buildPersonJsonLd()]
  };

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
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
