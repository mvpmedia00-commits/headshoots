import Link from "next/link"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-[#c4a574] text-[#14110e] hover:bg-[#d4b98a]",
  outline: "border border-white/25 bg-black/30 text-[#f4ede1] hover:bg-white/10",
} as const

export function CtaLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof variants }) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
