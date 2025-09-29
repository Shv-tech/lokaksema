import pino from "pino"


const level = (process.env.LOG_LEVEL || "info") as pino.LevelWithSilent
const pretty = process.env.LOG_PRETTY === "true" && process.env.NODE_ENV !== "production"


export const logger = pino({
  level,
  transport: pretty
	? { target: "pino-pretty", options: { translateTime: "SYS:standard", ignore: "pid,hostname" } }
	: undefined,
})


export function child(bindings: Record<string, unknown>) {
return logger.child(bindings)
}