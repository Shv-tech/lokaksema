'use client';

import { useCountdown } from '@/hooks/useCountdown';

export function Countdown() {
  const countdown = useCountdown(new Date('2026-02-12T09:00:00+05:30'));

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center rounded-2xl border border-slate-900/60 bg-slate-950/60 px-6 py-12 text-center">
      <h2 className="text-2xl font-semibold text-white">Countdown to Bengaluru</h2>
      <p className="mt-2 text-sm text-slate-400">Secure your pass before prices increase on 15 December.</p>
      <div className="mt-8 grid w-full grid-cols-4 gap-4 text-white">
        {([
          { label: 'Days', value: countdown.days },
          { label: 'Hours', value: countdown.hours },
          { label: 'Minutes', value: countdown.minutes },
          { label: 'Seconds', value: countdown.seconds }
        ]).map((item) => (
          <div key={item.label} className="rounded-xl bg-slate-900/80 px-4 py-6">
            <div className="text-3xl font-bold">{item.value.toString().padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-wide text-slate-400">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
