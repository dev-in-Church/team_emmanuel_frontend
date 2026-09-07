"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/hero.jpg",
  "/images/gallery/52.jpg",
  "/images/hero3.jpeg",
];

const SLIDE_DURATION = 6000;

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative h-[80dvh] min-h-[500px] max-h-[720px] flex items-center overflow-hidden bg-neutral-950 w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background Slides with subtle Ken Burns motion */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-35 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Cinematic Deep Vignettes — fixed dark overlay, independent of theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/35 to-neutral-950/60" />

      {/* Ambient Lighting Background Layer */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-primary/15 rounded-full blur-[130px] opacity-70 pointer-events-none" />

      {/* Main Content Layout — centered */}
      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-bold tracking-widest uppercase">
            Team Emmanuel Foundation
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            Empowering Young Athletes{" "}
            <span className="text-primary block sm:inline">
              Through Sports & Education
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl text-balance font-medium">
            Based in Iten, Kenya &mdash; &ldquo;the home of champions&rdquo;
            &mdash; Team Emmanuel Foundation partners directly with aspiring
            youth. We provide elite training gear, educational support, and
            professional mentorship to turn raw discipline into life-changing
            opportunity.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-md font-bold transition-all duration-300"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Custom Carousel Dots */}
          <div
            className="flex items-center justify-center gap-2.5 pt-4"
            role="tablist"
            aria-label="Hero background images"
          >
            {heroImages.map((image, index) => (
              <button
                key={image}
                onClick={() => setCurrentSlide(index)}
                role="tab"
                aria-selected={index === currentSlide}
                className={`h-1 rounded-full transition-all duration-500 ease-out ${
                  index === currentSlide
                    ? "w-12 bg-primary"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Show background ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave — layered, gradient-filled */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg
          className="block w-full h-[140px] sm:h-[180px]"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradientBack" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.12" />
              <stop
                offset="50%"
                stopColor="var(--primary)"
                stopOpacity="0.22"
              />
              <stop
                offset="100%"
                stopColor="var(--primary)"
                stopOpacity="0.12"
              />
            </linearGradient>
            <linearGradient id="waveGradientFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop
                offset="100%"
                stopColor="color-mix(in oklch, var(--primary), black 25%)"
              />
            </linearGradient>
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

          {/* Back wave — soft, translucent */}
          <path
            d="M0 130 C220 90 380 170 620 140 C860 110 1040 60 1440 100 L1440 200 L0 200 Z"
            fill="url(#waveGradientBack)"
          />

          {/* Front wave — solid gradient with subtle pattern */}
          <path
            d="M0 150 C240 110 420 190 680 160 C940 130 1160 90 1440 130 L1440 200 L0 200 Z"
            fill="url(#waveGradientFront)"
          />
          <path
            d="M0 150 C240 110 420 190 680 160 C940 130 1160 90 1440 130 L1440 200 L0 200 Z"
            fill="url(#frontPattern)"
          />
        </svg>
      </div>
    </section>
  );
}
