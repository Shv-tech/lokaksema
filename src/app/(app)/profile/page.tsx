import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"


export const dynamic = "force-dynamic"


async function saveProfile(formData: FormData) {
"use server"
const session = await auth()
if (!session?.user?.email) return
const firstName = String(formData.get("firstName") || "")
const lastName = String(formData.get("lastName") || "")
const organization = String(formData.get("organization") || "")
const title = String(formData.get("title") || "")
await prisma.user.update({ where: { email: session.user.email }, data: { firstName, lastName, organization, title } })
}


export default async function ProfilePage() {
const session = await auth()
const user = session?.user
const dbUser = user?.email ? await prisma.user.findUnique({ where: { email: user.email } }) : null


return (
<div className="max-w-xl">
<h1 className="text-2xl font-bold mb-2">Profile</h1>
<form action={saveProfile} className="card space-y-3">
<div>
<label className="text-sm font-medium">First name</label>
<input name="firstName" defaultValue={dbUser?.firstName || ""} className="w-full border rounded-md px-3 py-2" />
</div>
<div>
<label className="text-sm font-medium">Last name</label>
<input name="lastName" defaultValue={dbUser?.lastName || ""} className="w-full border rounded-md px-3 py-2" />
</div>
<div>
<label className="text-sm font-medium">Organization</label>
<input name="organization" defaultValue={dbUser?.organization || ""} className="w-full border rounded-md px-3 py-2" />
</div>
<div>
<label className="text-sm font-medium">Title</label>
<input name="title" defaultValue={dbUser?.title || ""} className="w-full border rounded-md px-3 py-2" />
</div>
<button className="px-4 py-2 rounded-md text-white" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}}>Save</button>
</form>
</div>
)
}