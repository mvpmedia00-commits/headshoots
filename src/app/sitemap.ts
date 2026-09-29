import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const paths = ["/", "/gallery", "/pricing", "/about", "/booking", "/contact"]
  const now = new Date()
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }))
}
