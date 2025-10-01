"use client"


import { useState } from "react"


export default function SponsorPortalPage() {
const [file, setFile] = useState<File | null>(null)
const [sponsorId, setSponsorId] = useState<string>("")
const [url, setUrl] = useState<string>("")


async function uploadLogo(e: React.FormEvent) {
e.preventDefault()
if (!file) return
const fd = new FormData()
fd.append("file", file)
if (sponsorId) fd.append("sponsorId", sponsorId)
const res = await fetch("/api/sponsors/logo", { method: "POST", body: fd })
const data = await res.json()
if (data.url) setUrl(data.url)
}


return (
<div className="max-w-xl">
<h1 className="text-2xl font-bold mb-2">Sponsor Assets</h1>
<form onSubmit={uploadLogo} className="card space-y-3">
<div>
<label className="text-sm font-medium">Sponsor ID (optional)</label>
<input value={sponsorId} onChange={(e)=>setSponsorId(e.target.value)} className="w-full border rounded-md px-3 py-2" />
</div>
<div>
<label className="text-sm font-medium">Logo file</label>
<input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files?.[0] || null)} />
</div>
<button className="px-4 py-2 rounded-md text-white" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}}>Upload</button>
{url && (
<div className="text-sm">Uploaded: <a className="text-purple-deep" href={url}>{url}</a></div>
)}
</form>
</div>
)
}