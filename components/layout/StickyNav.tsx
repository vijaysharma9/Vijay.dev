import Link from 'next/link';

import Header from '@/components/layout/Header';

export default function StickyNav() {
  return (
    <>
      <Header />
      <Link href="/hire" className="sticky-consult-cta" aria-label="Book free consultation">
        Book Free Consultation
      </Link>
    </>
  );
}

