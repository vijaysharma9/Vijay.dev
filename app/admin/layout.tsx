import AdminProviders from '@/components/admin/AdminProviders';

export default function AdminRootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProviders>
      <div className="min-h-screen bg-[#09090f] text-[#e8e8f0]">{children}</div>
    </AdminProviders>
  );
}
