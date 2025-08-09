"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/ij-logo.svg"
              alt="I&J Solutions Ltd"
              width={40}
              height={40}
              className="bg-[#0B0A57]/5 rounded-lg p-1"
            />
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-[#0B0A57] font-poppins">
                I&J Solutions Ltd
              </div>
              <div className="text-xs text-[#0B0A57]">
                Innovative IT Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0B0A57] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[260px] sm:w-[300px] px-6 py-8 flex flex-col"
            >
              {/* Hidden title for accessibility */}
              <VisuallyHidden>
                <SheetTitle>Mobile Menu</SheetTitle>
              </VisuallyHidden>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-6 mt-8 sm:mt-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-700 hover:text-[#0B0A57] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <Button
                  asChild
                  className="bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white w-full"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
