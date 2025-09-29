import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/utils/constants';

export function Footer() {
  return (
    <footer className="border-t border-slate-900/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Lokaksema. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
