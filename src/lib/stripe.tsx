import Stripe from "stripe"


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
apiVersion: "2024-06-20",
})// ...existing code...
export const config = { api: { bodyParser: false } }
// ...existing code...