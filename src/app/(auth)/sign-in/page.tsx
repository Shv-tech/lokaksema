"use client"


import { useState, FormEvent } from "react"
import { signIn } from "next-auth/react"
import { Loader2 } from "lucide-react"


export default function SignInPage() {
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)


async function onSubmit(e: FormEvent<HTMLFormElement>) {
e.preventDefault()
setError(null)
setLoading(true)
const form = new FormData(e.currentTarget)
const email = String(form.get("email") || "")
const password = String(form.get("password") || "")


const res = await signIn("credentials", { email, password, redirect: false })
setLoading(false)
if (res?.ok) {
window.location.href = "/dashboard"
} else {
setError(res?.error || "Invalid credentials")
}
}


return (
<div>
<h1 className="text-2xl font-bold mb-1">Sign in</h1>
<p className="text-sm text-gray-medium mb-6">Welcome back. Access your summit dashboard.</p>


<form onSubmit={onSubmit} className="space-y-4">
<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input name="email" type="email" required className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-deep" />
</div>
<div>
<label className="block text-sm font-medium mb-1">Password</label>
<input name="password" type="password" required className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-deep" />
</div>
{error && <p className="text-sm text-error">{error}</p>}
<button disabled={loading} className="btn-primary w-full flex items-center justify-center">
{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign in"}
</button>
</form>


<div className="my-6 flex items-center gap-2 text-xs text-gray-medium">
<div className="h-px bg-gray-200 flex-1" />
<span>or continue with</span>
<div className="h-px bg-gray-200 flex-1" />
</div>


<div className="grid grid-cols-1 gap-3">
<button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="w-full border rounded-md px-4 py-2 font-medium">Google</button>
<button onClick={() => signIn("linkedin", { callbackUrl: "/dashboard" })} className="w-full border rounded-md px-4 py-2 font-medium">LinkedIn</button>
<button onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })} className="w-full border rounded-md px-4 py-2 font-medium">Microsoft</button>
</div>


<div className="mt-6 text-center text-sm">
<a href="/ (auth)/reset-password" className="text-purple-deep">Forgot password?</a>
</div>


<div className="mt-4 text-center text-sm">
New here? <a href="/ (auth)/sign-up" className="text-purple-deep font-medium">Create an account</a>
</div>
</div>
)
}