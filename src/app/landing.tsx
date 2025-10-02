/* src/app/landing.tsx */
"use client";

import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import BackgroundVideo from "@/components/effects/BackgroundVideo";
import ParticleMesh from "@/components/effects/ParticleMesh";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white isolate">
      {/* ===== BACKGROUND STACK ===== */}
      {/* 1) Video at the very back */}
      <BackgroundVideo className="-z-50" mp4="/videos/hero-loop.mp4" opacity={0.3} />
      {/* 2) Mesh above the video */}
      <ParticleMesh className="fixed inset-0 -z-40 pointer-events-none" />

      {/* ===== HERO INTRO (WITH TINY BOXES + COMPANY NAMES) ===== */}
      <section className="relative z-10">
        <div className="container-x pt-28 md:pt-36 pb-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Responsible AI for Humanity</p>
            <h1 className="section-title mt-3">
              The World’s AI Well-being Summit
              <span className="block text-gradient">Lokākṣema 2026</span>
            </h1>
            <p className="section-subtitle mt-4 max-w-2xl">
              Three transformative days of learning, innovation, and collaboration to shape
              AI that serves people—ethically, safely, and at scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="/landing">Join the Waitlist</MagneticButton>
              <MagneticButton href="/schedule" className="btn btn-outline">
                Explore Sessions
              </MagneticButton>
            </div>

            <div className="mt-10 opacity-80 text-sm">
              Trusted by leaders in research, industry, and policy.
            </div>
            <LogoMarquee className="mt-4" />
          </div>
        </div>
      </section>

      {/* ===== REST OF YOUR PAGE CONTENT ===== */}

      {/* NUMBERS */}
      <section className="container-x py-16 md:py-24" id="numbers">
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
      <section className="container-x py-10 md:py-16" id="expect">
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
      <section className="container-x py-16 md:py-24" id="speakers">
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

      {/* CTA */}
      <section className="container-x py-10 md:py-16">
        <div className="cta-gradient p-8 md:p-10 shadow-soft text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to Shape the Future?</h3>
          <p className="section-subtitle mt-2">
            Join us for three transformative days of learning, innovation, and collaboration.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/schedule" className="btn btn-primary">View Full Schedule</Link>
            <Link href="/speakers" className="btn btn-ghost">Explore Sessions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Helpers ===== */

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
  { icon: "👤", title: "World-Class Speakers", desc: "Learn from leading AI researchers, executives, ethicists, and policy makers." },
  { icon: "📘", title: "Cutting-Edge Research", desc: "Breakthroughs in AI ethics, bias mitigation, and human-centered design." },
  { icon: "🌐", title: "Global Networking", desc: "Connect with innovators from 75+ countries and build lasting partnerships." },
  { icon: "💡", title: "Innovation Workshops", desc: "Hands-on frameworks and deployment practices for responsible AI." },
  { icon: "🗂️", title: "Collaborative Solutions", desc: "Work together on real-world challenges and best practices." },
  { icon: "🏆", title: "Recognition & Awards", desc: "Celebrate outstanding contributions to responsible AI." },
];

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
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

/* Logo marquee — tiny boxes + company names (exactly like your snippet) */
function LogoMarquee({ className = "" }: { className?: string }) {
  const logos = ["Nova", "Aegis", "Nimbus", "Helix", "Orion", "Vertex"];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex gap-10 whitespace-nowrap animate-[marquee_18s_linear_infinite] opacity-70">
        {Array.from({ length: 2 }).map((_, loop) =>
          logos.map((n, i) => (
            <div key={`${loop}-${i}`} className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg animate-gradient-x" />
              <span className="text-sm font-semibold">{n}</span>
            </div>
          ))
        )}
      </div>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}
