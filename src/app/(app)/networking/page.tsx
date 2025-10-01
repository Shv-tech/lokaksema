'use client';

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"


type User = {
  id: string;
  email: string;
  firstName?: string | null;
  title?: string | null;
  organization?: string | null;
  // add other fields as needed
};

export default async function NetworkingPage() {
  const session = await auth();
  // You need to fetch peers from your database or API
  const peers: User[] = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      title: true,
      organization: true,
    },
  });

  return (
    <div>
      <p className="text-gray-medium">Discover attendees and potential collaborators.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {peers.map((u: User) => (
          <div key={u.id} className="p-4 border rounded-xl">
            <div className="font-semibold">{u.firstName || u.email}</div>
            <div className="text-sm text-gray-medium">{[u.title, u.organization].filter(Boolean).join(" • ")}</div>
            <button className="mt-3 px-3 py-2 rounded-md border">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}