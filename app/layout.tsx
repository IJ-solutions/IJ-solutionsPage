import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { SEOSchema } from "@/components/seo/seo-schema";

// Font configurations with optimal loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Global SEO metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://ijsolutions.com"),
  title: {
    default:
      "I&J Solutions Ltd - Custom Software Development & AI Automation Services",
    template: "%s | I&J Solutions Ltd",
  },
  description:
    "Leading IT solutions company specializing in custom software development, AI automation, SaaS applications, and 24/7 IT support. Transform your business with innovative technology solutions.",
  keywords: [
    "custom software development",
    "AI automation solutions",
    "SaaS application development",
    "IT support services",
    "web application development",
    "mobile app development",
    "business automation",
    "cloud migration services",
    "cybersecurity solutions",
    "IT consulting",
    "enterprise software",
    "digital transformation",
    "technology consulting",
    "software engineering",
    "API development",
  ],
  authors: [{ name: "I&J Solutions Ltd", url: "https://ijsolutions.com" }],
  creator: "I&J Solutions Ltd",
  publisher: "I&J Solutions Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ijsolutions.com",
    title: "I&J Solutions Ltd - Custom Software Development & AI Automation",
    description:
      "Transform your business with cutting-edge software development, AI automation, and dedicated IT support services. Expert solutions for modern enterprises.",
    siteName: "I&J Solutions Ltd",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "I&J Solutions Ltd - Innovative IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I&J Solutions Ltd - Custom Software Development & AI Automation",
    description:
      "Transform your business with cutting-edge software development, AI automation, and dedicated IT support services.",
    images: ["/og-image.png"],
    creator: "@ijsolutions",
    site: "@ijsolutions",
  },
  alternates: {
    canonical: "https://ijsolutions.com",
  },
  category: "Technology",
  classification: "Business",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

/**
 * Root Layout Component
 * Provides the base HTML structure and global providers for the entire application
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Global SEO Schema */}
        <SEOSchema />

        {/* Favicon and PWA icons */}
        <link rel="canonical" href="https://ijsolutions.com" />
        <meta name="theme-color" content="#0B0A57" />
        <meta name="msapplication-TileColor" content="#0B0A57" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-inter antialiased">
        {/* Main navigation header */}
        <Header />

        {/* Main content area */}
        <main className="min-h-screen">{children}</main>

        {/* Global footer */}
        <Footer />

        {/* Toast notifications */}
        <Toaster />
      </body>
    </html>
  );
}
