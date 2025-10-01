'use client';

import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export const dynamic = "force-dynamic";

// ✅ async + "use server"
async function createUser(formData: FormData) {
  "use server";
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const firstName = String(formData.get("firstName") || "");
  const lastName = String(formData.get("lastName") || "");

  if (!email || !password) return;

  const passwordHash = await hash(password, 10);
  await prisma.user.create({
    data: { email, passwordHash, firstName, lastName },
  });
}

export default function SignUpPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Create account</h1>
      <p className="text-sm text-gray-medium mb-6">
        Join the Lokasema 2026 Summit community.
      </p>

      <form action={createUser} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">First name</label>
            <input name="firstName" className="w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last name</label>
            <input name="lastName" className="w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" required className="w-full rounded-md border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input name="password" type="password" minLength={8} required className="w-full rounded-md border px-3 py-2" />
          <p className="text-xs text-gray-medium mt-1">Use at least 8 characters.</p>
        </div>

        <button className="btn-primary w-full">Create account</button>
      </form>

      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <a href="/(auth)/sign-in" className="text-purple-deep font-medium">Sign in</a>
      </div>
    </div>
  );
}
