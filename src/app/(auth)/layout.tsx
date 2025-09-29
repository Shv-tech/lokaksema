import type { ReactNode } from "react"
import "../../styles/globals.css"


export default function AuthLayout({ children }: { children: ReactNode }) {
return (
<div className="min-h-screen bg-background flex items-center justify-center p-6" style={{ backgroundImage: "linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)" }}>
<div className="w-full max-w-md rounded-xl shadow-soft bg-white p-8">
<div className="mb-6 text-center">
<a href="/" className="inline-flex items-center gap-2">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="#6B46C1"/>
<path d="M7 13l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<span className="text-xl font-semibold">Lokasema 2026</span>
</a>
<p className="mt-2 text-sm text-gray-medium">Responsible AI for Humanity</p>
</div>
{children}
</div>
</div>
)
}