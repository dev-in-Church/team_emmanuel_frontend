"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Play } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "/images/hero-bg.jpg",
    title: "Empowering Young Athletes",
    subtitle: "Through Sports & Education",
  },
  {
    image: "/images/community.jpg",
    title: "Unlocking Potential",
    subtitle: "Support. Train. Succeed.",
  },
  {
    image: "/images/education.jpg",
    title: "Building Future Champions",
    subtitle: "On the Track and in School",
  },
];

const stats = [
  { value: "5000+", label: "Lives Impacted", suffix: "" },
  { value: "50+", label: "Communities", suffix: "" },
  { value: "100+", label: "Volunteers", suffix: "" },
  { value: "10+", label: "Years of Service", suffix: "" },
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
    <section className="relative max-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            loading="eager"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-foreground/50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--foreground) 0%, transparent 75%)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--foreground) 0%, transparent 50%)",
          opacity: 0.4,
        }}
      />

      {/* Additional gradient for text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30" /> */}

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-5xl xl:text-4xl font-bold text-background leading-tight mb-6"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
            >
              {heroSlides[currentSlide].title},{" "}
              <span className="text-primary">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-background/80 leading-relaxed mb-8 max-w-xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Team Emmanuel Foundation is a youth-focused community initiative
              that supports aspiring athletes with the resources they need to
              succeed. Through access to training gear, education support, and
              guidance, we help young people build discipline, confidence, and
              opportunity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-secondary/40 transition-all text-base px-8"
              >
                <Link href="/donate">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground py-5 text-base hover:bg-background/90 rounded-full"
              >
                <Link href="/programs">
                  Our Programs
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 mt-10">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-10 bg-secondary"
                      : "w-6 bg-background/40 hover:bg-background/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
