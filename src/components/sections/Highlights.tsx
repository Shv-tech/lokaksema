const items = [
  {
    title: 'Global South innovators',
    description: 'Explore bold solutions tailored for emerging markets and climate resilience.'
  },
  {
    title: 'Immersive workshops',
    description: 'Level up your product, policy, and partnership strategies over hands-on sessions.'
  },
  {
    title: 'Meaningful connections',
    description: 'Curated matchmaking with peers, investors, and ecosystem enablers.'
  }
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-900/60 bg-slate-950/60 p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
