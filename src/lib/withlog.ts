import { logger as l } from "@/lib/logger"


export function withLog<T extends (...args: any[]) => any>(name: string, handler: T) {
return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
const start = Date.now()
const req = args[0] as Request
const url = new URL(req.url)


try {
const res = await handler(...args)
const ms = Date.now() - start
l.info({ type: "api", name, path: url.pathname, status: (res as any)?.status ?? 200, ms })
return res
} catch (err: any) {
const ms = Date.now() - start
l.error({ type: "api", name, path: url.pathname, ms, error: err?.message })
throw err
}
}
}