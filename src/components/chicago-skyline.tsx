import { cn } from "@/lib/utils"

/** Minimal line drawing of the Chicago skyline (Willis, Hancock, Trump, Aon, Marina City). */
export function ChicagoSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 62"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden
      className={cn("h-12 w-auto", className)}
    >
      {/* low blocks */}
      <path d="M2 60V44h12v16M18 60V34h11v26" />
      {/* John Hancock: tapered tower, X-bracing, twin antennas */}
      <path d="M33 60l4-44h13l4 44" />
      <path d="M35.5 44l17-14M51.5 44l-17-14M37 30l13-11M50 30l-13-11" opacity={0.6} />
      <path d="M40 16V4M47 16V6" />
      <path d="M58 60V38h10v22" />
      {/* Aon Center: tall slab with vertical fins */}
      <path d="M72 60V12h14v48" />
      <path d="M76.5 14v44M81.5 14v44" opacity={0.5} />
      {/* Trump Tower: setbacks and spire */}
      <path d="M92 60V30h2v-8h2v-8h8v8h2v8h2v30" />
      <path d="M100 14V2" />
      <path d="M114 60V40h10v20" />
      {/* Willis Tower: stepped bundled tubes and antennas */}
      <path d="M128 60V34h4V22h4V14h14v8h4v12h2v26" />
      <path d="M140 14V3M146 14V5" />
      <path d="M136 22v36M150 22v36M132 34v24" opacity={0.5} />
      {/* 311 South Wacker crown */}
      <path d="M160 60V30l6-6 6 6v30" />
      <circle cx={166} cy={30} r={2} />
      <path d="M176 60V44h14v16" />
      {/* Marina City corncobs */}
      <path d="M194 60V32a4 4 0 0 1 8 0v28M205 60V32a4 4 0 0 1 8 0v28" />
      <path d="M194 38h8M194 44h8M194 50h8M205 38h8M205 44h8M205 50h8" opacity={0.5} />
      <path d="M218 60V46h12v14" />
      {/* street line */}
      <path d="M0 60h240" />
    </svg>
  )
}
