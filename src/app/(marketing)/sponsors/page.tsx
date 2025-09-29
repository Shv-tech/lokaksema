export default function SponsorsPage() {
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-4">Sponsors & Partners</h1>
<p className="text-gray-700 max-w-3xl">Explore tiered opportunities from Bronze to Platinum and custom partnerships that align your brand with responsible AI.</p>
<div className="mt-8 grid md:grid-cols-2 gap-6">
{[
{ tier: "PLATINUM", perks: ["Prime logo placement","2 speaking slots","Premium 20x20 booth","10 complimentary passes"] },
{ tier: "GOLD", perks: ["Logo on materials","Panel participation","10x15 booth","5 passes"] },
{ tier: "SILVER", perks: ["Website logo","Networking table","3 passes"] },
{ tier: "BRONZE", perks: ["Program listing","1 pass"] },
].map((t)=> (
<div key={t.tier} className="card">
<div className="text-xl font-semibold">{t.tier}</div>
<ul className="mt-2 list-disc ml-5 text-gray-700">
{t.perks.map(p=> <li key={p}>{p}</li>)}
</ul>
<a href="/ (auth)/sign-in" className="mt-4 inline-block px-4 py-2 rounded-md text-white" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}}>Apply to sponsor</a>
</div>
))}
</div>
</div>
)
}