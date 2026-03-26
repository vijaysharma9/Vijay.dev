export type TechGroup = {
  id: string;
  title: string;
  tags: string[];
};

export const TECH_STACK: TechGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3']
  },
  {
    id: 'backend',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST APIs', 'GraphQL']
  },
  {
    id: 'database',
    title: 'Database',
    tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis']
  },
  {
    id: 'cms-ecommerce',
    title: 'CMS & eCommerce',
    tags: ['WordPress', 'Shopify', 'Webflow', 'WooCommerce']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    tags: ['AWS', 'Docker', 'CI/CD', 'Git / GitHub', 'Nginx', 'Linux']
  },
  {
    id: 'ai-tools',
    title: 'AI & Tools',
    tags: ['OpenAI API', 'LangChain', 'Stripe', 'Razorpay', 'Twilio', 'SendGrid']
  }
];

