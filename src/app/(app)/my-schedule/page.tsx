'use client';

async function getSessions() {
const res = await fetch(`${process.env.APP_URL || ""}/api/schedule?includeSpeakers=1`, { cache: "no-store" })
if (!res.ok) return []
const data = await res.json()
return data.sessions || []
}


export default async function MySchedulePage() {
const sessions = await getSessions()
return (
<div>
<h1 className="text-2xl font-bold mb-2">My schedule</h1>
<p className="text-gray-medium mb-4">Bookmarking requires persistence to DB – this demo lists all sessions and provides ICS add.</p>
<div className="space-y-3">
{sessions.map((s: any) => (
<div key={s.id} className="p-4 border rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<div className="font-semibold">{s.title}</div>
<div className="text-sm text-gray-medium">{new Date(s.startTime).toLocaleString()} • {s.type}</div>
</div>
<div className="flex gap-2">
<a className="px-3 py-2 rounded-md border" href={`/api/schedule?ics=1&id=${s.id}`}>Add to Calendar</a>
<button className="px-3 py-2 rounded-md border">Bookmark</button>
</div>
</div>
))}
</div>
</div>
)
}