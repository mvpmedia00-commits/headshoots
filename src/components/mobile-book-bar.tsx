"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileBookBar() {
  const pathname = usePathname()
  if (pathname === "/booking" || pathname === "/contact") return null

  return (
    <div className="fixed inset-x-[var(--frame)] bottom-[var(--frame)] z-40 border-t border-white/10 bg-[#070707]/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href="/booking"
        className="flex h-12 items-center justify-center rounded-full bg-[#c4a574] text-base font-medium text-[#14110e]"
      >
        Book your session
      </Link>
    </div>
  )
}
