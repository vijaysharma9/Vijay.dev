'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

import { cn } from '@/utils/cn';

const NAV = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/admin/posts', label: 'All Posts', icon: '📝' },
  { href: '/admin/posts/new', label: 'New Post', icon: '✏️' },
  { href: '/admin/categories', label: 'Categories', icon: '🏷️' }
];

function navActive(href: string, pathname: string) {
  if (href === '/admin/posts') {
    return (
      pathname === '/admin/posts' || /^\/admin\/posts\/\d+/.test(pathname)
    );
  }
  if (href === '/admin/posts/new') {
    return pathname === '/admin/posts/new';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[240px] flex-col border-r border-[rgba(255,255,255,0.07)] bg-[#0d0d18]">
      <div className="flex items-center gap-2 border-b border-[rgba(255,255,255,0.07)] px-4 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(79,140,255,0.2)] text-sm font-bold text-[#4f8cff]">
          HDS
        </div>
        <div>
          <div className="text-sm font-bold text-[#e8e8f0]">Admin Panel</div>
          <div className="text-[11px] text-[#7b7b99]">HireDeveloperShop</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {NAV.map((item) => {
          const active = navActive(item.href, pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-[#bdbdd5] transition',
                active &&
                  'border-l-2 border-[#4f8cff] bg-[rgba(79,140,255,0.12)] text-[#e8e8f0]'
              )}
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[rgba(255,255,255,0.07)] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(79,140,255,0.15)] text-xs font-bold text-[#4f8cff]">
            VS
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-[#e8e8f0]">
              Vijay Sharma
            </div>
            <div className="text-[11px] text-[#7b7b99]">Administrator</div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="mt-4 w-full rounded-lg border border-[rgba(255,255,255,0.1)] py-2 text-sm text-[#bdbdd5] transition hover:bg-[rgba(255,255,255,0.05)]"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
