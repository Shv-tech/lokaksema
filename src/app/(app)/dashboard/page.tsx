import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"


export default async function DashboardPage() {
const session = await auth()
const user = session?.user
const [regs, sponsors, queries] = await Promise.all([
prisma.registration.count(),
prisma.sponsor.count(),
prisma.query.count(),
])


return (
<div>
<h1 className="text-3xl font-bold">Welcome, {user?.name || user?.email}</h1>
<p className="text-gray-medium">Here’s a quick overview.</p>


<div className="grid md:grid-cols-3 gap-4 mt-6">
{[
{ k: "Registrations", v: regs },
{ k: "Sponsors", v: sponsors },
{ k: "Queries", v: queries },
].map((c) => (
<div key={c.k} className="card">
<div className="text-sm text-gray-medium">{c.k}</div>
<div className="text-3xl font-bold">{c.v}</div>
</div>
))}
</div>
</div>
)
}