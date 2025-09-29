import sg from "@sendgrid/mail"
import nodemailer from "nodemailer"
import { render } from "@react-email/render"
import type { ReactElement } from "react"
import { logger as baseLogger } from "@/lib/logger"


const log = baseLogger.child({ mod: "email" })


if (process.env.SENDGRID_API_KEY) sg.setApiKey(process.env.SENDGRID_API_KEY)


export async function sendMail(to: string, subject: string, html: string) {
const from = process.env.SENDGRID_FROM_EMAIL || process.env.SMTP_FROM_EMAIL
if (!from) throw new Error("No FROM email configured")


if (process.env.SENDGRID_API_KEY) {
try {
await sg.send({ to, from, subject, html })
log.info({ to, subject, via: "sendgrid" }, "Email dispatched")
return
} catch (e: any) {
log.warn({ err: e?.message }, "SendGrid failed, falling back to SMTP")
}
}


const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: Number(process.env.SMTP_PORT || 587),
secure: false,
auth: process.env.SMTP_USER
? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
: undefined,
})


await transporter.sendMail({ to, from: from!, subject, html })
log.info({ to, subject, via: "smtp" }, "Email dispatched")
}


export function renderEmail(component: ReactElement) {
return render(component)
}