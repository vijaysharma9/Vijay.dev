import type { Metadata } from 'next';

import BookACall from '@/components/sections/hire/BookACall';
import HireFAQ from '@/components/sections/hire/HireFAQ';
import HireHero from '@/components/sections/hire/HireHero';
import ProjectForm from '@/components/sections/hire/ProjectForm';
import QuickChannels from '@/components/sections/hire/QuickChannels';
import WhyChooseUs from '@/components/sections/hire/WhyChooseUs';

export const metadata: Metadata = {
  title: 'Hire Us — Start Your Project | HireDeveloperShop',
  description:
    'Start a project with HireDeveloperShop. Fixed-price web development, AI integration, SaaS, and eCommerce. Free discovery call, 24hr proposal, work starts within 72 hours.'
};

export default function HirePage() {
  return (
    <main>
      <HireHero />
      <QuickChannels />
      <ProjectForm />
      <WhyChooseUs />
      <BookACall />
      <HireFAQ />
    </main>
  );
}
