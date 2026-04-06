export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hiredevelopershop.com';

export type NavigationItem = {
  id: string;
  label: string;
};

export const NAV_ITEMS: NavigationItem[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'tech', label: 'Stack' },
  { id: 'portfolio', label: 'Work' },
  { id: 'blog', label: 'Blog' },
  { id: 'pricing', label: 'Pricing' }
];

export const CONTACT_NAV_ID = 'contact';

