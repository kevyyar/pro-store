import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object into regular js object
export function convertToRegularObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// format number to 2 decimal places
export function formatNumberToDecimal(value: number): string {
  const [integer, decimal] = value.toString().split(".");
  return decimal ? `${integer}.${decimal.padEnd(2, "0")}` : `${integer}.00`;
}
