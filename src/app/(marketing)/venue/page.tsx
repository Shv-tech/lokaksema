export default function VenuePage() {
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-4">Venue</h1>
<p className="text-gray-700 max-w-3xl">World‑class venue with accessible facilities, high‑speed Wi‑Fi, and multiple tracks.</p>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="card">
<div className="font-semibold mb-1">Accessibility</div>
<p className="text-gray-medium">Wheelchair access, hearing assistance, reserved seating upon request.</p>
</div>
<div className="card">
<div className="font-semibold mb-1">Travel & Accommodation</div>
<p className="text-gray-medium">Partner hotels and transit options will be listed here.</p>
</div>
</div>
</div>
)
}
