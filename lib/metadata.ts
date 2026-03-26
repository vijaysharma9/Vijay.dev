export const SITE_NAME = 'HireDeveloperShop.com';

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hiredevelopershop.com'
  );
}

export function getCanonicalUrl(pathname: string = '/') {
  const url = new URL(getSiteUrl());
  url.pathname = pathname === '/' ? '/' : pathname;
  return url.toString();
}

