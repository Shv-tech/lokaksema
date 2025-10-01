import { clsx, type ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

export function formatNumber(n: number) {
  return new Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
}

// ...existing code...

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ...existing code...

export function formatDate(d: Date | string) {
  const date = typeof d === "string" ? new Date(d) : d;
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(date);
}
