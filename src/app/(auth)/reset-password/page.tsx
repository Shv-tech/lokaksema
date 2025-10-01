"use client"


import { useState } from "react"


export default function ResetPasswordPage() {
const [sent, setSent] = useState(false)


return (
<div>
<h1 className="text-2xl font-bold mb-1">Reset password</h1>
<p className="text-sm text-gray-medium mb-6">We'll email you a link to reset your password.</p>


{sent ? (
<div className="rounded-md bg-green-50 text-green-700 p-3 text-sm">If an account exists for that email, you'll receive a link shortly.</div>
) : (
<form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input name="email" type="email" required className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-deep" />
</div>
<button className="btn-primary w-full">Send reset link</button>
</form>
)}


<div className="mt-4 text-center text-sm">
<a href="/ (auth)/sign-in" className="text-purple-deep">Back to sign in</a>
</div>
</div>
)
}