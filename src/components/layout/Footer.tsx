"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <footer
      className={`relative z-10 ${
        onHome ? "bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur" : "bg-white"
      } border-t border-black/5`}
    >
      {/* Wave top edge */}
      <div className="absolute -top-6 inset-x-0 pointer-events-none">
        <svg width="100%" height="48" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="wave" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgb(168,85,247)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(236,72,153)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C240,10 480,110 720,60 C960,10 1200,110 1440,60 L1440,120 L0,120 Z"
            fill="url(#wave)"
          />
        </svg>
      </div>

      <div className="container-x grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/images/logo.svg" className="h-7 w-auto" alt="Lokākṣema" />
            <span className="font-semibold">Lokākṣema 2026</span>
          </div>
          <p className="text-sm text-slate-600">
            Building AI that serves humanity — ethically, safely, and at scale.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Conference</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/speakers" className="hover:text-slate-900">Speakers</Link></li>
            <li><Link href="/sponsors" className="hover:text-slate-900">Partners & Sponsors</Link></li>
            <li><Link href="/schedule" className="hover:text-slate-900">Schedule</Link></li>
            <li><Link href="/tickets" className="hover:text-slate-900">Tickets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/blog" className="hover:text-slate-900">Blog</Link></li>
            <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
            <li><Link href="/networking" className="hover:text-slate-900">Networking</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Stay in the loop</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            />
            <button className="btn btn-primary !px-4">Join</button>
          </form>
          <p className="mt-2 text-xs text-slate-500">By subscribing you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-black/5">
        <div className="container-x flex flex-col gap-3 py-4 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Lokākṣema. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms</Link>
            <Link href="/press" className="hover:text-slate-900">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
