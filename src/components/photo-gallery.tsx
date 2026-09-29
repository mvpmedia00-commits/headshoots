"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import {
  photoGallery,
  photoGalleryCategories,
  type PhotoGalleryCategory,
} from "@/data/photo"
import { cn } from "@/lib/utils"

export function PhotoGallery() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const requested = searchParams.get("category") as PhotoGalleryCategory | null
  const category =
    requested && photoGalleryCategories.includes(requested) ? requested : "All"
  const items =
    category === "All"
      ? photoGallery
      : photoGallery.filter((item) => item.category === category)

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function selectCategory(label: PhotoGalleryCategory) {
    setOpenIndex(null)
    router.replace(label === "All" ? "/gallery" : `/gallery?category=${label}`, {
      scroll: false,
    })
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
        {photoGalleryCategories.map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={category === label}
            onClick={() => selectCategory(label)}
            className={cn(
              "h-10 rounded-full px-4 text-sm transition-colors",
              category === label
                ? "bg-[#f4ede1] text-[#14110e]"
                : "bg-white/5 text-[#e8dcc8] hover:bg-white/10"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574] sm:mb-4"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <span className="sr-only">View larger</span>
          </button>
        ))}
      </div>
      {openIndex !== null ? (
        <Lightbox items={items} index={openIndex} onChange={setOpenIndex} />
      ) : null}
    </div>
  )
}

function Lightbox({
  items,
  index,
  onChange,
}: {
  items: typeof photoGallery | (typeof photoGallery)[number][]
  index: number
  onChange: (index: number | null) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = items[index]
  const step = useCallback(
    (delta: number) => onChange((index + delta + items.length) % items.length),
    [index, items.length, onChange]
  )

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onChange(null)
      if (event.key === "ArrowRight") step(1)
      if (event.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onChange, step])

  const control =
    "flex size-12 items-center justify-center rounded-full bg-white/10 text-[#f4ede1] hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#c4a574]"

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-50 flex flex-col bg-black"
      onClick={(event) => {
        if (event.target === event.currentTarget) onChange(null)
      }}
    >
      <div className="flex items-center justify-between p-3 text-sm text-[#c9b8a0]">
        <span>
          {index + 1} / {items.length} · {item.category}
        </span>
        <button ref={closeRef} type="button" className={control} onClick={() => onChange(null)}>
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <div
        className="relative flex-1"
        onClick={(event) => {
          if (event.target === event.currentTarget) onChange(null)
        }}
      >
        <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" />
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <button type="button" className={control} onClick={() => step(-1)}>
          <ChevronLeft className="size-6" />
          <span className="sr-only">Previous photo</span>
        </button>
        <button type="button" className={control} onClick={() => step(1)}>
          <ChevronRight className="size-6" />
          <span className="sr-only">Next photo</span>
        </button>
      </div>
    </div>
  )
}
