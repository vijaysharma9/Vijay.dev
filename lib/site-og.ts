import { SITE_URL } from '@/constants/navigation';

export const SITE_NAME_OG = 'HireDeveloperShop';
export const TWITTER_SITE = '@hiredevelopershop';

/** Default social share image (1200×630). */
export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE_DIMS = { width: 1200, height: 630 } as const;

export function siteBaseUrl(): URL {
  return new URL(SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`);
}

export function absoluteUrl(path: string): string {
  const base = siteBaseUrl();
  const p = path.startsWith('/') ? path : `/${path}`;
  return new URL(p, base).toString();
}

export function defaultOgImageObjects(baseUrl: URL) {
  const url = new URL(OG_IMAGE_PATH, baseUrl).toString();
  return [
    {
      url,
      width: OG_IMAGE_DIMS.width,
      height: OG_IMAGE_DIMS.height,
      alt: `${SITE_NAME_OG} — Hire dedicated developers`
    }
  ];
}
