import { Syne } from 'next/font/google';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne'
});

export default async function AdminPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect('/admin/login');

  return (
    <div className={`${syne.variable} flex min-h-screen`}>
      <AdminSidebar />
      <main className="min-h-screen flex-1 overflow-auto pl-[240px]">
        <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
      </main>
    </div>
  );
}
