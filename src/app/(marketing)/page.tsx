"use client";

import { formatNumber } from "@/lib/utils/format";
import React from "react";

type Session = {
  id: string | number;
  startTime: string | number | Date;
  title: string;
  type: string;
  description: string;
};

const sessions: Session[] = []; // Replace with your actual sessions data

export default function MarketingPage() {
  return (
	<>
	  <section>
		<div className="grid md:grid-cols-3 gap-6">
		  {sessions.map((s: any) => (
			<div key={s.id} className="card">
			  <div className="text-sm text-gray-medium">
				{new Date(s.startTime).toLocaleString()}
			  </div>
			  <div className="font-semibold mt-1">{s.title}</div>
			  <div className="text-sm text-gray-600 mt-1">{s.type}</div>
			  <div className="mt-2 text-sm text-gray-medium line-clamp-3">
				{s.description}
			  </div>
			</div>
		  ))}
		  {!sessions.length && (
			<div className="text-gray-medium">
			  Schedule will be announced soon.
			</div>
		  )}
		</div>
	  </section>

	  {/* Sponsors Strip */}
	  <section
		className="py-12"
		style={{
		  backgroundImage: "linear-gradient(180deg,#F8FAFC,#E2E8F0)",
		}}
	  >
		<div className="mx-auto max-w-7xl px-4">
		  <div className="mb-6 flex items-center justify-between">
			<h3 className="text-xl font-semibold">Sponsors</h3>
			<a href="/sponsors" className="text-purple-deep">
			  Become a sponsor
			</a>
		  </div>
		  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
			{[
			  "/images/sponsors/1.svg",
			  "/images/sponsors/2.svg",
			  "/images/sponsors/3.svg",
			  "/images/sponsors/4.svg",
			  "/images/sponsors/5.svg",
			  "/images/sponsors/6.svg",
			].map((src, i) => (
			  <div
				key={i}
				className="h-12 bg-white border rounded-md flex items-center justify-center"
			  >
				<img src={src} alt="Sponsor" className="h-6 opacity-70" />
			  </div>
			))}
		  </div>
		</div>
	  </section>

	  {/* Waitlist / Newsletter */}
	  <section
		id="waitlist"
		className="mx-auto max-w-3xl px-4 py-16"
	  >
		<div className="card">
		  <h3 className="text-2xl font-bold">Get updates</h3>
		  <p className="text-gray-medium">
			Join the waitlist for early announcements and pricing.
		  </p>
		  <WaitlistForm />
		</div>
	  </section>
	</>
  );
}

function WaitlistForm() {
  return (
	<form
	  className="mt-4 grid gap-3 sm:grid-cols-3"
	  action="/api/waitlist"
	  method="post"
	  onSubmit={(e) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const data = Object.fromEntries(new FormData(form));
		fetch("/api/waitlist", {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		}).then((r) =>
		  r.ok
			? alert("Thanks! You're on the list.")
			: alert("Something went wrong.")
		);
	  }}
	>
	  <input
		name="firstName"
		placeholder="First name"
		className="border rounded-md px-3 py-2"
	  />
	  <input
		name="email"
		type="email"
		required
		placeholder="Email"
		className="border rounded-md px-3 py-2"
	  />
	  <button
		className="px-4 rounded-md text-white"
		style={{
		  backgroundImage: "linear-gradient(90deg,#6B46C1,#8B5CF6)",
		}}
	  >
		Join waitlist
	  </button>
	</form>
  );
}