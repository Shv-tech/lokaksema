import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { waitlistSchema } from "@/lib/validators"
import { renderEmail, sendMail } from "@/lib/email"
import { withLog } from "../../../lib/withlog"
// Update the import path if the file is located elsewhere, e.g.:
import WaitlistWelcome from "../../../.././emails/WaitlistWelcome"
// Or create the file at src/emails/WaitlistWelcome.tsx if it does not exist.


async function post(req: Request) {
const body = await req.json().catch(() => ({}))
const parsed = waitlistSchema.safeParse(body)
if (!parsed.success) {
return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
}


const { email, ...rest } = parsed.data
const entry = await prisma.waitlist.upsert({
where: { email },
update: { ...rest },
create: { email, ...rest },
})


// Simple priority score example
const score = (rest.role?.toLowerCase().includes("ceo") ? 20 : 0) + (rest.organization ? 5 : 0)
await prisma.waitlist.update({ where: { id: entry.id }, data: { score } })


// Send welcome email (best-effort)
try {
const html = renderEmail(WaitlistWelcome({ name: rest.firstName || "there" } as any))
await sendMail(email, "Welcome to Lokasema 2026", html)
} catch {}


return NextResponse.json({ ok: true, id: entry.id })
}


export const POST = withLog("waitlist_post", post)