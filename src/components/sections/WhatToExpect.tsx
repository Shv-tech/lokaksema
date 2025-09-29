const experiences = [
  {
    title: 'Studio Classrooms',
    description: 'Small-group sessions to co-design strategies with experts in policy, product, and research.'
  },
  {
    title: 'Impact Showcase',
    description: 'Experience prototypes and pilots from civic tech pioneers across South Asia and Africa.'
  },
  {
    title: 'Community Circles',
    description: 'Daily facilitated circles that help you connect with peers tackling similar challenges.'
  }
];

export function WhatToExpect() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white">What to expect</h2>
        <p className="text-sm text-slate-400">Three immersive days packed with inspiration and activation.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {experiences.map((experience) => (
          <div key={experience.title} className="rounded-2xl border border-slate-900/60 bg-slate-950/60 p-6">
            <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
