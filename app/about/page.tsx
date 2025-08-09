/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Leading IT Solutions Company Since 2019",
  description:
    "Learn about I&J Solutions Ltd, a forward-thinking technology company founded in 2019. Discover our mission, vision, and expert team dedicated to delivering innovative IT solutions.",
  keywords: [
    "about I&J Solutions",
    "IT company history",
    "technology consulting team",
    "software development company",
    "AI automation experts",
    "business transformation",
  ],
  openGraph: {
    title: "About I&J Solutions Ltd - Leading IT Solutions Company",
    description:
      "Founded in 2019, I&J Solutions Ltd is a forward-thinking technology company dedicated to empowering businesses through innovative software solutions.",
    url: "https://ijsolutions.com/about",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About I&J Solutions Ltd - Our Team and Mission",
      },
    ],
  },
  alternates: {
    canonical: "https://ijsolutions.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About I&J Solutions Ltd",
  description:
    "Learn about I&J Solutions Ltd, a leading technology company specializing in custom software development and AI automation solutions.",
  url: "https://ijsolutions.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "I&J Solutions Ltd",
    foundingDate: "2019",
    description:
      "Forward-thinking technology company dedicated to empowering businesses through innovative software solutions, AI automation, and exceptional IT support services.",
    mission:
      "To bridge the gap between complex technology and business success, providing cutting-edge solutions that drive growth, efficiency, and innovation.",
    vision:
      "A future where intelligent technology seamlessly integrates with human potential, creating unprecedented opportunities for businesses to thrive.",
  },
};

export default function AboutPage() {
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
                About I&J Solutions Ltd
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                Innovating the Future of
                <span className="text-white"> Technology Solutions</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                We are a forward-thinking technology company dedicated to
                empowering businesses through innovative software solutions, AI
                automation, and exceptional IT support services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-[#0B0A57]/10 text-[#0B0A57] hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
                    Our Mission
                  </Badge>
                  <h2 className="text-3xl font-bold text-[#0B0A57] mb-4 font-poppins">
                    Empowering Businesses Through Technology
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to bridge the gap between complex technology
                    and business success. We believe that every organization,
                    regardless of size, deserves access to cutting-edge
                    solutions that drive growth, efficiency, and innovation.
                  </p>
                </div>

                <div>
                  <Badge className="mb-4 bg-[#0B0A57]/10 text-[#0B0A57] hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
                    Our Vision
                  </Badge>
                  <h2 className="text-3xl font-bold text-[#0B0A57] mb-4 font-poppins">
                    A Smarter, More Connected Tomorrow
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We envision a future where intelligent technology seamlessly
                    integrates with human potential, creating unprecedented
                    opportunities for businesses to thrive in an increasingly
                    digital world.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#0B0A57]/10 to-[#0B0A57]/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                      <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-[#0B0A57] mb-2 font-poppins">
                        Innovation First
                      </h3>
                      <p className="text-sm text-gray-600">
                        Cutting-edge solutions for modern challenges
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                      <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-[#0B0A57] mb-2 font-poppins">
                        Client-Centric
                      </h3>
                      <p className="text-sm text-gray-600">
                        Your success is our primary focus
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                      <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-[#0B0A57] mb-2 font-poppins">
                        Excellence
                      </h3>
                      <p className="text-sm text-gray-600">
                        Uncompromising quality in every project
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                      <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-[#0B0A57] mb-2 font-poppins">
                        Global Impact
                      </h3>
                      <p className="text-sm text-gray-600">
                        Solutions that make a difference worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-[#0B0A57]/10 text-[#0B0A57] hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
                  Our Story
                </Badge>
                <h2 className="text-4xl font-bold text-[#0B0A57] mb-6 font-poppins">
                  From Vision to Reality
                </h2>
              </div>

              <div className="space-y-12">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-[#0B0A57] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white font-poppins">
                            2019
                          </span>
                        </div>
                        <h3 className="font-bold text-[#0B0A57] font-poppins">
                          Foundation
                        </h3>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-600 leading-relaxed">
                          I&J Solutions Ltd was founded with a simple yet
                          powerful vision: to democratize access to
                          enterprise-grade technology solutions. Our founders,
                          experienced software engineers and business
                          strategists, recognized the growing gap between
                          technological advancement and practical business
                          implementation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="text-center md:order-3">
                        <div className="w-20 h-20 bg-[#0B0A57] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white font-poppins">
                            2021
                          </span>
                        </div>
                        <h3 className="font-bold text-[#0B0A57] font-poppins">
                          Expansion
                        </h3>
                      </div>
                      <div className="md:col-span-2 md:order-1">
                        <p className="text-gray-600 leading-relaxed">
                          As demand for our services grew, we expanded our team
                          and service offerings. We began specializing in AI and
                          automation solutions, recognizing the transformative
                          potential of these technologies for businesses across
                          all sectors.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-[#0B0A57] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white font-poppins">
                            2024
                          </span>
                        </div>
                        <h3 className="font-bold text-[#0B0A57] font-poppins">
                          Innovation
                        </h3>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-600 leading-relaxed">
                          Today, we continue to push the boundaries of what's
                          possible in technology solutions. With a growing
                          portfolio of successful projects and satisfied
                          clients, we remain committed to our founding
                          principles while embracing the latest technological
                          advancements to serve our clients better.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#0B0A57]/10 text-[#0B0A57] hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
                Leadership Team
              </Badge>
              <h2 className="text-4xl font-bold text-[#0B0A57] mb-4 font-poppins">
                Meet the Visionaries Behind I&J Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our leadership team combines decades of experience in
                technology, business strategy, and innovation to guide our
                company's mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-[#0B0A57] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white font-poppins">
                      I
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0A57] mb-2 font-poppins">
                    Co-Founder & CTO
                  </h3>
                  <p className="text-[#0B0A57] font-medium mb-4">
                    Technical Innovation
                  </p>
                  <p className="text-gray-600 text-sm">
                    Leading our technical vision and ensuring we stay at the
                    forefront of technological advancement.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-[#0B0A57] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white font-poppins">
                      J
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0A57] mb-2 font-poppins">
                    Co-Founder & CEO
                  </h3>
                  <p className="text-[#0B0A57] font-medium mb-4">
                    Business Strategy
                  </p>
                  <p className="text-gray-600 text-sm">
                    Driving business growth and ensuring our solutions deliver
                    real value to our clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-[#0B0A57] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0A57] mb-2 font-poppins">
                    Our Team
                  </h3>
                  <p className="text-[#0B0A57] font-medium mb-4">
                    Collective Excellence
                  </p>
                  <p className="text-gray-600 text-sm">
                    A diverse team of experts committed to delivering
                    exceptional results for every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#0B0A57] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the growing number of businesses that trust I&J Solutions Ltd
              to power their success. Let's discuss how we can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className=" text-[#0B0A57] hover:bg-gray-100  px-8 py-4 text-lg"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0B0A57] px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
