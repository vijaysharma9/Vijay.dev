import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import StackHero from '@/components/sections/stack/StackHero';
import StackCategoryNav from '@/components/sections/stack/StackCategoryNav';
import StackGrid from '@/components/sections/stack/StackGrid';
const AISpotlight = dynamic(() => import('@/components/sections/stack/AISpotlight'), {
  ssr: false
});
const ExpertiseBars = dynamic(() => import('@/components/sections/stack/ExpertiseBars'), {
  ssr: false
});
const TrendingTech = dynamic(() => import('@/components/sections/stack/TrendingTech'), {
  ssr: false
});
const StackPhilosophy = dynamic(() => import('@/components/sections/stack/StackPhilosophy'), {
  ssr: false
});
const StackCompare = dynamic(() => import('@/components/sections/stack/StackCompare'), {
  ssr: false
});
const StackPageCta = dynamic(() => import('@/components/sections/stack/StackPageCta'), {
  ssr: false
});

import { breadcrumbListSchema } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { SITE_URL } from '@/constants/navigation';
import { STACK_CATEGORIES } from '@/lib/stack-data';
import { buildOrganizationJsonLd, buildStackItemListJsonLd } from '@/lib/schema';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

const stackUrl = new URL('/stack', SITE_URL).toString();
const title = 'Tech Stack — 60+ Technologies | HireDeveloperShop';
const description =
  'Our full technology stack: React, Next.js, Node.js, Laravel, AWS, OpenAI, Claude AI, Cursor, LangChain and 50+ more — all used in production.';
const baseUrl = siteBaseUrl();
const ogImages = defaultOgImageObjects(baseUrl);

export const metadata: Metadata = {
  title: {
    absolute: title
  },
  description,
  alternates: {
    canonical: stackUrl
  },
  openGraph: {
    type: 'website',
    url: stackUrl,
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

export default function StackPage() {
  const techNames = STACK_CATEGORIES.flatMap((c) => c.items.map((i) => i.name));
  const itemList = buildStackItemListJsonLd(techNames);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationJsonLd(), itemList]
  };

  return (
    <main className="min-h-screen bg-[#09090f] font-body text-[#e8e8f0] antialiased">
      <JsonLd
        data={breadcrumbListSchema([
          { label: 'Home', href: '/' },
          { label: 'Tech Stack' }
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StackHero />
      <StackCategoryNav />
      <StackGrid />
      <AISpotlight />
      <ExpertiseBars />
      <TrendingTech />
      <StackPhilosophy />
      <StackCompare />
      <StackPageCta />
    </main>
  );
}
