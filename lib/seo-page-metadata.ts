import type { Metadata } from 'next';

import { SITE_URL } from '@/constants/navigation';
import type { HireLandingConfig } from '@/lib/seo-hire-landings';
import type { ServiceLandingConfig } from '@/lib/seo-service-types';
import {
  defaultOgImageObjects,
  OG_IMAGE_PATH,
  SITE_NAME_OG,
  siteBaseUrl,
  TWITTER_SITE
} from '@/lib/site-og';

const base = SITE_URL.replace(/\/$/, '');

export function servicePageMetadata(cfg: ServiceLandingConfig): Metadata {
  const url = `${base}${cfg.canonicalPath}`;
  const baseUrl = siteBaseUrl();
  const ogImages = defaultOgImageObjects(baseUrl);
  return {
    title: cfg.title,
    description: cfg.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME_OG,
      title: cfg.ogTitle,
      description: cfg.description,
      images: ogImages
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_SITE,
      title: cfg.ogTitle,
      description: cfg.description,
      images: [OG_IMAGE_PATH]
    }
  };
}

export function hirePageMetadata(cfg: HireLandingConfig): Metadata {
  const url = `${base}${cfg.path}`;
  const baseUrl = siteBaseUrl();
  const ogImages = defaultOgImageObjects(baseUrl);
  return {
    title: cfg.title,
    description: cfg.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME_OG,
      title: cfg.title,
      description: cfg.description,
      images: ogImages
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_SITE,
      title: cfg.title,
      description: cfg.description,
      images: [OG_IMAGE_PATH]
    }
  };
}
