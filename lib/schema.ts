import type { Service } from '@/types';

import { SITE_URL } from '@/constants/navigation';

const baseUrl = new URL(SITE_URL);

const ORGANIZATION_NAME = 'HireDeveloperShop';

export function buildOrganizationJsonLd() {
  return {
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    url: baseUrl.toString(),
    logo: new URL('/assets/favicon.png', baseUrl).toString(),
    sameAs: [
      'https://www.upwork.com/freelancers/~019b3aee9c5d781d36',
      'https://github.com/vijaysharma9/Vijay.dev'
    ]
  } as const;
}

export function buildWebsiteJsonLd() {
  return {
    '@type': 'WebSite',
    name: ORGANIZATION_NAME,
    url: baseUrl.toString()
  } as const;
}

export function buildServicesJsonLd(services: Service[]) {
  const servicesUrl = `${baseUrl.toString()}#services`;

  return services.map((service) => ({
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME
    },
    areaServed: 'Worldwide',
    url: servicesUrl
  }));
}

/** JSON-LD Person for the /about page (matches @graph pattern used on the home page). */
export function buildPersonJsonLd() {
  const aboutUrl = new URL('/about', baseUrl).toString();

  return {
    '@type': 'Person',
    '@id': `${aboutUrl}#person`,
    name: 'Vijay Sharma',
    url: aboutUrl,
    jobTitle: 'Full-Stack Developer & IT Consultant',
    description:
      'Full-stack developer and IT consultant with 8+ years of experience building scalable web applications, SaaS platforms, and AI solutions.',
    sameAs: [
      'https://www.upwork.com/freelancers/~019b3aee9c5d781d36',
      'https://github.com/vijaysharma9/Vijay.dev'
    ],
    worksFor: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
      url: baseUrl.toString()
    }
  } as const;
}

