'use client';

import { usePagination } from '@/hooks/usePagination';

const sessions = Array.from({ length: 14 }).map((_, index) => ({
  id: session-,
  title: Session ,
  time: '10:00 AM – 11:00 AM',
  location: 'Studio 3'
}));

export function MyScheduleClient() {
  const { pageItems, page, totalPages, goTo } = usePagination(sessions, 5);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">My schedule</h1>
      <div className="space-y-4">
        {pageItems.map((session) => (
          <div key={session.id} className="rounded-xl border border-slate-900/60 bg-slate-950/60 p-4">
            <h2 className="text-lg font-semibold text-white">{session.title}</h2>
            <p className="text-sm text-slate-400">{session.time}</p>
            <p className="text-sm text-slate-500">{session.location}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-sm text-slate-400">
        <button onClick={() => goTo(page - 1)} disabled={page === 1} className="rounded-md bg-slate-900 px-3 py-1 disabled:opacity-40">
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => goTo(page + 1)} disabled={page === totalPages} className="rounded-md bg-slate-900 px-3 py-1 disabled:opacity-40">
          Next
        </button>
      </div>
    </div>
  );
}
