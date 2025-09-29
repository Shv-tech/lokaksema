export function formatNumber(n: number) {
return new Intl.NumberFormat(undefined, { notation: "compact" }).format(n)
}
// ...existing code...
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// ...existing code...

export function formatDate(d: Date | string) {
const date = typeof d === "string" ? new Date(d) : d
return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date)
}