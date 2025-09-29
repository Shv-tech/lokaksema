'use client';

import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils/format';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
};

export function Button({ className, variant = 'primary', asChild = false, ...props }: Props) {
  const Component = asChild ? Slot : 'button';
  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-400',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700',
    ghost: 'bg-transparent text-white hover:bg-slate-900/40'
  };

  return (
    <Component
      className={cn('inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50', variants[variant], className)}
      {...props}
    />
  );
}
