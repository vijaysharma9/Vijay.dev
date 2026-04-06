import { SITE_URL } from '@/constants/navigation';

const base = SITE_URL.replace(/\/$/, '');

export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'HireDeveloperShop',
    url: base,
    logo: `${base}/assets/favicon.png`,
    description:
      'Hire dedicated full-stack developers for SaaS, AI, eCommerce and web projects. Upwork Top Rated agency with 8+ years and 50+ projects delivered.',
    telephone: '+918527594730',
    email: 'vijaysharma6918h@gmail.com',
    areaServed: 'Worldwide',
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: ['https://www.upwork.com/freelancers/~019b3aee9c5d781d36']
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
