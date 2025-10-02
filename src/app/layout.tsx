import '../styles/globals.css';
import type { Metadata } from "next";


// If these exist in your project (per your tree), keep them.
// They will be auto-hidden on the home page by CSS.
import { Providers } from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lokākṣema 2026",
  description: "The World’s AI Well-being Summit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* IMPORTANT: body must be transparent */}
      <body>
          {/* Wrapped so we can hide them on the homepage via CSS */}
          <div className="site-navbar">
            <Navbar />
          </div>

          {children}

          <div className="site-footer">
            <Footer />
          </div>
      </body>
    </html>
  );
}
