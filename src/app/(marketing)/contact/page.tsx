"use client"


export default function ContactPage() {
return (
<div className="mx-auto max-w-2xl px-4 py-16">
<h1 className="text-4xl font-bold mb-4">Contact us</h1>
<form className="card" onSubmit={(e)=>{
e.preventDefault()
const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement))
fetch("/api/query", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({
category: data.category || "GENERAL",
subject: data.subject,
message: data.message,
})}).then(r=> r.ok ? alert("Thanks! We'll get back to you.") : alert("Failed to send."))
}}>
<div className="grid gap-3">
<label className="text-sm font-medium">Category</label>
<select name="category" className="border rounded-md px-3 py-2">
<option>GENERAL</option>
<option>TECHNICAL</option>
<option>SPONSORSHIP</option>
<option>MEDIA</option>
<option>ACCESSIBILITY</option>
<option>PAYMENT</option>
<option>TRAVEL</option>
<option>NETWORKING</option>
</select>
<label className="text-sm font-medium mt-2">Subject</label>
<input name="subject" required className="border rounded-md px-3 py-2" />
<label className="text-sm font-medium mt-2">Message</label>
<textarea name="message" required rows={6} className="border rounded-md px-3 py-2" />
<button className="mt-3 px-4 py-2 rounded-md text-white self-start" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}}>Send</button>
</div>
</form>
</div>
)
}