import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.png",
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = "https://ijsolutions.com";
  const fullTitle = title.includes("I&J Solutions")
    ? title
    : `${title} | I&J Solutions Ltd`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      siteName: "I&J Solutions Ltd",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@ijsolutions",
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "I&J Solutions Ltd",
    image: "https://ijsolutions.com/ij-logo.svg",
    description:
      "Leading IT solutions company specializing in custom software development, AI automation, SaaS applications, and 24/7 IT support services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "Tech City",
      addressRegion: "TC",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    url: "https://ijsolutions.com",
    telephone: "+1-234-567-8900",
    email: "hello@ijsolutions.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };
}
