'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils/format';

export function Modal({ open, onClose, title, children }: PropsWithChildren<{ open: boolean; onClose: () => void; title?: string }>) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div className={cn('w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl')}>
        {title && <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>}
        <div className="space-y-4 text-slate-200">{children}</div>
        <button onClick={onClose} className="mt-6 text-sm text-slate-400 hover:text-white">
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
