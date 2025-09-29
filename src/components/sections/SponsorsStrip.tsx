import Image from 'next/image';

const sponsors = [
  { name: 'Riverstone', logo: '/images/sponsors/riverstone.svg' },
  { name: 'Asteria', logo: '/images/sponsors/asteria.svg' },
  { name: 'Nimbus', logo: '/images/sponsors/nimbus.svg' }
];

export function SponsorsStrip() {
  return (
    <section className="border-y border-slate-900/60 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 py-10 opacity-80">
        {sponsors.map((sponsor) => (
          <Image key={sponsor.name} src={sponsor.logo} alt={sponsor.name} width={140} height={40} />
        ))}
      </div>
    </section>
  );
}
