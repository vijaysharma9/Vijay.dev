import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/constants/navigation';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/hire?', '/hire/confirmation']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
