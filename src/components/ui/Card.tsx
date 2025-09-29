import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils/format';

type CardProps = PropsWithChildren<{
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}>;

export function Card({ title, description, className, children }: CardProps) {
  return (
    <div className={cn('rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg', className)}>
      {(title || description) && (
        <div className="mb-4 space-y-1">
          {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
          {description && <p className="text-sm text-slate-400">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
