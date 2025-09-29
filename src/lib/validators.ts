import { z } from "zod"


export const waitlistSchema = z.object({
email: z.string().email(),
firstName: z.string().min(1).optional(),
lastName: z.string().optional(),
organization: z.string().optional(),
role: z.string().optional(),
interests: z.string().optional(),
motivation: z.string().optional(),
})


export const sponsorApplySchema = z.object({
companyName: z.string().min(2),
tier: z.enum(["PLATINUM", "GOLD", "SILVER", "BRONZE", "CUSTOM"]),
contactName: z.string().min(2),
contactEmail: z.string().email(),
description: z.string().optional(),
websiteUrl: z.string().url().optional(),
})


export const registrationSchema = z.object({
email: z.string().email(),
priceId: z.string().optional(),
})


export type WaitlistInput = z.infer<typeof waitlistSchema>
export type SponsorApplyInput = z.infer<typeof sponsorApplySchema>
export type RegistrationInput = z.infer<typeof registrationSchema>