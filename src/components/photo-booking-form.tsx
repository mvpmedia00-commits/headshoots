"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import type { FormEvent } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PHOTO_EMAIL, photoPackages } from "@/data/photo"
import { cn } from "@/lib/utils"

const NOT_SURE = "not-sure"
const choices = [
  ...photoPackages.map((pkg) => ({ value: pkg.slug, label: pkg.name, hint: pkg.bestFor })),
  { value: "events", label: "Event coverage", hint: "Conferences, galas, launches" },
  { value: NOT_SURE, label: "Not sure yet", hint: "Help me choose" },
]

const fieldClass = "mt-1.5 h-11 bg-black/40 text-base"
const labelClass = "block text-sm font-medium text-[#e8dcc8]"

export function PhotoBookingForm() {
  const searchParams = useSearchParams()
  const requested = searchParams.get("package")
  const [choice, setChoice] = useState(
    choices.some((c) => c.value === requested) ? requested! : NOT_SURE
  )
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) || "").trim()
    const name = get("name")
    const email = get("email")
    if (!name || !email) {
      setError("Please add your name and email so I can reply.")
      return
    }
    const pkg = choices.find((c) => c.value === choice)?.label ?? "Not sure yet"
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${get("phone") || "not given"}`,
      `Package: ${pkg}`,
      `People: ${get("people") || "1"}`,
      `Where: ${get("location")}`,
      `Preferred dates: ${get("dates") || "flexible"}`,
      "",
      get("message") || "(no extra notes)",
    ].join("\n")
    window.location.href = `mailto:${PHOTO_EMAIL}?subject=${encodeURIComponent(`Booking request — ${pkg}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PHOTO_EMAIL)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-[#14110e] p-6 ring-1 ring-[#c4a574]/50 sm:p-8" role="status">
        <p className="font-heading text-3xl">Almost done — hit send.</p>
        <p className="mt-3 leading-7 text-[#c9b8a0]">
          Your email app should have opened with your request filled in. Send it
          and I&apos;ll reply with availability and a quote.
        </p>
        <p className="mt-6 text-sm text-[#c9b8a0]">Email app didn&apos;t open? Write to me directly:</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a className="font-heading text-2xl underline decoration-[#c4a574] underline-offset-4" href={`mailto:${PHOTO_EMAIL}`}>
            {PHOTO_EMAIL}
          </a>
          <Button type="button" variant="outline" size="lg" onClick={copyEmail}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <Button className="mt-8" variant="ghost" type="button" onClick={() => setSent(false)}>
          ← Edit my request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 rounded-3xl bg-[#14110e] p-6 ring-1 ring-white/10 sm:p-8"
    >
      <fieldset>
        <legend className={labelClass}>What are you looking for?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {choices.map((c) => (
            <label
              key={c.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-2xl p-3 ring-1 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#c4a574]",
                choice === c.value
                  ? "bg-[#c4a574]/10 ring-[#c4a574]"
                  : "bg-black/30 ring-white/10 hover:ring-white/25"
              )}
            >
              <input
                type="radio"
                name="package"
                value={c.value}
                checked={choice === c.value}
                onChange={() => setChoice(c.value)}
                className="mt-1 accent-[#c4a574]"
              />
              <span>
                <span className="block text-sm font-medium">{c.label}</span>
                <span className="block text-xs text-[#c9b8a0]">{c.hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <Input name="name" required className={fieldClass} autoComplete="name" />
        </label>
        <label className={labelClass}>
          Email
          <Input name="email" type="email" required className={fieldClass} autoComplete="email" />
        </label>
        <label className={labelClass}>
          Phone <span className="font-normal text-[#c9b8a0]">(optional)</span>
          <Input name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </label>
        <label className={labelClass}>
          How many people?
          <Input name="people" type="number" min={1} defaultValue={1} inputMode="numeric" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Where
          <select
            name="location"
            defaultValue="Studio"
            className="mt-1.5 h-11 w-full rounded-lg border border-white/15 bg-black/40 px-2.5 text-base"
          >
            <option>Studio</option>
            <option>My office (Chicago area)</option>
            <option>Outdoor Chicago location</option>
            <option>Not sure</option>
          </select>
        </label>
        <label className={labelClass}>
          Preferred dates <span className="font-normal text-[#c9b8a0]">(optional)</span>
          <Input name="dates" placeholder="e.g. weekday mornings in May" className={fieldClass} />
        </label>
      </div>

      <label className={labelClass}>
        Anything else? <span className="font-normal text-[#c9b8a0]">(optional)</span>
        <Textarea
          name="message"
          rows={4}
          className="mt-1.5 bg-black/40 text-base"
          placeholder="Where the photos will be used, the look you want, deadlines…"
        />
      </label>

      {error ? (
        <p className="text-sm text-[#ff8a8a]" role="alert">
          {error}
        </p>
      ) : null}
      <div>
        <button
          type="submit"
          className="h-12 w-full rounded-full bg-[#c4a574] text-base font-medium text-[#14110e] transition-colors hover:bg-[#d4b98a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574] sm:w-auto sm:px-8"
        >
          Send booking request
        </button>
        <p className="mt-3 text-xs text-[#c9b8a0]">
          Opens your email app, addressed to {PHOTO_EMAIL}. No payment needed to ask.
        </p>
      </div>
    </form>
  )
}
