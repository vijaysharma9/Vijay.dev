export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  visualClass: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'saas-dashboard-platform',
    title: 'SaaS Dashboard Platform',
    description:
      'A multi-tenant SaaS platform with real-time analytics, role-based access control, and subscription billing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: {
      src: '/assets/saas-dashboard-platform.png',
      alt: 'SaaS dashboard platform case study with analytics and subscription management',
      width: 1024,
      height: 682
    },
    visualClass: 'pv-1'
  },
  {
    id: 'ecommerce-store-payments',
    title: 'eCommerce Store with Payments',
    description:
      'Full-featured eCommerce store built on Shopify with custom theme, Razorpay integration, and inventory automation.',
    tags: ['Shopify', 'Liquid', 'Razorpay'],
    image: {
      src: '/assets/ecommerce-store-payments.png',
      alt: 'eCommerce store with payment gateway integration case study',
      width: 1024,
      height: 682
    },
    visualClass: 'pv-2'
  },
  {
    id: 'ai-chatbot-system',
    title: 'AI Chatbot System',
    description:
      'Custom AI assistant powered by OpenAI with conversation memory, lead capture, and CRM sync for a B2B SaaS company.',
    tags: ['OpenAI', 'Next.js', 'Express'],
    image: {
      src: '/assets/ai-chatbot-system.png',
      alt: 'AI chatbot system case study for automated customer engagement',
      width: 1024,
      height: 682
    },
    visualClass: 'pv-3'
  },
  {
    id: 'custom-crm-system',
    title: 'Custom CRM System',
    description:
      'A bespoke CRM platform with pipeline management, email automation, and reporting dashboards for a sales team.',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    image: {
      src: '/assets/custom-crm-system.png',
      alt: 'Custom CRM system case study with sales pipeline and reporting dashboards',
      width: 1024,
      height: 682
    },
    visualClass: 'pv-4'
  },
  {
    id: 'business-website-seo',
    title: 'Business Website with SEO',
    description:
      'High-performance WordPress website with technical SEO, Core Web Vitals optimization, and content management system.',
    tags: ['WordPress', 'SEO', 'Elementor'],
    image: {
      src: '/assets/business-website-seo.png',
      alt: 'Business website with SEO optimization and Core Web Vitals improvements',
      width: 1024,
      height: 682
    },
    visualClass: 'pv-5'
  }
];

