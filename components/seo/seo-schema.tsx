/**
 * SEO Schema Component
 * Provides structured data (JSON-LD) for search engines
 */
export function SEOSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "I&J Solutions Ltd",
    alternateName: "IJ Solutions",
    url: "https://ijsolutions.com",
    logo: "https://ijsolutions.com/ij-logo.svg",
    description:
      "Leading IT solutions company specializing in custom software development, AI automation, SaaS applications, and 24/7 IT support services.",
    foundingDate: "2019",
    founders: [
      {
        "@type": "Person",
        name: "Co-Founder I",
      },
      {
        "@type": "Person",
        name: "Co-Founder J",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8900",
      contactType: "customer service",
      email: "info@ijsolutions.com",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "Tech City",
      addressRegion: "TC",
      postalCode: "12345",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/company/ijsolutions",
      "https://twitter.com/ijsolutions",
      "https://facebook.com/ijsolutions",
    ],
    services: [
      "Custom Software Development",
      "AI & Automation Solutions",
      "SaaS Application Development",
      "IT Support Services",
      "Cloud Migration",
      "Cybersecurity Solutions",
    ],
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Solutions Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Tailored software solutions built with modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Automation Solutions",
            description: "Intelligent automation and AI-powered solutions",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
