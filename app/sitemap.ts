import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/constants/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const lastModified = new Date('2026-03-27T00:00:00.000Z');

  return [
    {
      url: `${baseUrl}/`,
      lastModified
    },
    {
      url: `${baseUrl}/about`,
      lastModified
    },
    {
      url: `${baseUrl}/services`,
      lastModified
    },
    {
      url: `${baseUrl}/stack`,
      lastModified
    },
    {
      url: `${baseUrl}/work`,
      lastModified
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified
    },
    {
      url: `${baseUrl}/hire`,
      lastModified
    },
    {
      url: `${baseUrl}/#services`,
      lastModified
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified
    }
  ];
}

