"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Camera } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/1.jpeg",
    alt: "Athletes training",
    category: "Training",
    title: "Morning Training Session",
    description:
      "Young athletes during an early morning training session focused on endurance, discipline, and consistency.",
    date: "March 2026",
  },
  {
    id: 2,
    src: "/images/gallery/2.jpeg",
    alt: "Track athletes",
    category: "Athletes",
    title: "Focused on the Finish Line",
    description:
      "Upcoming athletes pushing themselves during competitive track training.",
    date: "March 2026",
  },
  {
    id: 3,
    src: "/images/gallery/3.jpeg",
    alt: "Student athletes",
    category: "Education",
    title: "Balancing School and Sports",
    description:
      "Supporting student-athletes with educational resources and encouragement to stay focused in class and training.",
    date: "February 2026",
  },
  {
    id: 4,
    src: "/images/gallery/4.jpeg",
    alt: "Team discussion",
    category: "Mentorship",
    title: "Mentorship & Guidance",
    description:
      "Athletes during a mentorship session focused on discipline, mindset, and personal growth.",
    date: "February 2026",
  },
  {
    id: 5,
    src: "/images/gallery/5.jpeg",
    alt: "Community support",
    category: "Community",
    title: "Growing Together",
    description:
      "Community members, supporters, and athletes coming together to encourage youth development through sports.",
    date: "January 2026",
  },
  {
    id: 6,
    src: "/images/gallery/6.jpeg",
    alt: "Athletic competition",
    category: "Events",
    title: "Competition Day",
    description:
      "Young athletes showcasing their talent and determination during a local athletics event.",
    date: "January 2026",
  },
  {
    id: 7,
    src: "/images/gallery/7.jpeg",
    alt: "Athletes warming up",
    category: "Training",
    title: "Preparation & Discipline",
    description: "Warm-up and preparation sessions before training activities.",
    date: "December 2025",
  },
  {
    id: 8,
    src: "/images/gallery/8.jpeg",
    alt: "Support initiatives",
    category: "Support",
    title: "Supporting Young Athletes",
    description:
      "Providing running kits and essential gear to athletes committed to growth and development.",
    date: "December 2025",
  },
  {
    id: 9,
    src: "/images/gallery/9.jpeg",
    alt: "Athlete team",
    category: "Athletes",
    title: "Built Through Teamwork",
    description:
      "A strong athletics community built on discipline, support, and shared goals.",
    date: "November 2025",
  },
];

const categories = [
  "All",
  "Training",
  "Athletes",
  "Education",
  "Mentorship",
  "Community",
  "Events",
  "Support",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-34 py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Gallery
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Moments from the Journey
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore moments from training sessions, mentorship programs,
                athlete support initiatives, competitions, and community
                activities that reflect the mission of Team Emmanuel Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">
                {activeCategory === "All" ? "All Moments" : activeCategory}
              </h2>
            </div>

            {filteredImages.length > 0 ? (
              <GalleryGrid images={filteredImages} columns={3} />
            ) : (
              <div className="text-center py-20">
                <Camera className="h-14 w-14 mx-auto text-muted-foreground/40 mb-4" />

                <p className="text-muted-foreground">
                  No images available in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Join the Movement
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Support the Next Generation of Athletes
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Help young athletes access opportunities, mentorship, education
                support, and the resources they need to continue growing through
                sports.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/donate">Support an Athlete</Link>
                </Button>

                <Button asChild size="lg" variant="outline">
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
