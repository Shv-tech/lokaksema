import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

const speakers = [
  {
    name: 'Asha Mehta',
    title: 'CTO, Innovate Labs',
    avatar: '/images/speakers/asha-mehta.jpg',
    topic: 'Ethical AI governance'
  },
  {
    name: 'Rahul Sen',
    title: 'Founder, SolarWeave',
    avatar: '/images/speakers/rahul-sen.jpg',
    topic: 'Climate-positive hardware'
  },
  {
    name: 'Leena Banerjee',
    title: 'Policy Lead, Digital Commons Alliance',
    avatar: '/images/speakers/leena-banerjee.jpg',
    topic: 'Open digital public goods'
  }
];

export function FeaturedSpeakers() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Featured voices</h2>
          <p className="text-slate-400">A preview of the leaders shaping Lokaksema 2026.</p>
        </div>
        <Badge variant="outline">More speakers announced monthly</Badge>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {speakers.map((speaker) => (
          <div key={speaker.name} className="rounded-2xl border border-slate-900/60 bg-slate-950/60 p-6 text-center">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-slate-900">
              <Image src={speaker.avatar} alt={speaker.name} width={96} height={96} className="h-full w-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-white">{speaker.name}</h3>
            <p className="text-sm text-slate-400">{speaker.title}</p>
            <p className="mt-3 text-sm text-slate-300">{speaker.topic}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
