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

export function buildItemListJsonLd(names: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: names.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name
    }))
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

/** ItemList of technology names for `/stack` SEO. */
export function buildStackItemListJsonLd(techNames: string[]) {
  return buildItemListJsonLd(techNames);
}

/** ItemList of service names for `/services` SEO. */
export function buildServicesItemListJsonLd(serviceNames: string[]) {
  return buildItemListJsonLd(serviceNames);
}

