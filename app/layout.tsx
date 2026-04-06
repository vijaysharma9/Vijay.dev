import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import { JsonLd } from '@/components/JsonLd';
import ConditionalSiteChrome from '@/components/layout/ConditionalSiteChrome';
import {
  buildProfessionalServiceSchema,
  buildWebSiteSearchSchema
} from '@/lib/seo-jsonld';

import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hiredevelopershop.com';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  style: ['normal', 'italic']
});

const ogImagePath = '/assets/feature-image.png';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = new URL(siteUrl);
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: baseUrl,
    title: {
      default:
        'Hire Dedicated Developers | Affordable Full-Stack & IT Consultancy | HireDeveloperShop',
      template: '%s | HireDeveloperShop'
    },
    description:
      'Hire dedicated full-stack developers for SaaS, AI, eCommerce & web projects. Upwork Top Rated agency — 8+ years, 50+ projects, 100% satisfaction. Book a free consultation today.',
    keywords: [
      'hire dedicated developers',
      'full stack developer for hire',
      'IT consultancy services',
      'hire react developer',
      'SaaS development company',
      'AI integration services',
      'hire next.js developer'
    ],
    authors: [{ name: 'HireDeveloperShop', url: 'https://www.hiredevelopershop.com' }],
    creator: 'HireDeveloperShop',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      siteName: 'HireDeveloperShop',
      title: 'Hire Dedicated Developers | Affordable Full-Stack & IT Consultancy',
      description:
        'Hire dedicated full-stack developers for SaaS, AI, eCommerce & web projects. Upwork Top Rated. 8+ years, 50+ projects, 100% satisfaction.',
      images: [
        {
          url: new URL(ogImagePath, baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: 'HireDeveloperShop - Hire Dedicated Developers'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hire Dedicated Developers | HireDeveloperShop',
      description:
        'Hire dedicated full-stack developers for SaaS, AI, eCommerce & web projects.',
      images: [new URL(ogImagePath, baseUrl).toString()]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
    alternates: {
      canonical: new URL('/', baseUrl).toString()
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
        <JsonLd data={buildProfessionalServiceSchema()} />
        <JsonLd data={buildWebSiteSearchSchema()} />
      </head>
      <body className={dmSans.variable}>
        <ConditionalSiteChrome>{children}</ConditionalSiteChrome>
      </body>
    </html>
  );
}
