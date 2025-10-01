/* app/page.tsx */
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative hero-gradient">
        <div className="blur-blob" />
        <div className="container-x relative z-10 py-20 md:py-28">
          <p className="eyebrow">Responsible AI for Humanity</p>
          <h1 className="section-title mt-3">
            The World’s AI Well-being Summit
            <span className="block text-gradient">Lokākṣema 2026</span>
          </h1>
          <p className="section-subtitle mt-4 max-w-2xl">
            Three transformative days of learning, innovation, and collaboration to
            shape AI that serves people—ethically, safely, and at scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/landing" className="btn btn-primary">Join the Waitlist</Link>
            <a href="#schedule" className="btn btn-outline">Explore Sessions</a>
          </div>
        </div>
      </section>

      {/* SUMMIT BY THE NUMBERS */}
      <section id="numbers" className="container-x py-16 md:py-24">
        <h2 className="section-title text-center">Summit by the Numbers</h2>
        <p className="section-subtitle text-center mt-3">
          Join a global community of leaders, researchers, and innovators shaping the future of responsible AI
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          <Stat value="2,500+" label="Expected Attendees" />
          <Stat value="75" label="Countries Represented" />
          <Stat value="150+" label="Speakers & Experts" />
          <Stat value="48" label="Hours of Content" />
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section id="expect" className="container-x py-10 md:py-16">
        <h2 className="section-title text-center">What to <span className="text-gradient">Expect</span></h2>
        <p className="section-subtitle text-center mt-3">
          Three days of immersive learning, networking, and collaboration focused on building AI that serves humanity
        </p>

        <div className="mt-10 grid-cards">
          <ExpectCard
            title="World-Class Speakers"
            desc="Learn from leading AI researchers, technology executives, ethicists, and policy makers shaping the future of responsible AI development."
            icon="👤"
          />
          <ExpectCard
            title="Cutting-Edge Research"
            desc="Discover the latest breakthroughs in AI ethics, bias mitigation, algorithmic fairness, and human-centered AI design."
            icon="📘"
          />
          <ExpectCard
            title="Global Networking"
            desc="Connect with innovators from 75+ countries, build lasting partnerships, and join a community dedicated to responsible AI."
            icon="🌐"
          />
          <ExpectCard
            title="Innovation Workshops"
            desc="Hands-on sessions covering practical frameworks and deployment practices for responsible AI."
            icon="💡"
          />
          <ExpectCard
            title="Collaborative Solutions"
            desc="Work together on real-world challenges, share best practices, and develop actionable strategies."
            icon="🗂️"
          />
          <ExpectCard
            title="Recognition & Awards"
            desc="Celebrate outstanding contributions through our innovation awards and research recognition program."
            icon="🏆"
          />
        </div>
      </section>

      {/* FEATURED SPEAKERS */}
      <section id="speakers" className="container-x py-16 md:py-24">
        <h2 className="section-title text-center">Featured <span className="text-gradient">Speakers</span></h2>
        <p className="section-subtitle text-center mt-3">
          Learn from world-renowned experts at the forefront of responsible AI development
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <SpeakerCard
            name="Dr. Sarah Chen"
            title="AI Ethics Research Director"
            org="Stanford AI Lab"
            tag="Keynote Speaker"
            img="/images/speakers/sarah.jpg"
            tags={["AI Ethics", "Machine Learning", "Bias Mitigation"]}
          />
          <SpeakerCard
            name="James Rodriguez"
            title="Chief Technology Officer"
            org="Global AI Initiative"
            img="/images/speakers/james.jpg"
            tags={["Enterprise AI", "Technology Strategy", "Digital Transformation"]}
          />
          <SpeakerCard
            name="Dr. Alex Kim"
            title="Ethics in Technology Fellow"
            org="Institute for AI Safety"
            img="/images/speakers/alex.jpg"
            tags={["AI Philosophy", "Human Values", "Cultural AI"]}
          />
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="container-x py-16 md:py-24">
        <h2 className="section-title text-center">Our <span className="text-gradient">Partners</span></h2>
        <p className="section-subtitle text-center mt-3">
          Leading organizations committed to responsible AI development and human-centered innovation
        </p>

        <div className="mt-8 flex justify-center">
          <span className="pill pill-platinum">Platinum Partners</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PartnerTile>TechCorp</PartnerTile>
          <PartnerTile>AI Innovations</PartnerTile>
          <PartnerTile>FutureTech</PartnerTile>
        </div>

        <div className="mt-10 flex justify-center">
          <span className="pill pill-gold">Gold Sponsors</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PartnerTile>DataSystems</PartnerTile>
          <PartnerTile>CloudAI</PartnerTile>
          <PartnerTile>SmartSolutions</PartnerTile>
          <PartnerTile>NextGen AI</PartnerTile>
          <PartnerTile>VisionWorks</PartnerTile>
          <PartnerTile>NeuroScale</PartnerTile>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container-x py-10 md:py-16">
        <div className="cta-gradient p-8 md:p-10 shadow-soft">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            Ready to Shape the Future?
          </h3>
          <p className="section-subtitle text-center mt-2">
            Join us for three transformative days of learning, innovation, and collaboration.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/landing" className="btn btn-primary">View Full Schedule</Link>
            <a href="#expect" className="btn btn-ghost">Explore Sessions</a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Tiny presentational components (inline for now) ---------- */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-muted shadow-soft text-center">
      <div className="mx-auto mb-3 icon-ring">◎</div>
      <div className="text-3xl md:text-4xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function ExpectCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="card shadow-hover">
      <div className="icon-ring mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function SpeakerCard(props: {
  name: string;
  title: string;
  org: string;
  img: string;
  tag?: string;
  tags?: string[];
}) {
  return (
    <article className="speaker-card shadow-soft">
      {/* Replace <img> with next/image if you have assets */}
      <img src="/image/1.svg" alt={props.name} />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <div className="text-white font-semibold text-lg">{props.name}</div>
        <div className="text-white/90 text-sm">{props.title}</div>
        <div className="text-white/80 text-xs">• {props.org}</div>
      </div>
      <div className="bg-white">
        {props.tag && (
          <div className="px-4 pt-3">
            <span className="pill pill-platinum text-xs"> {props.tag} </span>
          </div>
        )}
        <p className="px-4 pt-3 text-sm text-slate-600">
          Technology executive with expertise in scaling AI solutions responsibly across enterprise and government sectors.
        </p>
        <div className="px-4 py-3 flex flex-wrap gap-2">
          {props.tags?.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="px-4 pb-4">
          <a className="text-sm font-semibold text-gradient" href="#">
            View Full Profile ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function PartnerTile({ children }: { children: React.ReactNode }) {
  return <div className="partner-tile">{children}</div>;
}
