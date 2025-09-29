import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/format';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => (
  <input
    className={cn('w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50', className)}
    {...props}
  />
);
