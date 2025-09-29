export function formatNumber(n: number) {
return new Intl.NumberFormat(undefined, { notation: "compact" }).format(n)
}


export function formatDate(d: Date | string) {
const date = typeof d === "string" ? new Date(d) : d
return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date)
}