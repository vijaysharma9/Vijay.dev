import type { Metadata } from 'next';
import { DM_Sans, Syne } from 'next/font/google';

import StickyNav from '@/components/layout/StickyNav';
import Footer from '@/components/layout/Footer';

import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://www.hiredevelopershop.com';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  style: ['normal', 'italic']
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(siteUrl);

  return {
    metadataBase: baseUrl,
    title: {
      default: 'Hire Dedicated Developers | Full Stack & IT Consultancy Services',
      template: '%s | HireDeveloperShop.com'
    },
    description:
      'Hire dedicated developers for full-stack web, SaaS, eCommerce, and AI projects with expert IT consultancy. Get a free consultation and fast delivery.',
    openGraph: {
      type: 'website',
      url: baseUrl,
      title: 'Hire Dedicated Developers | Full Stack & IT Consultancy Services',
      description:
        'Hire dedicated developers for full-stack web, SaaS, eCommerce, and AI projects with expert IT consultancy and fast delivery.',
      images: [
        {
          url: new URL('/assets/feature-image.png', baseUrl).toString(),
          alt: 'HireDeveloperShop feature image showcasing IT consultancy and full-stack development services.'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hire Dedicated Developers | Full Stack & IT Consultancy Services',
      description:
        'Hire dedicated developers for full-stack web, SaaS, eCommerce, and AI projects with expert IT consultancy and fast delivery.',
      images: [new URL('/assets/feature-image.png', baseUrl).toString()]
    },
    alternates: {
      canonical: baseUrl.toString()
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <StickyNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

