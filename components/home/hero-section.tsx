"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Play } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "/images/hero.jpg",
    title: "Empowering Young Athletes",
    subtitle: "Through Sports & Education",
  },
  {
    image: "/images/hero2.jpg",
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
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-foreground w-full">
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
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/10 to-transparent opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent opacity-20" />

      {/* Ambient Lighting Background Layer */}
      <div className="absolute top-24 left-12 w-80 h-80 bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      {/* Main Content Layout — Integrated top padding buffers space for header overlay */}
      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-bold tracking-widest uppercase">
              🏃‍♂️ Born To Run
            </div> */}

            <h1 className="text-4xl sm:text-5xl xl:text-3xl font-extrabold text-white tracking-tight leading-[1.10] text-balance">
              {/* {heroSlides[currentSlide].title},{" "} */}
              Empowering Young Athletes <br />
              <span className="text-primary block sm:inline">
                {/* {heroSlides[currentSlide].subtitle} */}
                Through Sports & Education
              </span>
            </h1>

            <p className="text-md sm:text-sm text-white/80 leading-relaxed max-w-xl text-balance font-medium">
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
          {/* <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative mx-auto max-w-sm aspect-[16/12] rounded-sm overflow-hidden border border-white/10 shadow-2xl group/card">
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
          </div> */}
        </div>
      </div>
      {/* Bottom shape */}
      <div className="absolute inset-x-0 bottom-0">
        {/* Back layer */}
        <svg
          className="absolute bottom-0 h-[210px] w-full"
          viewBox="0 0 1440 210"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="backPattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-20 60 C20 20 60 100 100 60"
                fill="none"
                stroke="#0e5420"
                strokeWidth="2"
                opacity="0.12"
              />
            </pattern>
          </defs>

          {/* Back wave */}
          <path
            d="
        M0 110
        C240 190 400 170 600 125
        C850 70 1050 120 1440 55
        L1440 210
        L0 210
        Z
      "
            fill="#D8F0DD"
          />

          {/* Pattern */}
          <path
            d="
        M0 110
        C240 190 400 170 600 125
        C850 70 1050 120 1440 55
        L1440 210
        L0 210
        Z
      "
            fill="url(#backPattern)"
          />
        </svg>

        {/* Front layer */}
        <svg
          className="relative block h-[170px] w-full"
          viewBox="0 0 1440 170"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="frontPattern"
              width="70"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="white" opacity="0.12" />

              <circle cx="45" cy="40" r="1.5" fill="white" opacity="0.08" />

              <path
                d="M0 70 L70 0"
                stroke="white"
                strokeWidth="1"
                opacity="0.05"
              />
            </pattern>
          </defs>

          {/* Front wave */}
          <path
            d="
        M0 85
        C200 140 370 145 570 100
        C780 50 930 45 1120 80
        C1250 105 1350 110 1440 75
        L1440 170
        L0 170
        Z
      "
            fill="#0e5420"
          />

          {/* Pattern overlay */}
          <path
            d="
        M0 85
        C200 140 370 145 570 100
        C780 50 930 45 1120 80
        C1250 105 1350 110 1440 75
        L1440 170
        L0 170
        Z
      "
            fill="url(#frontPattern)"
          />
        </svg>
      </div>
    </section>
  );
}
