"use client";

import MagneticButton from "@/components/ui/MagneticButton";

/** Simple, text-only hero. No cards/radar/code. */
export default function CyberHero() {
  return (
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
            <MagneticButton href="/schedule" className="btn btn-outline">Explore Sessions</MagneticButton>
          </div>

          <div className="mt-10 opacity-80 text-sm">
            Trusted by leaders in research, industry, and policy.
          </div>
          <LogoMarquee className="mt-4" />
        </div>
      </div>
    </section>
  );
}

/* Logo marquee (kept from before) */
export function LogoMarquee({ className = "" }: { className?: string }) {
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
