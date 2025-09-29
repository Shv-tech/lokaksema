'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useCountdown } from '@/hooks/useCountdown';

export function Hero() {
  const countdown = useCountdown(new Date('2026-02-12T09:00:00+05:30'));

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover' }} />
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
        <span className="rounded-full bg-white/10 px-4 py-1 text-sm text-white">12-14 February • Bengaluru Palace</span>
        <h1 className="text-4xl font-bold text-white sm:text-6xl">Designing the next decade of responsible innovation.</h1>
        <p className="max-w-2xl text-lg text-slate-200">
          Lokaksema unites founders, researchers, and policymakers to build technology that advances collective wellbeing across the Global South.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href="/waitlist">Join the waitlist</Link>
          </Button>
          <Link href="/speakers" className="text-sm text-slate-200 hover:text-white">
            Meet the speakers →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-4 text-center text-white">
          {([
            { label: 'Days', value: countdown.days },
            { label: 'Hours', value: countdown.hours },
            { label: 'Minutes', value: countdown.minutes },
            { label: 'Seconds', value: countdown.seconds }
          ]).map((item) => (
            <div key={item.label} className="rounded-xl bg-slate-950/60 p-4">
              <div className="text-3xl font-bold">{item.value.toString().padStart(2, '0')}</div>
              <div className="text-xs uppercase tracking-wide text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
