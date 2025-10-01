import type { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export function Shell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
