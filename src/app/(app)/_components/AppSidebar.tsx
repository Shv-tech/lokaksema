'use client';

import Link from 'next/link';
import { useUiStore } from '@/store/useUiStore';
import { cn } from '@/lib/utils/format';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
  { href: '/tickets', label: 'Tickets' },
  { href: '/my-schedule', label: 'My Schedule' },
  { href: '/networking', label: 'Networking' },
  { href: '/sponsors', label: 'Sponsor Portal' },
  { href: '/admin', label: 'Admin' }
];

export function AppSidebar() {
  const { isSidebarOpen } = useUiStore();

  return (
    <aside className={cn('w-full bg-slate-950/80 p-6 md:w-64 md:border-r md:border-slate-900/60', isSidebarOpen ? 'block' : 'hidden md:block')}>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/60 hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
