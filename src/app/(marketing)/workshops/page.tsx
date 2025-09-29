export default function WorkshopsPage() {
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-4">Workshops</h1>
<p className="text-gray-700 max-w-3xl">Hands‑on technical sessions with clear prerequisites and limited capacity. Registration opens soon.</p>
<div className="mt-8 grid md:grid-cols-2 gap-6">
{[1,2,3,4].map((i)=> (
<div key={i} className="card">
<div className="font-semibold">Workshop #{i}</div>
<p className="text-gray-medium">Beginner → Advanced tracks. Bring a laptop.</p>
<div className="mt-3 flex gap-2">
<a className="px-3 py-2 rounded-md text-white" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}} href="/ (auth)/sign-in">Join waitlist</a>
<a className="px-3 py-2 rounded-md border" href="/schedule">See schedule</a>
</div>
</div>
))}
</div>
</div>
)
}
