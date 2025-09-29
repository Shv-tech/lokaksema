import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/format';

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ className, children, ...props }: Props) => (
  <select
    className={cn('w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50', className)}
    {...props}
  >
    {children}
  </select>
);
