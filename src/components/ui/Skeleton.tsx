import { cn } from '@/lib/utils/format';

type Props = {
  className?: string;
};

export function Skeleton({ className }: Props) {
  return <div className={cn('animate-pulse rounded-md bg-slate-800', className)} />;
}
