async function getAllSessions() {
const res = await fetch(`${process.env.APP_URL || ""}/api/schedule?includeSpeakers=1`, { next: { revalidate: 120 } })
if (!res.ok) return []
const data = await res.json()
return data.sessions || []
}


export default async function SchedulePage() {
const sessions = await getAllSessions()
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-6">Schedule</h1>
<div className="space-y-4">
{sessions.map((s: any) => (
<div key={s.id} className="p-4 border rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<div className="text-sm text-gray-medium">{new Date(s.startTime).toLocaleString()} – {new Date(s.endTime).toLocaleTimeString()}</div>
<div className="font-semibold">{s.title}</div>
<div className="text-sm text-gray-600">{s.type}{s.room?` • ${s.room}`:""}</div>
{s.speakers?.length ? (
<div className="text-sm text-gray-medium mt-1">
{s.speakers.map((sp: any) => sp.fullName).join(", ")}
</div>
) : null}
</div>
<div className="flex gap-2">
<a className="px-3 py-2 rounded-md border" href={`/api/schedule?ics=1&id=${s.id}`}>Add to Calendar</a>
<a className="px-3 py-2 rounded-md text-white" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}} href={`/ (auth)/sign-in`}>Save</a>
</div>
</div>
))}
{!sessions.length && <div className="text-gray-medium">Schedule will be announced soon.</div>}
</div>
</div>
)
}