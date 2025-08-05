/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/form/contact-form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Contact Us - Get Free IT Consultation & Custom Software Development Quote",
  description:
    "Contact I&J Solutions Ltd for free IT consultation, custom software development quotes, and expert technology solutions. Call +1-234-567-8900 or email hello@ijsolutions.com.",
  keywords: [
    "contact IT company",
    "free IT consultation",
    "software development quote",
    "technology consulting",
    "custom software inquiry",
    "AI automation consultation",
    "IT support contact",
  ],
  openGraph: {
    title: "Contact I&J Solutions Ltd - Free IT Consultation",
    description:
      "Get in touch with our expert team for free IT consultation and custom software development quotes. Transform your business with innovative technology solutions.",
    url: "https://ijsolutions.com/contact",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact I&J Solutions Ltd - Free IT Consultation",
      },
    ],
  },
  alternates: {
    canonical: "https://ijsolutions.com/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact I&J Solutions Ltd",
  description:
    "Get in touch with I&J Solutions Ltd for free IT consultation, custom software development quotes, and expert technology solutions.",
  url: "https://ijsolutions.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "I&J Solutions Ltd",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-234-567-8900",
        contactType: "customer service",
        email: "hello@ijsolutions.com",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "Tech City",
      addressRegion: "TC",
      postalCode: "12345",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
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
                Contact Us
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-poppins">
                Let's Build Something
                <span className="text-white"> Amazing Together</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Ready to transform your business with innovative technology
                solutions? Get in touch with our expert team for a free
                consultation and discover how we can help you achieve your
                goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#0B0A57] mb-4 font-poppins">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're here to help you succeed. Reach out to us through any
                    of the channels below, and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0B0A57] rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0B0A57] mb-1 font-poppins">
                            Email Us
                          </h3>
                          <p className="text-gray-600 mb-2">
                            Send us a message anytime
                          </p>
                          <a
                            href="mailto:hello@ijsolutions.com"
                            className="text-[#0B0A57] hover:underline font-medium"
                          >
                            hello@ijsolutions.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0B0A57] rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0B0A57] mb-1 font-poppins">
                            Call Us
                          </h3>
                          <p className="text-gray-600 mb-2">
                            Speak with our experts
                          </p>
                          <a
                            href="tel:+1234567890"
                            className="text-[#0B0A57] hover:underline font-medium"
                          >
                            +1 (234) 567-8900
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0B0A57] rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0B0A57] mb-1 font-poppins">
                            Visit Us
                          </h3>
                          <p className="text-gray-600 mb-2">
                            Our office location
                          </p>
                          <p className="text-[#0B0A57] font-medium">
                            123 Innovation Drive
                            <br />
                            Tech City, TC 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0B0A57] rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0B0A57] mb-1 font-poppins">
                            Business Hours
                          </h3>
                          <p className="text-gray-600 mb-2">
                            When we're available
                          </p>
                          <div className="text-[#0B0A57] font-medium space-y-1">
                            <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                            <div>Sat: 10:00 AM - 4:00 PM</div>
                            <div>Sun: Closed</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0B0A57] mb-4 font-poppins">
                Other Ways to Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the communication method that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0A57] mb-3 font-poppins">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get instant answers to your questions through our live chat
                    support.
                  </p>
                  <Button className="bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0A57] mb-3 font-poppins">
                    Schedule a Call
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Book a free 30-minute consultation to discuss your project
                    needs.
                  </p>
                  <Button className="bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white">
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0A57] mb-3 font-poppins">
                    Request Quote
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get a detailed project quote tailored to your specific
                    requirements.
                  </p>
                  <Button className="bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
