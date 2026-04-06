/** Contextual service landing for internal linking from blog posts. */
export function servicePathForBlogCategory(category: string): string {
  const c = category.toLowerCase();
  if (c.includes('ai') || c.includes('automation')) return '/services/ai-llm-integration';
  if (c.includes('case')) return '/services/saas-development';
  if (c.includes('web')) return '/services/web-development';
  if (c.includes('ecommerce') || c.includes('commerce')) return '/services/ecommerce';
  if (c.includes('devops')) return '/services/web-development';
  return '/services/web-development';
}
