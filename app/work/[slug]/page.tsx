import { notFound } from 'next/navigation';

import { CaseStudyPage } from '@/components/seo/CaseStudyPage';
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/case-study-pages';
import { SITE_URL } from '@/constants/navigation';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

import type { Metadata } from 'next';

const base = SITE_URL.replace(/\/$/, '');

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  const url = `${base}/work/${study.slug}`;
  const title = `${study.h1.replace(/\s*—\s*Case Study\s*$/i, '').trim()} — Case Study`;
  const ogTitle = `${title} | HireDeveloperShop`;
  const baseUrl = siteBaseUrl();
  const ogImages = defaultOgImageObjects(baseUrl);
  return {
    title,
    description: study.challenge,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME_OG,
      title: ogTitle,
      description: study.challenge,
      images: ogImages
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_SITE,
      title: ogTitle,
      description: study.challenge,
      images: [OG_IMAGE_PATH]
    }
  };
}

export default function WorkCaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
