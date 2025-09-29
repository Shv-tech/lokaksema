import { z } from "zod"

export const querySchema = z.object({
  query: z.string().min(1, "Query is required"),
  // add more fields if needed, e.g. topK, filters, etc.

  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type QueryInput = z.infer<typeof querySchema>;


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

export const waitlistSchema = z.object({
  email: z.string().email("Valid email is required"),
  firstName: z.string().trim().min(1).optional(),
  lastName: z.string().trim().min(1).optional(),
  role: z.string().trim().optional(),
  organization: z.string().trim().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>
export type SponsorApplyInput = z.infer<typeof sponsorApplySchema>
export type RegistrationInput = z.infer<typeof registrationSchema>