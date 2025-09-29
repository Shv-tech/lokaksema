import { logger as lga } from "@/lib/logger"


const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID
const GA_API_SECRET = process.env.GA_API_SECRET


export async function ga4Event(clientId: string, name: string, params: Record<string, any> = {}) {
try {
if (!GA_MEASUREMENT_ID || !GA_API_SECRET) return
await fetch(
`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ client_id: clientId, events: [{ name, params }] }),
}
)
} catch (e: any) {
lga.warn({ err: e?.message }, "GA4 event failed")
}
}
// Add these exports
export type Metric = {
  label: string
  value: number
  target?: number
  percent: number
}

export function buildMetric(label: string, value: number, target?: number): Metric {
  const percent = target && target > 0 ? Math.min(1, value / target) : 0
  return { label, value, target, percent }
}
// ...existing code...