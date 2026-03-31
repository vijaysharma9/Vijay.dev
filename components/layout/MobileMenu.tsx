'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';
import { useMobileMenu } from '@/hooks/useMobileMenu';

type MobileMenuItem = {
  id: string;
  label: string;
  href?: string;
};

export default function MobileMenu({
  items,
  activeId,
  pathname
}: {
  items: MobileMenuItem[];
  activeId: string | null;
  pathname: string;
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
          const isActive =
            item.id === 'about'
              ? pathname === '/about' || (pathname === '/' && activeId === 'about')
              : item.id === 'services'
                ? pathname === '/services' || (pathname === '/' && activeId === 'services')
                : item.id === 'tech'
                  ? pathname === '/stack' || (pathname === '/' && activeId === 'tech')
                  : item.id === 'portfolio'
                    ? pathname === '/work' || (pathname === '/' && activeId === 'portfolio')
                    : item.id === 'pricing'
                      ? pathname === '/pricing' || (pathname === '/' && activeId === 'pricing')
                    : pathname === '/' && activeId === item.id;
          const href = item.href ?? `/#${item.id}`;

          return (
            <Link
              key={item.id}
              href={href}
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

