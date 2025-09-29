import type { FC } from 'react';

export interface BarDatum {
  label: string;
  value: number;
}

export const BarChart: FC<{ data: BarDatum[] }> = ({ data }) => {
  const max = Math.max(...data.map((datum) => datum.value), 1);

  return (
    <div className="flex items-end gap-3">
      {data.map((datum) => (
        <div key={datum.label} className="flex-1">
          <div
            className="rounded-t-md bg-brand-500"
            style={{ height: ${(datum.value / max) * 100}%, minHeight: '16px' }}
            title={${datum.label}: }
          />
          <p className="mt-2 text-xs text-slate-400">{datum.label}</p>
        </div>
      ))}
    </div>
  );
};
