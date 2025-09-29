'use client';

import { PropsWithChildren, ReactNode, useState } from 'react';
import { cn } from '@/lib/utils/format';

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = PropsWithChildren<{
  tabs: Tab[];
  defaultTab?: string;
}>;

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              'rounded-full px-4 py-2 text-sm transition',
              tab.id === current?.id ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
            )}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-slate-200">
        {current?.content}
      </div>
    </div>
  );
}
