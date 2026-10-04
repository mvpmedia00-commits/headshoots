"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { photoNav } from "@/data/photo"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-[var(--frame)] z-40 border-b border-white/10 bg-[#070707]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-heading text-xl tracking-tight text-[#f4ede1]">MVP Media</span>
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-[#c9b8a0] sm:inline">
            Chicago headshots
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {photoNav.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-[#f4ede1] text-[#14110e]"
                    : "text-[#e8dcc8] hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/booking"
            className="ml-3 inline-flex h-10 items-center rounded-full bg-[#c4a574] px-5 text-sm font-medium text-[#14110e] transition-colors hover:bg-[#d4b98a]"
          >
            Book a session
          </Link>
        </nav>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon-lg" className="text-[#f4ede1] md:hidden" />
            }
          >
            <Menu className="size-6" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1c1814] text-[#f4ede1] sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="font-heading text-[#f4ede1]">MVP Media</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              <Link href="/" onClick={closeMenu} className="rounded-lg px-3 py-3 text-base hover:bg-white/10">
                Home
              </Link>
              {photoNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-base hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={closeMenu}
                className="mt-4 rounded-full bg-[#c4a574] px-3 py-3 text-center text-base font-medium text-[#14110e]"
              >
                Book a session
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
