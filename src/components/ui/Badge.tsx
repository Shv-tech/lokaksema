import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/format';

type Props = PropsWithChildren<{ variant?: 'default' | 'outline'; className?: string }>;

export function Badge({ variant = 'default', className, children }: Props) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium';
  const variants = {
    default: 'bg-brand-500/20 text-brand-200',
    outline: 'border border-brand-400/60 text-brand-200'
  };
  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}
