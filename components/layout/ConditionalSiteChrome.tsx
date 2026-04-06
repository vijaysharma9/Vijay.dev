'use client';

import { usePathname } from 'next/navigation';

import Footer from '@/components/layout/Footer';
import StickyNav from '@/components/layout/StickyNav';

export default function ConditionalSiteChrome({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = pathname.startsWith('/admin');

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <StickyNav />
      {children}
      <Footer />
    </>
  );
}
