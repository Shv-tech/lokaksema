// src/app/(marketing)/layout.tsx
import type { ReactNode } from "react";
import "src/styles/globals.css"; // ✅ Adjusted relative path

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-purple-700 to-pink-500 text-white flex justify-between items-center">
      <div className="text-xl font-bold">Lokasema 2026</div>
      <ul className="flex gap-6">
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/speakers" className="hover:underline">Speakers</a></li>
        <li><a href="/schedule" className="hover:underline">Schedule</a></li>
        <li><a href="/sponsors" className="hover:underline">Sponsors</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full px-6 py-8 bg-gray-900 text-gray-200 text-sm text-center">
      <p>© {new Date().getFullYear()} Lokasema 2026 Summit. All rights reserved.</p>
    </footer>
  );
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
