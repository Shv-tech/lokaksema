import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"
import { registrationSchema } from "@/lib/validators"


export async function POST(req: Request) {
const body = await req.json().catch(() => ({}))
const parsed = registrationSchema.safeParse(body)
if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })


const { email, priceId } = parsed.data
const session = await stripe.checkout.sessions.create({
mode: "payment",
customer_email: email,
line_items: [{ price: String(priceId || process.env.STRIPE_PRICE_GENERAL), quantity: 1 }],
success_url: `${process.env.APP_URL}/dashboard?paid=1`,
cancel_url: `${process.env.APP_URL}/?canceled=1`,
})


return NextResponse.json({ url: session.url })
}