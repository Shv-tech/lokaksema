import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import { logger } from "@/lib/logger"


export async function POST(req: Request) {
const sig = (await headers()).get("stripe-signature") as string
const whSecret = process.env.STRIPE_WEBHOOK_SECRET
const rawBody = await req.text() // Stripe requires the raw body string


let event: any
try {
if (!whSecret) throw new Error("Missing STRIPE_WEBHOOK_SECRET")
event = stripe.webhooks.constructEvent(rawBody, sig, whSecret)
} catch (err: any) {
logger.error({ err: err.message }, "Stripe webhook signature verification failed")
return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
}


try {
switch (event.type) {
case "checkout.session.completed": {
const s = event.data.object as import("stripe").Stripe.Checkout.Session
if (s.customer_email) {
// Mark registration as paid (create record if necessary)
const user = await prisma.user.upsert({
where: { email: s.customer_email },
create: { email: s.customer_email },
update: {},
})
await prisma.registration.create({
data: { userId: user.id, ticketType: "GENERAL", paymentStatus: "PAID" },
})
}
break
}
default:
logger.info({ type: event.type }, "Unhandled Stripe event type")
}
} catch (e: any) {
logger.error({ err: e.message }, "Failed processing Stripe webhook")
return NextResponse.json({ received: true, error: e.message })
}


return NextResponse.json({ received: true })
}


export const config = { api: { bodyParser: false } } as any