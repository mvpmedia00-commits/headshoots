import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Camera, Check, ChevronDown, Mic, Sparkles } from "lucide-react"

import { BookingBand } from "@/components/booking-band"
import { ChicagoSkyline } from "@/components/chicago-skyline"
import { CtaLink } from "@/components/cta-link"
import { PhotoPackages } from "@/components/photo-packages"
import {
  PHOTO_EMAIL,
  photoEventIncludes,
  photoEvents,
  photoExtras,
  photoFaqs,
  photoHero,
  photoOgImage,
  photoProcess,
  photoSessions,
  photoTrust,
} from "@/data/photo"
import { siteUrl } from "@/lib/site-url"

const eventIcons = { mic: Mic, sparkles: Sparkles, camera: Camera } as const

export const metadata: Metadata = {
  title: { absolute: "MVP Media — Chicago headshots and portraits" },
}

export default function PhotoHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PhotographBusiness",
    name: "MVP Media",
    image: photoOgImage,
    url: siteUrl(),
    email: PHOTO_EMAIL,
    areaServed: "Chicago, IL",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    founder: { "@type": "Person", name: "Matthew Phillips" },
    description: "Chicago headshots, personal branding, and portrait photography.",
  }

  return (
    <div className="panel-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="panel">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-14 lg:pb-20">
          <div>
            <ChicagoSkyline className="mb-5 h-10 text-[#c4a574] sm:h-12" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#c4a574]">
              Chicago headshots &amp; portraits
            </p>
            <h1 className="mt-4 font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Look like the person people want to hire.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#e8dcc8]">
              Professional headshots and portraits with Matthew Phillips. I guide every pose, so you
              walk out with photos you&apos;re proud to use — even if you hate having your picture
              taken.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/booking">Book your session</CtaLink>
              <CtaLink href="/pricing" variant="outline">
                See packages
              </CtaLink>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-[#e8dcc8] sm:grid-cols-3 sm:gap-4">
              {photoTrust.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#c4a574]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Image
              src={photoHero.src}
              alt={photoHero.alt}
              width={1600}
              height={1449}
              priority
              sizes="(min-width: 1024px) 26vw, 50vw"
              className="row-span-2 h-full w-full rounded-3xl object-cover"
            />
            <Image
              src="/photo/mvp-headshot-blazer.jpg"
              alt="Headshot in a cream blazer and gold earrings against a dark background"
              width={1600}
              height={1556}
              priority
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
            />
            <Image
              src="/photo/mvp-headshot-glasses.jpg"
              alt="Headshot with glasses and a dark green shirt on a charcoal backdrop"
              width={1600}
              height={1571}
              priority
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="panel">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">What I shoot</p>
          <h2 className="mt-2 max-w-2xl font-heading text-4xl sm:text-5xl">
            Photos with a job to do.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {photoSessions.map((session) => (
              <Link
                key={session.slug}
                href={`/gallery?category=${session.category}`}
                className="group overflow-hidden rounded-3xl bg-[#14110e] ring-1 ring-white/10 transition hover:ring-[#c4a574]/60"
              >
                <div className="aspect-[4/3] overflow-hidden md:aspect-[4/5]">
                  <Image
                    src={session.image}
                    alt={session.alt}
                    width={800}
                    height={1000}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl">{session.title}</h3>
                  <p className="mt-2 leading-7 text-[#c9b8a0]">{session.blurb}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm text-[#c4a574]">
                    See examples
                    <ArrowRight
                      className="size-4 transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-[#c9b8a0]">
            Also available: {photoExtras.join(" · ")}.{" "}
            <Link href="/contact" className="text-[#f4ede1] underline underline-offset-4">
              Ask about it
            </Link>
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="panel">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Events</p>
          <h2 className="mt-2 max-w-2xl font-heading text-4xl sm:text-5xl">
            Your event, told well.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#c9b8a0]">
            Corporate events, galas, and launches across Chicagoland — photographed like an
            editorial story, not a party flash.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {photoEvents.map((event) => {
              const Icon = eventIcons[event.icon]
              return (
                <article
                  key={event.slug}
                  className="rounded-3xl bg-[#14110e] p-6 ring-1 ring-white/10"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#c4a574]/12 text-[#c4a574] ring-1 ring-[#c4a574]/30">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl">{event.title}</h3>
                  <p className="mt-2 leading-7 text-[#c9b8a0]">{event.blurb}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-8 flex flex-col gap-6 rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 lg:flex-row lg:items-center lg:justify-between">
            <ul className="grid gap-3 text-[#e8dcc8] sm:grid-cols-2 sm:gap-x-8">
              {photoEventIncludes.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-[#c4a574]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <CtaLink href="/booking?package=events" className="shrink-0">
              Get an event quote
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="panel">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Packages</p>
              <h2 className="mt-2 font-heading text-4xl sm:text-5xl">Pick what fits.</h2>
            </div>
            <Link
              href="/pricing"
              className="text-sm text-[#c9b8a0] underline underline-offset-4 hover:text-[#f4ede1]"
            >
              Compare all packages
            </Link>
          </div>
          <div className="mt-10">
            <PhotoPackages />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="panel">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">How it works</p>
          <h2 className="mt-2 font-heading text-4xl sm:text-5xl">Easy from start to finish.</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photoProcess.map((item) => (
              <li key={item.step} className="rounded-3xl bg-[#14110e] p-6 ring-1 ring-white/10">
                <p className="font-heading text-4xl text-[#c4a574]">{item.step}</p>
                <h3 className="mt-3 font-heading text-2xl">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#c9b8a0]">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="panel">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c4a574]">Questions</p>
          <h2 className="mt-2 font-heading text-4xl sm:text-5xl">Good to know.</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {photoFaqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-[#c4a574] transition group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 leading-7 text-[#c9b8a0]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BookingBand />
    </div>
  )
}
