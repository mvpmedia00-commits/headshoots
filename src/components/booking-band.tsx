import Image from "next/image"

import { CtaLink } from "@/components/cta-link"
import { PHOTO_EMAIL } from "@/data/photo"

export function BookingBand() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <Image
        src="/photo/mvp-headshot-vest.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[70%_30%] opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-[#070707]/40" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="max-w-xl font-heading text-4xl sm:text-5xl">
          Ready for a photo you actually like?
        </h2>
        <p className="mt-4 max-w-lg text-lg leading-8 text-[#e8dcc8]">
          Tell me what you need. I reply personally with availability and
          a quote.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/booking">Book your session</CtaLink>
          <CtaLink href={`mailto:${PHOTO_EMAIL}`} variant="outline" prefetch={false}>
            Email Matthew
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
