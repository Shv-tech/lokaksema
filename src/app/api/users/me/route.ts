import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
const session = await auth()
if (!session?.user?.email) return NextResponse.json({ user: null }, { status: 401 })


const user = await prisma.user.findUnique({ where: { email: session.user.email } })
return NextResponse.json({ user })
}