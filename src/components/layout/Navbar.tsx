"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Partners" }, // your page already exists
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/stats", label: "Stats" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-blur sticky top-0 z-50">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-block h-8 w-8 rounded-xl animate-gradient-x" />
          <span className="text-xl">Lokākṣema 2026</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "text-slate-900" : "opacity-80 hover:opacity-100"}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/landing" className="btn btn-primary">Join Waitlist</Link>
        </nav>

        <button
          className="md:hidden btn btn-outline"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="container-x py-3 flex flex-col gap-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </Link>
            ))}
            <Link href="/landing" onClick={() => setOpen(false)} className="btn btn-primary">
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
