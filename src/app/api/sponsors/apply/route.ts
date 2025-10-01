import { NextResponse } from "next/server"
import { sponsorApplySchema } from "@/lib/validators"
import { prisma } from "@/lib/prisma"


export async function POST(req: Request) {
const body = await req.json().catch(() => ({}))
const parsed = sponsorApplySchema.safeParse(body)
if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })


}