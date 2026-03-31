'use client';

import { CATEGORY_NAV_ITEMS } from '@/lib/services-data';
import StickyCategoryNav from '@/components/ui/StickyCategoryNav';

export default function ServicesCategoryNav() {
  return (
    <StickyCategoryNav
      items={CATEGORY_NAV_ITEMS}
      defaultActiveId="all-services"
      className="py-6"
      innerClassName="gap-2.5"
    />
  );
}
