import type { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"

import { PhotoBookingForm } from "@/components/photo-booking-form"
import { PHOTO_EMAIL } from "@/data/photo"

export const metadata: Metadata = {
  title: "Book a session",
  description:
    "Book a Chicago headshot, branding, or portrait session with Matthew Phillips.",
}

const steps = [
  "Send your request — it takes about a minute.",
  "I reply with available dates and a quote.",
  "We lock in the date, location, and wardrobe plan.",
]

export default function PhotoBookingPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Booking</p>
        <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Book your session</h1>
        <p className="mt-4 text-lg leading-8 text-[#e8dcc8]">
          Pick a package, tell me a little about what you need, and I&apos;ll get
          back to you personally.
        </p>
        <ol className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4 text-[#e8dcc8]">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#c4a574]/15 font-heading text-lg text-[#c4a574]">
                {index + 1}
              </span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
        <Image
          src="/photo/headshot-executive.jpg"
          alt="Executive headshot of a woman in a blazer by a window"
          width={1600}
          height={2397}
          sizes="(min-width: 1024px) 30vw, 0px"
          className="mt-10 hidden aspect-[4/3] w-full rounded-3xl object-cover object-[center_25%] lg:block"
        />
        <p className="mt-8 text-sm text-[#c9b8a0]">
          Prefer email?{" "}
          <a className="text-[#f4ede1] underline underline-offset-4" href={`mailto:${PHOTO_EMAIL}`}>
            {PHOTO_EMAIL}
          </a>
        </p>
      </div>
      <Suspense>
        <PhotoBookingForm />
      </Suspense>
    </div>
  )
}
