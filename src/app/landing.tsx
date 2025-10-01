/* src/app/landing/page.tsx */
"use client";
import { useState } from "react";
import "../../styles/globals.css" 

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: connect this endpoint with your Google Sheets API
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="relative hero-gradient flex flex-col justify-center flex-1">
        <div className="blur-blob" />
        <div className="container-x relative z-10 py-20 md:py-28 text-center">
          <p className="eyebrow">Responsible AI for Humanity</p>
          <h1 className="section-title mt-3 text-gradient">
            Lokākṣema 2026
          </h1>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            The world’s premier summit uniting researchers, leaders, and innovators
            to ensure AI serves people and society.
          </p>

          {/* WAITLIST FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary w-full sm:w-auto"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-3 text-sm text-green-600">🎉 You’re on the list!</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">Something went wrong. Try again.</p>
          )}
        </div>
      </section>

      {/* MISSION */}
      <section className="container-x py-16 md:py-24 text-center">
        <h2 className="section-title">Our <span className="text-gradient">Mission</span></h2>
        <p className="section-subtitle mt-4 max-w-3xl mx-auto">
          Lokākṣema — meaning “well-being of the world” — is a global gathering of thought leaders,
          researchers, policy makers, and innovators to chart a course for responsible AI that
          protects humanity, fosters inclusion, and drives progress for all.
        </p>
      </section>

      {/* CTA BAND */}
      <section className="container-x py-12 md:py-16">
        <div className="cta-gradient p-8 md:p-10 shadow-soft text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Be the First to Experience Lokākṣema 2026
          </h3>
          <p className="section-subtitle mt-2">
            Secure your early access and stay updated with the latest announcements.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/" className="btn btn-outline">Back to Home</a>
            <a href="#mission" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
}
