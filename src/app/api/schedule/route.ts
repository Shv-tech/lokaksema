import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { can } from "@/lib/rbac"
import { toICS } from "@/lib/calendar"
import { z } from "zod"


export async function GET(req: Request) {
const url = new URL(req.url)
const day = url.searchParams.get("day") // YYYY-MM-DD
const type = url.searchParams.get("type") as any // SessionType
const q = url.searchParams.get("q") || undefined
const includeSpeakers = url.searchParams.get("includeSpeakers") === "1"


// ICS export for a single session: /api/schedule?ics=1&id=...
if (url.searchParams.get("ics") === "1") {
const id = url.searchParams.get("id")
if (!id) return NextResponse.json({ error: "id required for ics" }, { status: 400 })
const s = await prisma.agendaSession.findUnique({ where: { id }, include: { speakers: true } })
if (!s) return NextResponse.json({ error: "not found" }, { status: 404 })
const ics = toICS({
uid: `session-${s.id}@lokasema2026.com`,
title: s.title,
description: s.description || "",
location: s.room || "",
start: s.startTime,
end: s.endTime,
url: `${process.env.APP_URL}/schedule#${s.id}`,
})
return new Response(ics, {
headers: {
"Content-Type": "text/calendar; charset=utf-8",
"Content-Disposition": `attachment; filename=lokasema-${s.id}.ics`,
},
})
}


const where: any = {}
if (day) {
const start = new Date(`${day}T00:00:00.000Z`)
const end = new Date(`${day}T23:59:59.999Z`)
where.startTime = { gte: start, lte: end }
}
if (type) where.type = type
if (q) {
where.OR = [
{ title: { contains: q, mode: "insensitive" } },
{ description: { contains: q, mode: "insensitive" } },
{ room: { contains: q, mode: "insensitive" } },
{ track: { contains: q, mode: "insensitive" } },
]
}


const sessions = await prisma.agendaSession.findMany({
where,
orderBy: { startTime: "asc" },
include: includeSpeakers ? { speakers: true } : undefined,
})


return NextResponse.json({ sessions })
}


const sessionSchema = z.object({
title: z.string().min(3),
description: z.string().optional(),
type: z.enum(["KEYNOTE", "PANEL", "WORKSHOP", "TALK", "NETWORKING", "BREAK"]),
startTime: z.string().datetime(),
endTime: z.string().datetime(),
room: z.string().optional(),
track: z.string().optional(),
capacity: z.number().int().positive().optional(),
speakerIds: z.array(z.string()).optional()
});
