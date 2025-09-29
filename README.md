# Lokaksema 2026

A full-stack Next.js application for managing the Lokaksema 2026 technology summit. It includes a marketing site, attendee dashboard, sponsor portal, and admin tools.

## Getting Started

1. Install dependencies with your preferred package manager. We recommend pnpm.
   `ash
   pnpm install
   `
2. Copy .env.example to .env and update the secrets.
3. Ensure PostgreSQL is running and accessible at DATABASE_URL.
4. Run database migrations and seed data:
   `ash
   pnpm prisma migrate dev
   pnpm ts-node --compiler-options '{"module":"commonjs"}' prisma/seed.ts
   `
5. Start the development server:
   `ash
   pnpm dev
   `

## Available Scripts

- pnpm dev – start the Next.js development server.
- pnpm build – create a production build.
- pnpm start – run the production server.
- pnpm lint – run ESLint.
- pnpm test – execute unit tests with Vitest.
- pnpm test:e2e – run Playwright end-to-end tests.
- pnpm prisma:migrate – apply Prisma migrations.
- pnpm prisma:studio – open Prisma Studio.

## Tooling

- **Next.js 14** with the App Router and React Server Components.
- **Tailwind CSS** for styling.
- **Prisma** ORM with PostgreSQL.
- **NextAuth.js** for authentication.
- **Stripe** for payments.
- **Resend** for transactional emails.

## Project Structure

Refer to the provided tree in the task description for a full breakdown of directories.

