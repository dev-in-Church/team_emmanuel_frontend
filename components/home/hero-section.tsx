"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Play } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "/images/hero.jpeg",
    title: "Empowering Young Athletes",
    subtitle: "Through Sports & Education",
  },
  {
    image: "/images/hero2.jpeg",
    title: "Unlocking Potential",
    subtitle: "Support. Train. Succeed.",
  },
  {
    image: "/images/hero3.jpeg",
    title: "Building Future Champions",
    subtitle: "On the Track and in School",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground w-full">
      {/* Background Slides with subtle Ken Burns motion */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-35 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            loading="eager"
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Cinematic Deep Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-transparent opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent opacity-80" />

      {/* Ambient Lighting Background Layer */}
      <div className="absolute top-24 left-12 w-80 h-80 bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      {/* Main Content Layout — Integrated top padding buffers space for header overlay */}
      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-bold tracking-widest uppercase">
              🏃‍♂️ Born To Run
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.10] text-balance">
              {heroSlides[currentSlide].title},{" "}
              <span className="text-primary block sm:inline">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>

            <p className="text-md sm:text-lg text-white/80 leading-relaxed max-w-xl text-balance font-medium">
              Based in Iten, Kenya 'the home of champions', Team Emmanuel
              Foundation partners directly with aspiring youth. We provide elite
              training gear, educational support, and professional mentorship to
              turn raw discipline into life-changing opportunity.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-6 shadow-lg shadow-primary/20 transition-all duration-300 group"
              >
                <Link href="/programs">
                  Our Programs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Custom Carousel Dots */}
            <div className="flex items-center gap-2.5 pt-6">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ease-out ${
                    index === currentSlide
                      ? "w-12 bg-primary"
                      : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Preview Frame Card */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative mx-auto max-w-sm aspect-[4/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl group/card">
              <Image
                src={heroSlides[(currentSlide + 1) % heroSlides.length].image}
                alt="Community preview"
                fill
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-sm flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-xs">See our impact</p>
                  <p className="text-white/60 text-[10px]">
                    Watch gallery highlights
                  </p>
                </div>
                <Link
                  href="/gallery"
                  className="w-10 h-10  flex items-center justify-center text-primary-foreground shadow transition-transform hover:scale-105"
                >
                  <Film className="h-10 w-10 fill-primary text-white ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
