import type { Metadata } from "next"
import { Suspense } from "react"

import { PhotoBookingForm } from "@/components/photo-booking-form"
import { PHOTO_CITY, PHOTO_EMAIL } from "@/data/photo"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Matthew Phillips at MVP Media about Chicago headshots, branding, or portraits.",
}

export default function PhotoContactPage() {
  return (
    <div className="panel-stack">
      <div className="panel">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Contact</p>
            <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Let&apos;s talk.</h1>
            <p className="mt-4 text-lg leading-8 text-[#c9b8a0]">
              Questions about a session, a team day, or something custom? Send a note. I read and
              answer every message myself.
            </p>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Email</dt>
                <dd className="mt-1">
                  <a
                    className="font-heading text-2xl underline decoration-[#c4a574] underline-offset-4"
                    href={`mailto:${PHOTO_EMAIL}`}
                  >
                    {PHOTO_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Area</dt>
                <dd className="mt-1 text-[#e8dcc8]">{PHOTO_CITY} — studio or on site</dd>
              </div>
            </dl>
          </div>
          <Suspense>
            <PhotoBookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
