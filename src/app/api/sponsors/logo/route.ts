import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { handleUpload } from "@/lib/upload"
import { auth } from "@/lib/auth"
import { can } from "@/lib/rbac"


export async function POST(req: Request) {
const session = await auth()
const role = (session?.user as any)?.role as string | undefined
if (!can.manageAdmin(role)) return NextResponse.json({ error: "forbidden" }, { status: 403 })


const form = await req.formData()
const sponsorId = form.get("sponsorId") as string | null
const result = await handleUpload(form)


if (sponsorId) {
await prisma.sponsor.update({ where: { id: sponsorId }, data: { logoUrl: result.url } })
}


return NextResponse.json({ url: result.url, filename: result.filename, size: result.size })
}