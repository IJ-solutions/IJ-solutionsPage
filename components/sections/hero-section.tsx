"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Carousel content
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
    type: "image",
    src: "/images/heroImage.jpg",
    title: "Enterprise SaaS Solutions",
    subtitle: "Scalable Technology for Growth",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    setIsAutoPlaying(false);
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

  // Handle autoplay and slide switching for videos on mobile
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const currentContent = heroContent[currentSlide];

    if (currentContent.type === "video") {
      const videoEl = document.getElementById(
        `hero-video-${currentContent.id}`
      ) as HTMLVideoElement;

      if (videoEl) {
        videoEl.currentTime = 0;

        // Force autoplay on mobile
        videoEl.play().catch(() => {
          console.warn("Autoplay blocked on mobile browser.");
        });

        // Move to next slide when video ends
        const onEnded = () => nextSlide();
        videoEl.addEventListener("ended", onEnded);

        return () => {
          videoEl.removeEventListener("ended", onEnded);
        };
      }
    } else {
      // Image slides auto-advance every 8s
      if (isAutoPlaying) {
        interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % heroContent.length);
        }, 8000);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, isAutoPlaying]);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0B0A57]">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {heroContent.map((content, index) => (
          <div
            key={content.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            {content.type === "video" ? (
              <video
                id={`hero-video-${content.id}`}
                autoPlay
                muted
                playsInline
                loop={false} // so we detect "ended"
                className="w-full h-full object-cover"
              >
                <source src={content.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={content.src}
                  alt={content.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white scale-110 sm:scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="bg-[#0B0A57]/20 text-white border-[#0B0A57]/30 hover:bg-[#0B0A57]/30 mb-4 sm:mb-6">
          {heroContent[currentSlide].subtitle}
        </Badge>

        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight font-poppins text-white mb-4 sm:mb-6">
          Empowering Your Future with
          <span className="text-white"> Smart Tech</span> and
          <span className="text-white"> Scalable Solutions</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-10">
          Transform your business with cutting-edge software development, AI
          automation, and dedicated IT support services tailored for modern
          enterprises.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 sm:mt-0">
          <Button
            asChild
            size="lg"
            className="bg-blue-950 hover:bg-white text-[#0B0A57] hover:text-[#0B0A57] px-8 py-4 text-base sm:text-lg font-semibold"
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
            className="border-white text-white hover:bg-white hover:text-[#0B0A57] px-8 py-4 text-base sm:text-lg bg-transparent"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
