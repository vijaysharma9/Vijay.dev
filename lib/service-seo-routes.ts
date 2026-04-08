/** Maps `lib/services-data` service ids to dedicated SEO landing paths (when they exist). */
export function getServiceSeoHref(serviceId: string): string | undefined {
  const map: Record<string, string> = {
    'web-development': '/services/web-development',
    'frontend-development': '/services/frontend-development',
    'backend-development': '/services/backend-development',
    'ai-llm': '/services/ai-llm-integration',
    'ai-automation': '/services/ai-automation',
    'ai-chatbots': '/services/ai-chatbots',
    'qa-testing': '/services/qa-testing',
    iot: '/services/iot-embedded',
    'mobile-apps': '/services/mobile-development',
    ecommerce: '/services/ecommerce',
    'ecommerce-retail': '/services/ecommerce',
    'cloud-devops': '/services/cloud-devops',
    'php-laravel': '/services/php-laravel',
    'legacy-migration': '/services/legacy-migration',
    'cms-nocode': '/services/cms-nocode',
    'database-architecture': '/services/database-architecture',
    'saas-product': '/services/saas-development',
    saas: '/services/saas-development',
    'technical-seo': '/services/technical-seo',
    'it-consultancy': '/services/it-consultancy'
  };
  return map[serviceId];
}

export const WORK_CASE_SLUG_BY_PROJECT_ID: Record<string, string> = {
  'saas-analytics': 'multi-tenant-analytics-platform',
  'ecom-payments': 'custom-ecommerce-shopify',
  'ai-chatbot': 'ai-chatbot-b2b-saas',
  'custom-crm': 'custom-crm-sales-teams',
  'ai-docs': 'ai-document-processing-pipeline',
  'mobile-booking': 'on-demand-service-booking-app',
  'health-telemed': 'telemedicine-platform',
  'fintech-gateway': 'multi-currency-payment-gateway',
  'iot-monitoring': 'industrial-iot-platform'
};

export function getWorkCaseStudyHref(projectId: string): string | undefined {
  const slug = WORK_CASE_SLUG_BY_PROJECT_ID[projectId];
  return slug ? `/work/${slug}` : undefined;
}
