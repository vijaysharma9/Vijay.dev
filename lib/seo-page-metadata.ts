import type { Metadata } from 'next';

import { SITE_URL } from '@/constants/navigation';
import type { ServiceLandingConfig } from '@/lib/seo-service-landings';
import type { HireLandingConfig } from '@/lib/seo-hire-landings';

const base = SITE_URL.replace(/\/$/, '');

export function servicePageMetadata(cfg: ServiceLandingConfig): Metadata {
  const url = `${base}${cfg.canonicalPath}`;
  return {
    title: cfg.title,
    description: cfg.description,
    alternates: { canonical: url },
    openGraph: {
      title: cfg.ogTitle,
      description: cfg.description,
      url,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: cfg.ogTitle,
      description: cfg.description
    }
  };
}

export function hirePageMetadata(cfg: HireLandingConfig): Metadata {
  const url = `${base}${cfg.path}`;
  return {
    title: cfg.title,
    description: cfg.description,
    alternates: { canonical: url },
    openGraph: {
      title: cfg.title,
      description: cfg.description,
      url,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: cfg.title,
      description: cfg.description
    }
  };
}
