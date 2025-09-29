import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/format';

type TableProps = {
  headers: string[];
  rows: ReactNode[][];
  className?: string;
};

export function Table({ headers, rows, className }: TableProps) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-slate-800', className)}>
      <table className="min-w-full divide-y divide-slate-800">
        <thead className="bg-slate-900">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {rows.map((row, idx) => (
            <tr key={idx} className="bg-slate-950/60">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-sm text-slate-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
