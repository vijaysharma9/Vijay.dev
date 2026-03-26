import type { ImageAsset, Service } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: {
      src: '/assets/web-development-card.png',
      alt: 'Custom web development services for business websites and SaaS platforms',
      width: 1024,
      height: 1024
    },
    bullets: [
      'Custom Web Applications',
      'Business Websites',
      'SaaS Platforms',
      'Admin Dashboards'
    ]
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: {
      src: '/assets/frontend-development-card.png',
      alt: 'Frontend development with React Next.js and responsive UI design',
      width: 1024,
      height: 1024
    },
    bullets: ['React.js / Next.js', 'Angular', 'Vue.js', 'Tailwind / UI Optimization']
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    icon: {
      src: '/assets/backend-development-card.png',
      alt: 'Backend development services with APIs authentication and scalable databases',
      width: 1024,
      height: 1024
    },
    bullets: ['Node.js / Express.js', 'REST API Development', 'Authentication Systems', 'Database Architecture']
  },
  {
    id: 'ecommerce-development',
    title: 'eCommerce Development',
    icon: {
      src: '/assets/ecommerce-development-card.png',
      alt: 'eCommerce development services with Shopify WooCommerce and payment integration',
      width: 1024,
      height: 1024
    },
    bullets: [
      'Shopify Development',
      'WooCommerce / WordPress',
      'Custom eCommerce Platforms',
      'Payment Gateway Integration'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: {
      src: '/assets/ai-automation-card.png',
      alt: 'AI automation services including chatbots workflow automation and LLM integrations',
      width: 1024,
      height: 1024
    },
    bullets: ['AI Chatbots & Agents', 'Workflow Automation Tools', 'OpenAI / LLM Integrations', 'Custom API Integrations']
  },
  {
    id: 'cms-no-code',
    title: 'CMS & No-Code',
    icon: {
      src: '/assets/cms-no-code-card.png',
      alt: 'CMS and no-code development using WordPress Webflow and custom content systems',
      width: 1024,
      height: 1024
    },
    bullets: ['WordPress Development', 'Webflow', 'Custom CMS Solutions', 'Theme & Plugin Development']
  },
  {
    id: 'devops-deployment',
    title: 'DevOps & Deployment',
    icon: {
      src: '/assets/devops-deployment-card.png',
      alt: 'DevOps and deployment services with AWS Docker CI/CD and cloud operations',
      width: 1024,
      height: 1024
    },
    bullets: ['AWS / Cloud Deployment', 'Docker Setup', 'CI/CD Pipelines', 'Performance Optimization']
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    icon: {
      src: '/assets/it-consultancy-card.png',
      alt: 'IT consultancy services for architecture planning stack selection and delivery strategy',
      width: 1024,
      height: 1024
    },
    bullets: ['Architecture Design', 'Tech Stack Advice', 'Code Audits', 'Roadmap Planning']
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    icon: {
      src: '/assets/maintenance-support-card.png',
      alt: 'Maintenance and support services for bug fixing monitoring and technical assistance',
      width: 1024,
      height: 1024
    },
    bullets: ['Bug Fixes', 'Security Patches', 'Feature Updates', 'Ongoing Technical Support']
  }
];

