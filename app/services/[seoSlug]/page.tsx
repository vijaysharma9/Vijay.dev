import { notFound } from 'next/navigation';

import ServiceLandingPage from '@/components/seo/ServiceLandingPage';
import { SERVICE_LANDING } from '@/lib/seo-service-landings';
import { servicePageMetadata } from '@/lib/seo-page-metadata';

const SLUGS = Object.keys(SERVICE_LANDING);

export function generateStaticParams() {
  return SLUGS.map((seoSlug) => ({ seoSlug }));
}

export function generateMetadata({
  params
}: {
  params: { seoSlug: string };
}) {
  const cfg = SERVICE_LANDING[params.seoSlug];
  if (!cfg) return {};
  return servicePageMetadata(cfg);
}

export default function ServiceSeoPage({
  params
}: {
  params: { seoSlug: string };
}) {
  const cfg = SERVICE_LANDING[params.seoSlug];
  if (!cfg) notFound();
  return <ServiceLandingPage config={cfg} />;
}
