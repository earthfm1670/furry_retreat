import * as React from 'react';
import { Sidebar } from '@/components';

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='h-full w-full bg-neutral-100 p-6'>{children}</div>
    </div>
  );
}
