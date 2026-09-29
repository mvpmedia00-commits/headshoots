import type { Metadata } from "next"
import { Suspense } from "react"

import { BookingBand } from "@/components/booking-band"
import { PhotoGallery } from "@/components/photo-gallery"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Headshots, personal branding, and portraits from MVP Media in Chicago.",
}

export default function PhotoGalleryPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Gallery</p>
        <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Recent work</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c9b8a0]">
          A look at the lighting and direction you can expect. Tap any photo to
          view it full size.
        </p>
        <div className="mt-10">
          <Suspense>
            <PhotoGallery />
          </Suspense>
        </div>
      </div>
      <BookingBand />
    </div>
  )
}
