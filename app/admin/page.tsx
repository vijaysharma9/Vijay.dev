import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AdminIndexPage() {
  const session = await auth();
  if (session) redirect('/admin/dashboard');
  redirect('/admin/login');
}
