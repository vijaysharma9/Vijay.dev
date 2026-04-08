import type { Metadata } from 'next';

import { breadcrumbListSchema } from '@/components/Breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import WorkHero from '@/components/sections/work/WorkHero';
import FeaturedCaseStudy from '@/components/sections/work/FeaturedCaseStudy';
import WorkGallery from '@/components/sections/work/WorkGallery';
import CaseStudyDeepDive from '@/components/sections/work/CaseStudyDeepDive';
import WorkTestimonials from '@/components/sections/work/WorkTestimonials';
import WorkProcess from '@/components/sections/work/WorkProcess';
import WorkIndustries from '@/components/sections/work/WorkIndustries';
import PageCta from '@/components/ui/PageCta';
import { SITE_URL } from '@/constants/navigation';
import { PROJECTS } from '@/lib/work-data';
import { buildItemListJsonLd, buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/schema';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

const base = SITE_URL.replace(/\/$/, '');
const workUrl = `${base}/work`;
const title = 'Work & Case Studies — Real Projects | HireDeveloperShop';
const description =
  '50+ real projects across SaaS, AI, eCommerce, HealthTech, FinTech, and IoT. Case studies with real results, timelines, and tech stacks.';
const baseUrl = siteBaseUrl();
const ogImages = defaultOgImageObjects(baseUrl);

export const metadata: Metadata = {
  title: {
    absolute: title
  },
  description,
  alternates: { canonical: workUrl },
  openGraph: {
    type: 'website',
    url: workUrl,
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

function WorkJsonLd() {
  const highlightedProjects = PROJECTS.slice(0, 9).map((p) => p.title);

  const itemList = buildItemListJsonLd(highlightedProjects);
  const organization = buildOrganizationJsonLd();
  const website = buildWebsiteJsonLd();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, itemList]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { label: 'Home', href: '/' },
          { label: 'Work' }
        ])}
      />
      <WorkJsonLd />
      <WorkHero />
      <WorkGallery />
      <FeaturedCaseStudy />
      <CaseStudyDeepDive />
      <WorkTestimonials />
      <WorkProcess />
      <WorkIndustries />
      <PageCta
        eyebrow="Your Project Is Next"
        title={
          <>
            Seen Enough?
            <br />
            Let&apos;s Build <span className="bg-gradient-to-br from-[#4f8cff] to-[#a259ff] bg-clip-text text-transparent">Yours</span>.
          </>
        }
        description="Free 30-minute discovery call. Scoped proposal within 24 hours. Fixed-price quote, no surprises — just like every project above."
        primary={{ href: '/hire', label: 'Start Your Project' }}
        secondary={{
          href: 'https://wa.me/918527594730?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project.',
          label: 'Chat on WhatsApp',
          external: true
        }}
      />
    </>
  );
}
