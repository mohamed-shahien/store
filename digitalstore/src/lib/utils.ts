import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatePrice(
  price: number | string ,
  options: {
    currency?: "AED" | "SAR" | "EGP" | "USD " ,
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  // إذا لم يتم توفير currency أو notation في options، سيتم استخدام القيم الافتراضية "USD" و "compact" على التوالي.
  const {currency = 'USD' , notation ='compact' } = options
  const numericPrice = typeof price === "string" ? parseFloat(price) : price
  return new Intl.NumberFormat('en-us' , {
    style : 'currency',
    currency,
    notation,
    maximumSignificantDigits: 2,
  }).format(numericPrice)
}

// https://chatgpt.com/share/dc5bf39b-9106-455d-9204-a9762b2d8b92