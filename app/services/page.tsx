/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Bot,
  Headphones,
  Shield,
  Globe,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "IT Services - Custom Software Development, AI Automation & SaaS Solutions",
  description:
    "Comprehensive IT services including custom software development, AI automation, SaaS applications, cybersecurity, cloud migration, and 24/7 IT support. Expert solutions for modern businesses.",
  keywords: [
    "custom software development services",
    "AI automation solutions",
    "SaaS application development",
    "IT support services",
    "cybersecurity solutions",
    "cloud migration services",
    "web application development",
    "mobile app development",
    "API development",
    "IT consulting services",
  ],
  openGraph: {
    title: "IT Services - Custom Software Development & AI Automation",
    description:
      "Comprehensive IT services including custom software development, AI automation, SaaS applications, and 24/7 support.",
    url: "https://ijsolutions.com/services",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "I&J Solutions IT Services - Custom Software Development",
      },
    ],
  },
  alternates: {
    canonical: "https://ijsolutions.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT Solutions Services",
  description:
    "Comprehensive IT services including custom software development, AI automation, SaaS applications, cybersecurity, and 24/7 support.",
  url: "https://ijsolutions.com/services",
  provider: {
    "@type": "Organization",
    name: "I&J Solutions Ltd",
  },
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
            "Tailored software solutions built with modern technologies to meet your unique business requirements and scale with your growth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation Solutions",
          description:
            "Intelligent automation and AI-powered solutions to streamline operations, reduce costs, and enhance decision-making processes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Application Development",
          description:
            "End-to-end SaaS solutions from concept to deployment, including architecture design, development, and ongoing management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Support Services",
          description:
            "24/7 technical support, system maintenance, and proactive monitoring to ensure your IT infrastructure runs smoothly.",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#0B0A57] text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/20">
                Our Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                Comprehensive
                <span className="text-white"> IT Solutions</span> for Modern
                Business
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                From custom software development to AI-powered automation, we
                deliver innovative solutions that drive your business forward
                and keep you ahead of the competition.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {/* Custom Software Development */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-[#0B0A57]/10 text-[#0B0A57] hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
                    Custom Development
                  </Badge>
                  <h2 className="text-4xl font-bold text-[#0B0A57] font-poppins">
                    Custom Software Development
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Transform your unique business requirements into powerful
                    software solutions. Our expert development team creates
                    scalable, secure, and user-friendly applications tailored
                    specifically to your needs.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#0B0A57]" />
                      <span className="text-gray-700">
                        Web Applications & Portals
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#0B0A57]" />
                      <span className="text-gray-700">
                        Mobile App Development (iOS & Android)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#0B0A57]" />
                      <span className="text-gray-700">
                        API Development & Integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#0B0A57]" />
                      <span className="text-gray-700">
                        Legacy System Modernization
                      </span>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white"
                  >
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-[#0B0A57] rounded-2xl flex items-center justify-center mb-6">
                        <Code className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B0A57] mb-4 font-poppins">
                        Technologies We Use
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-[#0B0A57]">
                            Frontend
                          </h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>React / Next.js</div>
                            <div>Vue.js / Nuxt.js</div>
                            <div>Angular</div>
                            <div>TypeScript</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-[#0B0A57]">
                            Backend
                          </h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>Node.js</div>
                            <div>Python / Django</div>
                            <div>PHP / Laravel</div>
                            <div>.NET Core</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Additional Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#0B0A57] font-poppins">
                      SaaS Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      End-to-end SaaS development with multi-tenant
                      architecture, subscription management, and auto-scaling
                      infrastructure.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#0B0A57] font-poppins">
                      AI & Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      Intelligent automation, machine learning models, chatbots,
                      and data analytics to streamline your operations.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Headphones className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#0B0A57] font-poppins">
                      IT Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      24/7 technical support, system monitoring, security
                      updates, and disaster recovery services.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#0B0A57] font-poppins">
                      Cybersecurity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      Comprehensive security assessments, implementation of
                      security protocols, and ongoing monitoring.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#0B0A57] font-poppins">
                      Cloud Migration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      Seamless migration to cloud platforms including AWS,
                      Azure, and Google Cloud with minimal downtime.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#0B0A57] font-poppins">
                      IT Consulting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      Strategic technology consulting to help you make informed
                      decisions about your IT infrastructure.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#0B0A57] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your specific needs and create a customized solution
              that drives real results for your organization. Get started with a
              free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0B0A57] hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0B0A57] px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
