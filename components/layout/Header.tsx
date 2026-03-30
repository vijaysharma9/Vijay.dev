'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS, CONTACT_NAV_ID } from '@/constants/navigation';
import { cn } from '@/utils/cn';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import MobileMenu from '@/components/layout/MobileMenu';

const MOBILE_ITEMS = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'portfolio', label: 'Work' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact / Hire Me' }
];

export default function Header() {
  const pathname = usePathname();

  const sectionIds = useMemo(
    () => [...NAV_ITEMS.map((i) => i.id), 'testimonials', CONTACT_NAV_ID],
    []
  );

  const activeId = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={cn(isScrolled && 'nav-scrolled')} aria-label="Primary">
      <div className="nav-inner">
        <Link
          href="/#hero"
          className="nav-logo"
          aria-label="HireDeveloperShop home"
        >
          <span className="brand-word">HireDeveloperShop</span>
          <span className="brand-com">.com</span>
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => {
            const href = item.id === 'about' ? '/about' : `/#${item.id}`;
            const isActive =
              item.id === 'about'
                ? pathname === '/about' || (pathname === '/' && activeId === 'about')
                : pathname === '/' && activeId === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={href}
                  className={cn(isActive && 'active')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href={`/#${CONTACT_NAV_ID}`}
              className={cn('nav-cta', activeId === CONTACT_NAV_ID && 'active')}
              aria-current={activeId === CONTACT_NAV_ID ? 'page' : undefined}
            >
              Hire Me
            </Link>
          </li>
        </ul>

        <MobileMenu items={MOBILE_ITEMS} activeId={activeId} pathname={pathname} />
      </div>
    </nav>
  );
}

