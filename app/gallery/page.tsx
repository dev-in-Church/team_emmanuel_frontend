"use client";

import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/1.jpg",
    alt: "Athletes training",
    title: "Morning Training Session",
    description:
      "Young athletes during an early morning training session focused on endurance, discipline, and consistency.",
  },
  {
    id: 2,
    src: "/images/gallery/2.jpg",
    alt: "Track athletes",
    title: "Focused on the Finish Line",
    description:
      "Upcoming athletes pushing themselves during competitive track training.",
  },
  {
    id: 3,
    src: "/images/gallery/3.jpg",
    alt: "Student athletes",
    title: "Balancing School and Sports",
    description:
      "Supporting student-athletes with educational resources and encouragement to stay focused in class and training.",
  },
  {
    id: 4,
    src: "/images/gallery/4.jpg",
    alt: "Team discussion",
    title: "Mentorship & Guidance",
    description:
      "Athletes during a mentorship session focused on discipline, mindset, and personal growth.",
  },
  {
    id: 5,
    src: "/images/gallery/5.jpg",
    alt: "Community support",
    title: "Growing Together",
    description:
      "Community members, supporters, and athletes coming together to encourage youth development through sports.",
  },
  {
    id: 6,
    src: "/images/gallery/6.jpg",
    alt: "Athletic competition",
    title: "Competition Day",
    description:
      "Young athletes showcasing their talent and determination during a local athletics event.",
  },
  {
    id: 7,
    src: "/images/gallery/7.jpg",
    alt: "Athletes warming up",
    title: "Preparation & Discipline",
    description: "Warm-up and preparation sessions before training activities.",
  },
  {
    id: 8,
    src: "/images/gallery/8.jpg",
    alt: "Support initiatives",
    title: "Supporting Young Athletes",
    description:
      "Providing running kits and essential gear to athletes committed to growth and development.",
  },
  {
    id: 9,
    src: "/images/gallery/9.jpg",
    alt: "Athlete team",
    title: "Built Through Teamwork",
    description:
      "A strong athletics community built on discipline, support, and shared goals.",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openLightbox = (index: number, e: React.MouseEvent<HTMLElement>) => {
    lastTriggerRef.current = e.currentTarget;
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    lastTriggerRef.current?.focus();
  };

  const showNext = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  };

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  // Lock body scroll while the lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeIndex]);

  // Keyboard navigation: Escape to close, arrows to navigate
  useEffect(() => {
    if (activeIndex === null) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          eyebrow="Gallery"
          title="Moments from the Journey"
          description="Explore moments from training sessions, mentorship programs, athlete support initiatives, competitions, and community activities that reflect the mission of Team Emmanuel Foundation."
          image="/images/gallery/5.jpg"
        />

        {/* Masonry-Style Grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={(e) => openLightbox(index, e)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-muted border border-border/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left"
                  aria-label={`View ${image.title}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-neutral-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-neutral-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      View Details
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[activeIndex].title}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            <div className="flex justify-end p-4 md:p-6 z-10">
              <button
                ref={closeButtonRef}
                onClick={closeLightbox}
                className="text-white/70 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-sm"
                aria-label="Close gallery view"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center px-4 md:px-16">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 md:left-6 text-white/70 hover:text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div
                className="relative w-full max-w-4xl h-[50vh] md:h-[65vh] select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 md:right-6 text-white/70 hover:text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div
              className="bg-gradient-to-t from-black/90 via-black/80 to-transparent pt-12 pb-8 px-6 md:px-12 text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-2xl mx-auto space-y-2 animate-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  {galleryImages[activeIndex].title}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {galleryImages[activeIndex].description}
                </p>
                <div className="pt-2 text-xs text-white/40 tracking-wider font-mono">
                  {activeIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="py-14 lg:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Support the Next Generation of Athletes
              </h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                Help young athletes access opportunities, mentorship, and the
                resources they need to continue growing through sports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
                >
                  <Link href="/donate">
                    Support an Athlete
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-primary-foreground hover:bg-white/20 rounded-full px-8"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
