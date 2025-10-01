"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function TicketsPage() {
  const router = useRouter();

  async function startCheckout(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const email = String(formData.get("email") || "");
	if (!email) return;
	const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL}/api/registrations`, {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },
	  body: JSON.stringify({ email }),
	});
	const data = await res.json();
	if (data.url) {
	  router.push(data.url);
	}
  }

  return (
	<div className="max-w-xl">
	  <h1 className="text-2xl font-bold mb-2">Tickets</h1>
	  <p className="text-gray-medium mb-4">Purchase your summit pass.</p>
	  <form onSubmit={startCheckout} className="card space-y-3">
		<div>
		  <label className="text-sm font-medium">Email for receipt</label>
		  <input name="email" type="email" required className="w-full border rounded-md px-3 py-2" />
		</div>
		<button className="px-4 py-2 rounded-md text-white" style={{ backgroundImage: "linear-gradient(90deg,#6B46C1,#8B5CF6)" }}>Checkout</button>
	  </form>
	</div>
  );
}