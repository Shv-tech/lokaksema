export default function VerifyEmailPage() {
return (
<div className="text-center space-y-3">
<h1 className="text-2xl font-bold">Verify your email</h1>
<p className="text-gray-medium">We sent you a verification link. Please check your inbox to finish setting up your account.</p>
<a href="/ (auth)/sign-in" className="inline-block mt-2 text-purple-deep">Return to sign in</a>
</div>
)
}