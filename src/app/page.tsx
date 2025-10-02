/* src/app/page.tsx */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundVideo from "@/components/effects/BackgroundVideo";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* full-bleed video, no overlays */}
      <BackgroundVideo mp4="/videos/hero-loop.mp4" webm={undefined} opacity={100} />

      {/* SUMMIT BY THE NUMBERS */}
      <section className="relative z-10 container-x py-16 md:py-24" id="numbers">
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
      <section className="relative z-10 container-x py-10 md:py-16" id="expect">
        <h2 className="section-title text-center">
          What to <span className="text-gradient">Expect</span>
        </h2>
        <p className="section-subtitle text-center mt-3">
          Three days of immersive learning, networking, and collaboration focused on building AI that serves humanity
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expectData.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* FEATURED SPEAKERS */}
      <section className="relative z-10 container-x py-16 md:py-24" id="speakers">
        <h2 className="section-title text-center">
          Featured <span className="text-gradient">Speakers</span>
        </h2>
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
      <section className="relative z-10 container-x py-16 md:py-24" id="partners">
        <h2 className="section-title text-center">
          Our <span className="text-gradient">Partners</span>
        </h2>
        <p className="section-subtitle text-center mt-3">
          Leading organizations committed to responsible AI and human-centered innovation
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

      {/* CTA */}
      <section className="relative z-10 container-x py-10 md:py-16">
        <div className="cta-gradient p-8 md:p-10 shadow-soft text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to Shape the Future?</h3>
          <p className="section-subtitle mt-2">
            Join us for three transformative days of learning, innovation, and collaboration.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/schedule" className="btn btn-primary">
              View Full Schedule
            </Link>
            <Link href="/speakers" className="btn btn-ghost">
              Explore Sessions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small components / data (inline for simplicity) ---------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-muted shadow-soft text-center">
      <div className="mx-auto mb-3 icon-ring">◎</div>
      <div className="text-3xl md:text-4xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

const expectData = [
  {
    icon: "👤",
    title: "World-Class Speakers",
    desc: "Learn from leading AI researchers, executives, ethicists, and policy makers.",
  },
  {
    icon: "📘",
    title: "Cutting-Edge Research",
    desc: "Breakthroughs in AI ethics, bias mitigation, and human-centered design.",
  },
  {
    icon: "🌐",
    title: "Global Networking",
    desc: "Connect with innovators from 75+ countries and build lasting partnerships.",
  },
  {
    icon: "💡",
    title: "Innovation Workshops",
    desc: "Hands-on frameworks and deployment practices for responsible AI.",
  },
  {
    icon: "🗂️",
    title: "Collaborative Solutions",
    desc: "Work together on real-world challenges and best practices.",
  },
  {
    icon: "🏆",
    title: "Recognition & Awards",
    desc: "Celebrate outstanding contributions to responsible AI.",
  },
] satisfies Array<{ icon: string; title: string; desc: string }>;

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card shadow-hover"
    >
      <div className="icon-ring mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </motion.div>
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
      <img src={props.img} alt={props.name} />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <div className="text-white font-semibold text-lg">{props.name}</div>
        <div className="text-white/90 text-sm">{props.title}</div>
        <div className="text-white/80 text-xs">• {props.org}</div>
      </div>
      <div className="bg-white">
        {props.tag && (
          <div className="px-4 pt-3">
            <span className="pill pill-platinum text-xs">{props.tag}</span>
          </div>
        )}
        <p className="px-4 pt-3 text-sm text-slate-600">
          Technology executive with expertise in scaling AI solutions responsibly across sectors.
        </p>
        <div className="px-4 py-3 flex flex-wrap gap-2">
          {props.tags?.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
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
