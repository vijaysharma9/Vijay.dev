import type { MetadataRoute } from 'next';

import { sql } from '@vercel/postgres';

import { SITE_URL } from '@/constants/navigation';
import { CASE_STUDIES } from '@/lib/case-study-pages';
import { HIRE_LANDINGS } from '@/lib/seo-hire-landings';
import { SERVICE_LANDING } from '@/lib/seo-service-landings';

const weekly = 'weekly' as const;
const monthly = 'monthly' as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const lastMod = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: lastMod, changeFrequency: weekly, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: lastMod, changeFrequency: weekly, priority: 0.9 },
    { url: `${baseUrl}/stack`, lastModified: lastMod, changeFrequency: monthly, priority: 0.7 },
    { url: `${baseUrl}/work`, lastModified: lastMod, changeFrequency: weekly, priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: lastMod, changeFrequency: monthly, priority: 0.7 },
    { url: `${baseUrl}/hire`, lastModified: lastMod, changeFrequency: monthly, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: lastMod, changeFrequency: weekly, priority: 0.7 }
  ];

  const servicePages: MetadataRoute.Sitemap = Object.keys(SERVICE_LANDING).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: lastMod,
    changeFrequency: monthly,
    priority: 0.9
  }));

  const hirePages: MetadataRoute.Sitemap = Object.values(HIRE_LANDINGS).map((h) => ({
    url: `${baseUrl}${h.path}`,
    lastModified: lastMod,
    changeFrequency: monthly,
    priority: 0.85
  }));

  const casePages: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: lastMod,
    changeFrequency: monthly,
    priority: 0.8
  }));

  let blogPosts: MetadataRoute.Sitemap = [];
  try {
    const { rows } = await sql`
      SELECT slug,
             COALESCE(updated_at, published_at) AS last_mod
      FROM posts
      WHERE status = 'published'
    `;
    blogPosts = rows.map((row) => {
      const post = row as { slug: string; last_mod: Date | string | null };
      const lm =
        post.last_mod instanceof Date
          ? post.last_mod
          : post.last_mod
            ? new Date(post.last_mod)
            : lastMod;
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: lm,
        changeFrequency: weekly,
        priority: 0.7
      };
    });
  } catch {
    /* no POSTGRES_URL at build */
  }

  return [...staticPages, ...servicePages, ...hirePages, ...casePages, ...blogPosts];
}
