import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { AboutSnapshotSection } from "@/components/sections/about-snapshot-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Custom Software Development & AI Automation Services",
  description:
    "I&J Solutions Ltd delivers cutting-edge custom software development, AI automation, SaaS solutions, and 24/7 IT support. Transform your business with innovative technology solutions.",
  keywords: [
    "custom software development",
    "AI automation",
    "SaaS development",
    "IT support services",
    "business automation",
    "web development",
    "mobile app development",
  ],
  openGraph: {
    title: "I&J Solutions Ltd - Custom Software Development & AI Automation",
    description:
      "Transform your business with cutting-edge software development, AI automation, and dedicated IT support services.",
    url: "https://ijsolutions.com",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "I&J Solutions - Custom Software Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://ijsolutions.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "I&J Solutions Ltd - Custom Software Development & AI Automation",
  description:
    "Leading IT solutions company specializing in custom software development, AI automation, SaaS applications, and 24/7 IT support services.",
  url: "https://ijsolutions.com",
  mainEntity: {
    "@type": "Organization",
    name: "I&J Solutions Ltd",
    offers: [
      {
        "@type": "Service",
        name: "Custom Software Development",
        description:
          "Tailored software solutions built with modern technologies to meet your unique business requirements",
      },
      {
        "@type": "Service",
        name: "AI & Automation Solutions",
        description:
          "Intelligent automation and AI-powered solutions to streamline operations and enhance decision-making",
      },
      {
        "@type": "Service",
        name: "SaaS Application Development",
        description:
          "End-to-end SaaS solutions from concept to deployment with multi-tenant architecture",
      },
      {
        "@type": "Service",
        name: "IT Support Services",
        description:
          "24/7 technical support, system maintenance, and proactive monitoring services",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <AboutSnapshotSection />
        <ContactSection />
      </div>
    </>
  );
}
