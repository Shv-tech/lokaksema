'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils/format';

export function Toast({ message, duration = 4000 }: { message: string; duration?: number }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <div className={cn('fixed bottom-6 right-6 rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-lg')}>{message}</div>;
}
