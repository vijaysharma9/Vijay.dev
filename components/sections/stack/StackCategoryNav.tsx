'use client';

import { STACK_NAV_ITEMS } from '@/lib/stack-data';
import StickyCategoryNav from '@/components/ui/StickyCategoryNav';

export default function StackCategoryNav() {
  return (
    <StickyCategoryNav
      items={STACK_NAV_ITEMS}
      defaultActiveId="all-stacks"
      className="py-5"
      innerClassName="gap-2"
    />
  );
}
