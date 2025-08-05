import type { MetadataRoute } from "next"

/**
 * Robots.txt Configuration
 * Controls search engine crawling behavior
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://ijsolutions.com/sitemap.xml",
  }
}
