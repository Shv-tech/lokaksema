import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from '@/components/layout/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lokaksema 2026',
  description: 'Lokaksema 2026 is the global summit for responsible innovation and collective action.',
  metadataBase: new URL('https://lokaksema.io')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
