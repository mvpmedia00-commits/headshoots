import type { Metadata } from "next"
import Link from "next/link"

import { BookingBand } from "@/components/booking-band"
import { PhotoPackages } from "@/components/photo-packages"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Headshot, branding, portrait, and on-site team packages from MVP Media in Chicago.",
}

export default function PhotoPricingPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Pricing</p>
        <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Packages</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c9b8a0]">
          Every session includes guided posing, professional lighting, and a
          private online gallery to pick your favorites. Need something
          different?{" "}
          <Link href="/contact" className="text-[#f4ede1] underline underline-offset-4">
            Ask for a custom quote
          </Link>
          .
        </p>
        <div className="mt-12">
          <PhotoPackages />
        </div>
        <div className="mt-12 grid gap-6 rounded-3xl bg-[#14110e] p-6 ring-1 ring-white/10 sm:grid-cols-3 sm:p-8">
          <div>
            <h2 className="font-heading text-xl">Wardrobe help</h2>
            <p className="mt-2 text-sm leading-6 text-[#c9b8a0]">
              Send two or three outfit options before the shoot and I&apos;ll
              tell you what works best on camera.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl">On location</h2>
            <p className="mt-2 text-sm leading-6 text-[#c9b8a0]">
              Your office, home, or a Chicago spot you love. Travel outside the
              city is quoted up front.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl">Reserving a date</h2>
            <p className="mt-2 text-sm leading-6 text-[#c9b8a0]">
              Once we pick a package, I send a short written agreement that
              locks your date, location, and plan.
            </p>
          </div>
        </div>
      </div>
      <BookingBand />
    </div>
  )
}
