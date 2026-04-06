import { notFound } from 'next/navigation';

import { CaseStudyPage } from '@/components/seo/CaseStudyPage';
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/case-study-pages';
import { SITE_URL } from '@/constants/navigation';

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
  return {
    title,
    description: study.challenge,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | HireDeveloperShop`,
      description: study.challenge,
      url,
      type: 'article'
    },
    twitter: { card: 'summary_large_image', title, description: study.challenge }
  };
}

export default function WorkCaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
