export const dynamic = "force-static"


async function getSpeakersAll() {
const res = await fetch(`${process.env.APP_URL || ""}/api/speakers`, { next: { revalidate: 300 } })
if (!res.ok) return []
const data = await res.json()
return data.speakers || []
}


export default async function SpeakersPage() {
const speakers = await getSpeakersAll()
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-6">Speakers</h1>
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{speakers.map((sp: any) => (
<div id={sp.id} key={sp.id} className="rounded-xl overflow-hidden border">
<div className="aspect-[4/3] bg-gray-100" style={{backgroundImage:`url(${sp.headshotUrl||"/images/hero-bg.jpg"})`,backgroundSize:"cover",backgroundPosition:"center"}} />
<div className="p-4">
<div className="font-semibold">{sp.fullName}</div>
<div className="text-sm text-gray-medium">{[sp.title, sp.organization].filter(Boolean).join(" · ")}</div>
{sp.bio && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{sp.bio}</p>}
</div>
</div>
))}
{!speakers.length && <div className="text-gray-medium">Speaker lineup coming soon.</div>}
</div>
</div>
)
}