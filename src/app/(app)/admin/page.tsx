import { auth } from "@/lib/auth"


export default async function AdminHome() {
const session = await auth()
const role = (session?.user as any)?.role
if (!(role === "ADMIN" || role === "ORGANIZER")) return <div>Forbidden</div>
return (
<div>
<h1 className="text-2xl font-bold mb-2">Admin</h1>
<p className="text-gray-medium">Manage sessions, speakers, sponsors, and users.</p>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
{[
{ href: "/admin/sessions", label: "Sessions" },
{ href: "/admin/speakers", label: "Speakers" },
{ href: "/admin/sponsors", label: "Sponsors" },
{ href: "/admin/users", label: "Users" },
].map((c) => (
<a key={c.href} href={c.href} className="card text-center font-semibold hover:shadow">
{c.label}
</a>
))}
</div>
</div>
)
}