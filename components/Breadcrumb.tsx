import Link from 'next/link';

import { JsonLd } from '@/components/JsonLd';
import { SITE_URL } from '@/constants/navigation';

export type BreadcrumbItem = { label: string; href?: string };

const origin = SITE_URL.replace(/\/$/, '');

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${origin}${item.href}` } : {})
    }))
  };
}

/** Visual trail only — safe to use inside client components. */
export function BreadcrumbNav({
  items,
  className = 'mb-6 flex flex-wrap items-center gap-2 pt-2 text-sm text-white/50'
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden className="text-white/30">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbListSchema(items)} />
      <BreadcrumbNav items={items} />
    </>
  );
}
