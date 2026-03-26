import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsx + tailwind-merge className helper.
 * Keeps conditional class composition readable while preventing duplicate tailwind tokens.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

