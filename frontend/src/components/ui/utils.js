import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...e) {
  return twMerge(clsx(e));
}
