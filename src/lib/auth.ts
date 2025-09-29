import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import LinkedIn from "next-auth/providers/linkedin"
import AzureAD from "next-auth/providers/azure-ad"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { logger } from "@/lib/logger"


export const authConfig = {
adapter: PrismaAdapter(prisma),
session: { strategy: "database" as const },
trustHost: true,
providers: [
Google({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
}),
LinkedIn({
  clientId: process.env.LINKEDIN_CLIENT_ID || "",
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "",
}),
AzureAD({
  clientId: process.env.AZURE_AD_CLIENT_ID || "",
  clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "",
}),
Credentials({
name: "Email & Password",
credentials: {
email: { label: "Email", type: "email" },
password: { label: "Password", type: "password" },
},
async authorize(creds) {
if (!creds?.email || !creds?.password) return null
const user = await prisma.user.findUnique({ where: { email: creds.email } })
if (!user?.passwordHash) return null
const ok = await bcrypt.compare(String(creds.password), String(user.passwordHash))
return ok ? { id: user.id, email: user.email, name: user.firstName || user.email } : null
},
}),
],
callbacks: {
async session({ session, user }: { session: any; user?: any }) {
if (session?.user && user) {
  (session.user as any).id = (user as any).id
  ;(session.user as any).role = (user as any).role
}
return session
},
async signIn(params: { user: any; account?: any }) {
const { user, account } = params
logger.info({ type: "auth", event: "sign_in", provider: account?.provider, userId: (user as any)?.id })
return true
},
},
}


export const { auth, handlers, signIn, signOut } = NextAuth(authConfig)