import type { ReactNode } from "react"
import { auth, signOut } from "@/lib/auth"
import Link from "next/link"
import "../styles/globals.css"


export default async function AppLayout({ children }: { children: ReactNode }) {
const session = await auth()
if (!session?.user) {
return (
<div className="min-h-screen flex items-center justify-center p-10">
<div className="max-w-md text-center">
<h1 className="text-2xl font-bold mb-2">Please sign in</h1>
<p className="text-gray-medium">You need an account to access the dashboard.</p>
<a href="/ (auth)/sign-in" className="mt-4 inline-block px-4 py-2 rounded-md text-white" style={{backgroundImage:"linear-gradient(90deg,#6B46C1,#8B5CF6)"}}>Sign in</a>
</div>
</div>
)
}
const role = (session.user as any).role as string | undefined
return (
<div className="min-h-screen grid md:grid-cols-[240px_1fr]" style={{backgroundImage:"linear-gradient(180deg,#F8FAFC,#E2E8F0)"}}>
<aside className="bg-white border-r p-4">
<Link href="/dashboard" className="flex items-center gap-2 font-semibold mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="#6B46C1"/>
<path d="M7 13l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
Lokasema 2026
</Link>
<nav className="space-y-1 text-sm">
<Link href="/dashboard" className="block px-3 py-2 rounded-md hover:bg-gray-50">Overview</Link>
<Link href="/profile" className="block px-3 py-2 rounded-md hover:bg-gray-50">Profile</Link>
<Link href="/tickets" className="block px-3 py-2 rounded-md hover:bg-gray-50">Tickets</Link>
<Link href="/my-schedule" className="block px-3 py-2 rounded-md hover:bg-gray-50">My Schedule</Link>
<Link href="/networking" className="block px-3 py-2 rounded-md hover:bg-gray-50">Networking</Link>
<Link href="/sponsors" className="block px-3 py-2 rounded-md hover:bg-gray-50">Sponsors</Link>
{(role === "ADMIN" || role === "ORGANIZER") && (
<>
<div className="mt-4 text-xs uppercase text-gray-medium px-3">Admin</div>
<Link href="/admin" className="block px-3 py-2 rounded-md hover:bg-gray-50">Admin Home</Link>
<Link href="/admin/sessions" className="block px-3 py-2 rounded-md hover:bg-gray-50">Sessions</Link>
<Link href="/admin/speakers" className="block px-3 py-2 rounded-md hover:bg-gray-50">Speakers</Link>
<Link href="/admin/sponsors" className="block px-3 py-2 rounded-md hover:bg-gray-50">Sponsors</Link>
<Link href="/admin/users" className="block px-3 py-2 rounded-md hover:bg-gray-50">Users</Link>
</>
)}
</nav>
<form action={async () => { "use server"; await signOut({ redirectTo: "/" }) }} className="mt-8">
<button className="w-full px-3 py-2 rounded-md border">Sign out</button>
</form>
</aside>
<main className="p-6">{children}</main>
</div>
)
}