import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { can } from "@/lib/rbac"
import { z } from "zod"


export async function GET(req: Request) {
const url = new URL(req.url)
const q = url.searchParams.get("q") || undefined
const country = url.searchParams.get("country") || undefined
const org = url.searchParams.get("org") || undefined


const where: any = {}
if (q) where.OR = [
{ fullName: { contains: q, mode: "insensitive" } },
{ bio: { contains: q, mode: "insensitive" } },
{ organization: { contains: q, mode: "insensitive" } },
]
if (country) where.country = { equals: country, mode: "insensitive" }
if (org) where.organization = { contains: org, mode: "insensitive" }


const speakers = await prisma.speaker.findMany({ where, orderBy: { fullName: "asc" } })
return NextResponse.json({ speakers })
}


const speakerSchema = z.object({
fullName: z.string().min(3),
title: z.string().optional(),
organization: z.string().optional(),
country: z.string().optional(),
headshotUrl: z.string().url().optional(),
bio: z.string().optional(),
socials: z.record(z.string()).optional(),
})


export async function POST(req: Request) {
const session = await auth()
const role = (session?.user as any)?.role as string | undefined
if (!can.manageAdmin(role)) return NextResponse.json({ error: "forbidden" }, { status: 403 })


const json = await req.json().catch(() => ({}))
const parsed = speakerSchema.safeParse(json)
if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })


const created = await prisma.speaker.create({ data: parsed.data })
return NextResponse.json({ id: created.id })
}