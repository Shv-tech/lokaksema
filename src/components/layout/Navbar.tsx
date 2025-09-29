'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/utils/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/format';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Lokaksema 2026
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/tickets">Get Tickets</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>
      <div className={cn('border-t border-slate-900/50 md:hidden', open ? 'block' : 'hidden')}>
        <nav className="space-y-2 px-6 py-4 text-sm text-white">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded-md px-3 py-2 hover:bg-slate-900/60">
              {link.label}
            </Link>
          ))}
          <Button className="w-full" asChild>
            <Link href="/tickets">Reserve Seat</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
