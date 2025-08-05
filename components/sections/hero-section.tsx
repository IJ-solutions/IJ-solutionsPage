"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Database,
  Bot,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Hero content configuration for carousel
const heroContent = [
  {
    id: 1,
    type: "video",
    src: "/videos/hero-video-1.mp4",
    title: "Custom Software Development",
    subtitle: "Building Tomorrow's Solutions Today",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/hero-video-2.mp4",
    title: "AI & Automation Excellence",
    subtitle: "Intelligent Solutions for Modern Business",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/hero-video-3.mp4",
    title: "Enterprise SaaS Solutions",
    subtitle: "Scalable Technology for Growth",
  },
];

// Company statistics for display
const companyStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

// Service highlights for the feature grid
const serviceHighlights = [
  { icon: Code, label: "Custom Development" },
  { icon: Bot, label: "AI Solutions" },
  { icon: Database, label: "SaaS Management" },
  { icon: Headphones, label: "IT Support" },
];

/**
 * Hero Section Component
 * Main landing section with video carousel, company branding, and call-to-actions
 * Features: Video background carousel, responsive design, animated statistics
 */
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroContent.length) % heroContent.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0A57]">
      {/* Video Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroContent.map((content, index) => (
          <div
            key={content.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={content.src} type="video/mp4" />
            </video>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-[#0B0A57]/70" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 hover:text-white"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 hover:text-white"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-white">
            {/* Company branding */}
            <div className="flex items-center space-x-4">
              <Image
                src="/ij-logo.svg"
                alt="I&J Solutions Ltd"
                width={80}
                height={80}
                className="bg-white/10 rounded-lg p-2 backdrop-blur-sm"
              />
              <div>
                <h1 className="text-2xl font-bold font-poppins">
                  I&J Solutions Ltd
                </h1>
                <p className="text-blue-200">
                  Innovative IT Solutions for a Smarter Tomorrow
                </p>
              </div>
            </div>

            {/* Dynamic content based on current slide */}
            <div className="space-y-6">
              <Badge className="bg-[#0B0A57]/20 text-white border-[#0B0A57]/30 hover:bg-[#0B0A57]/30">
                {heroContent[currentSlide].subtitle}
              </Badge>

              {/* Main headline */}
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight font-poppins">
                Empowering Your Future with
                <span className="text-white"> Smart Tech</span> and
                <span className="text-white"> Scalable Solutions</span>
              </h2>

              {/* Value proposition */}
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Transform your business with cutting-edge software development,
                AI automation, and dedicated IT support services tailored for
                modern enterprises.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#0B0A57] px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact">
                  Let`s Work Together
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

            {/* Company statistics */}
            <div className="flex items-center space-x-8 pt-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Highlights */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                {/* Service highlights grid */}
                <div className="grid grid-cols-2 gap-4">
                  {serviceHighlights.map((service, index) => (
                    <div
                      key={index}
                      className="bg-[#0B0A57]/20 rounded-lg p-4 text-center backdrop-blur-sm"
                    >
                      <service.icon className="h-8 w-8 mx-auto mb-2 text-white" />
                      <div className="text-sm font-medium text-white">
                        {service.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
