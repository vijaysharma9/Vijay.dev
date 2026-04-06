/** Maps `lib/services-data` service ids to dedicated SEO landing paths (when they exist). */
export function getServiceSeoHref(serviceId: string): string | undefined {
  const map: Record<string, string> = {
    'web-development': '/services/web-development',
    'frontend-development': '/services/web-development',
    'backend-development': '/services/web-development',
    'ai-llm': '/services/ai-llm-integration',
    'ai-automation': '/services/ai-automation',
    'ai-chatbots': '/services/ai-chatbots',
    ecommerce: '/services/ecommerce',
    'ecommerce-retail': '/services/ecommerce',
    'mobile-apps': '/services/mobile-development',
    'saas-product': '/services/saas-development',
    saas: '/services/saas-development'
  };
  return map[serviceId];
}

export const WORK_CASE_SLUG_BY_PROJECT_ID: Record<string, string> = {
  'saas-analytics': 'multi-tenant-analytics-platform',
  'ecom-payments': 'custom-ecommerce-shopify',
  'ai-chatbot': 'ai-chatbot-b2b-saas',
  'custom-crm': 'custom-crm-sales-teams',
  'ai-docs': 'ai-document-processing-pipeline',
  'mobile-booking': 'on-demand-service-booking-app'
};

export function getWorkCaseStudyHref(projectId: string): string | undefined {
  const slug = WORK_CASE_SLUG_BY_PROJECT_ID[projectId];
  return slug ? `/work/${slug}` : undefined;
}
