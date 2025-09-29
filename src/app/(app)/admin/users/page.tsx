import { prisma } from "@/lib/prisma"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"


// import type { User } from "@prisma/client"

export default async function AdminUsersPage() {
const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" }, take: 50 })
return (
<div>
<h1 className="text-2xl font-bold mb-4">Users</h1>
<div className="overflow-auto border rounded-xl">
<table className="min-w-full text-sm">
<thead className="bg-gray-50 text-gray-600">
<tr>
<th className="text-left px-3 py-2">Name</th>
<th className="text-left px-3 py-2">Email</th>
<th className="text-left px-3 py-2">Role</th>
<th className="text-left px-3 py-2">Created</th>
</tr>
</thead>
<tbody>
{users.map((u: { id: Key | null | undefined; firstName: any; lastName: any; email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; role: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; createdAt: string | number | Date })=> (
<tr key={u.id} className="border-t">
<td className="px-3 py-2">{[u.firstName, u.lastName].filter(Boolean).join(" ")}</td>
<td className="px-3 py-2">{u.email}</td>
<td className="px-3 py-2">{u.role}</td>
<td className="px-3 py-2">{new Date(u.createdAt).toLocaleString()}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
)
}