'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';
import { useMobileMenu } from '@/hooks/useMobileMenu';

type MobileMenuItem = {
  id: string;
  label: string;
};

export default function MobileMenu({
  items,
  activeId
}: {
  items: MobileMenuItem[];
  activeId: string | null;
}) {
  const { open, toggle, close } = useMobileMenu();

  return (
    <>
      <button
        type="button"
        className="hamburger"
        id="hamburger"
        aria-label="Toggle navigation menu"
        aria-controls="mobileMenu"
        aria-expanded={open}
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobileMenu"
        className={cn('mobile-menu', open && 'open')}
        aria-hidden={!open}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={cn(isActive && 'active')}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => close()}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}

