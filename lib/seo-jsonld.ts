import { SITE_URL } from '@/constants/navigation';

const base = SITE_URL.replace(/\/$/, '');

/** Organization — homepage + sitewide identity (replaces generic ProfessionalService). */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HireDeveloperShop',
    url: base,
    logo: {
      '@type': 'ImageObject',
      url: `${base}/assets/favicon.png`
    },
    description:
      'Hire dedicated full-stack developers for SaaS, AI, eCommerce and web projects. Upwork Top Rated agency with 8+ years and 50+ projects delivered.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+918527594730',
      email: 'vijaysharma6918h@gmail.com',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    },
    sameAs: ['https://www.upwork.com/freelancers/~019b3aee9c5d781d36'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    }
  };
}

export function buildWebSiteSearchSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HireDeveloperShop',
    url: base,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${base}/services?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Start a project — HireDeveloperShop',
    url: `${base}/hire`,
    description:
      'Start a project with HireDeveloperShop — discovery call, scoped proposal, and fixed-price delivery.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'HireDeveloperShop',
      url: base
    }
  };
}

export function buildFaqPageSchema(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
