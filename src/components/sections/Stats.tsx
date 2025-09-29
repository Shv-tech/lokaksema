const stats = [
  { label: 'Attendees', value: '3,200+' },
  { label: 'Speakers', value: '120+' },
  { label: 'Workshops', value: '40' },
  { label: 'Partner orgs', value: '85' }
];

export function Stats() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-900/60 bg-slate-950/60 p-6 text-center">
            <div className="text-2xl font-semibold text-white">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
