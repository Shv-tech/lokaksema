import { prisma } from "@/lib/prisma"


export const dynamic = "force-dynamic"


async function createSpeaker(formData: FormData) {
"use server"
const payload = {
fullName: String(formData.get("fullName") || ""),
title: String(formData.get("title") || ""),
organization: String(formData.get("organization") || ""),
country: String(formData.get("country") || ""),
headshotUrl: String(formData.get("headshotUrl") || ""),
}
await fetch(`${process.env.APP_URL}/api/speakers`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
}


type Speaker = {
  id: string;
  fullName: string;
  title: string | null;
  organization: string | null;
  country: string | null;
  headshotUrl: string | null;
};

export default async function AdminSpeakersPage() {
const speakers: Speaker[] = await prisma.speaker.findMany({ orderBy: { fullName: "asc" } })
return (
<div className="max-w-3xl">
<h1 className="text-2xl font-bold mb-4">Speakers</h1>
<form action={createSpeaker} className="card grid gap-3">
<input name="fullName" placeholder="Full name" className="border rounded-md px-3 py-2" />
<div className="grid grid-cols-2 gap-3">
<input name="title" placeholder="Title" className="border rounded-md px-3 py-2" />
<input name="organization" placeholder="Organization" className="border rounded-md px-3 py-2" />
</div>
<div className="grid grid-cols-2 gap-3">
<input name="country" placeholder="Country" className="border rounded-md px-3 py-2" />
<input name="headshotUrl" placeholder="Headshot URL" className="border rounded-md px-3 py-2" />
</div>
<button className="px-4 py-2 rounded-md text-white self-start" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}}>Create</button>
</form>


<div className="mt-6 grid md:grid-cols-2 gap-3">
{speakers.map((sp) => (
<div key={sp.id} className="p-3 border rounded-md">
<div className="font-semibold">{sp.fullName}</div>
<div className="text-sm text-gray-medium">{[sp.title, sp.organization].filter(Boolean).join(" • ")}</div>
</div>
))}
</div>
</div>
)
}