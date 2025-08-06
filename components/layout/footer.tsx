import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Footer navigation links configuration
const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Custom Software Development", href: "/services" },
    { name: "SaaS Application Design", href: "/services" },
    { name: "AI & Automation Solutions", href: "/services" },
    { name: "IT Support Services", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

// Company contact information
const contactInfo = {
  email: "hello@ijsolutions.com",
  phone: "+1 (234) 567-8900",
  address: "123 Innovation Drive, Tech City, TC 12345",
};

export function Footer() {
  return (
    <footer className="bg-[#0B0A57] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Company Information Column */}
          <div className="space-y-6">
            {/* Company logo and brand */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/ij-logo.svg"
                alt="I&J Solutions Ltd"
                width={40}
                height={40}
                className="bg-white/10 rounded-lg p-1 shrink-0"
              />
              <div className="leading-tight">
                <div className="text-lg font-bold font-poppins">
                  I&J Solutions Ltd
                </div>
                <div className="text-sm text-[#0B0A57]">
                  Innovative IT Solutions
                </div>
              </div>
            </Link>

            {/* Company description */}
            <p className="text-blue-100 leading-relaxed text-sm">
              Empowering businesses through innovative technology solutions, AI
              automation, and dedicated IT support services.
            </p>

            {/* Contact information */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-blue-100">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-poppins">Quick Links</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-poppins">Our Services</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              {footerLinks.services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Subscription Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-poppins">Stay Updated</h3>
            <p className="text-blue-100 text-sm">
              Subscribe to our newsletter for the latest technology insights and
              updates.
            </p>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="sm:rounded-r-none bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-[#0B0A57]"
                />
                <Button className="mt-2 sm:mt-0 sm:rounded-l-none bg-blue-950 cursor-pointer  hover:bg-white hover:text-[#0B0A57] text-[#0B0A57]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-blue-200">
                By subscribing, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} I&J Solutions Ltd. All rights
              reserved.
            </p>

            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
