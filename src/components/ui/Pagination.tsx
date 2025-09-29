'use client';

import { cn } from '@/lib/utils/format';

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export function Pagination({ page, totalPages, onChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  return (
    <div className="flex items-center gap-2">
      <button
        className={cn('rounded-md px-3 py-1 text-sm', page === 1 ? 'cursor-not-allowed text-slate-600' : 'hover:text-white')}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={cn('rounded-md px-3 py-1 text-sm', p === page ? 'bg-brand-500 text-white' : 'text-slate-400 hover:text-white')}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className={cn('rounded-md px-3 py-1 text-sm', page === totalPages ? 'cursor-not-allowed text-slate-600' : 'hover:text-white')}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
