import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"


export async function POST(req: Request) {
const json = await req.json().catch(() => ({}))
const { category = "GENERAL", subject = "", message = "", userId, priority = 0 } = json


if (!subject || !message) {
return NextResponse.json({ error: "subject and message required" }, { status: 400 })
}


const q = await prisma.query.create({
data: { category, subject, message, priority, userId },
})


return NextResponse.json({ id: q.id })
}