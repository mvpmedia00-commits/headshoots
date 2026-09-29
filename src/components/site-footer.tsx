import Link from "next/link"

import { PHOTO_EMAIL, photoNav } from "@/data/photo"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#070707] pb-20 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm text-[#c9b8a0] sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl text-[#f4ede1]">MVP Media</p>
          <p className="mt-2 leading-6">
            Headshots and portraits by Matthew Phillips. Chicago and Chicagoland.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          {photoNav.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#f4ede1]">
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="hover:text-[#f4ede1]">
            Book a session
          </Link>
        </nav>
        <div>
          <p className="text-[#f4ede1]">Get in touch</p>
          <a className="mt-2 inline-block underline underline-offset-4 hover:text-[#f4ede1]" href={`mailto:${PHOTO_EMAIL}`}>
            {PHOTO_EMAIL}
          </a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} MVP Media · Chicago, IL</p>
        </div>
      </div>
    </footer>
  )
}
