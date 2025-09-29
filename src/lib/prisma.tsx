import { PrismaClient } from "@prisma/client"
import pino from "pino"

// Logger instance for Prisma
const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport:
    process.env.NODE_ENV === "development" && process.env.LOG_PRETTY === "true"
      ? { target: "pino-pretty", options: { colorize: true } }
      : undefined,
})

// Extend Prisma with logging middleware
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: [
      { emit: "event", level: "query" },
      { emit: "stdout", level: "error" },
      { emit: "stdout", level: "warn" },
    ],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Attach query event logging
prisma.$on("query", (e: { query: any; params: any; duration: any }) => {
  logger.debug({
    query: e.query,
    params: e.params,
    duration: e.duration,
  }, "Prisma query executed")
})

export default prisma