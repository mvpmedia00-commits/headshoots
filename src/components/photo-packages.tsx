import { Check } from "lucide-react"

import { CtaLink } from "@/components/cta-link"
import { photoPackages } from "@/data/photo"
import { cn } from "@/lib/utils"

export function PhotoPackages() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {photoPackages.map((pkg) => (
        <article
          key={pkg.slug}
          className={cn(
            "relative flex flex-col rounded-3xl bg-[#14110e] p-6 ring-1",
            pkg.popular ? "ring-2 ring-[#c4a574]" : "ring-white/10"
          )}
        >
          {pkg.popular ? (
            <p className="absolute -top-3 left-6 rounded-full bg-[#c4a574] px-3 py-1 text-xs font-medium text-[#14110e]">
              Most popular
            </p>
          ) : null}
          <h3 className="font-heading text-2xl">{pkg.name}</h3>
          <p className="mt-1 text-sm text-[#c9b8a0]">{pkg.bestFor}</p>
          <p className="mt-5 text-3xl font-medium">
            {pkg.price ? (
              <>
                <span className="text-base font-normal text-[#c9b8a0]">From </span>
                {pkg.price}
              </>
            ) : (
              <span className="text-xl">Custom quote</span>
            )}
          </p>
          <ul className="mt-5 flex-1 space-y-2.5 text-sm text-[#e8dcc8]">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-[#c4a574]" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
          <CtaLink
            href={`/booking?package=${pkg.slug}`}
            variant={pkg.popular ? "primary" : "outline"}
            className="mt-6 w-full"
          >
            Book {pkg.slug === "team" ? "a team day" : "this"}
          </CtaLink>
        </article>
      ))}
    </div>
  )
}
