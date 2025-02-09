import UserDashboardLayout from '@/components/dashboard-layout';

export default function UserDashboardMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserDashboardLayout>{children}</UserDashboardLayout>;
}
