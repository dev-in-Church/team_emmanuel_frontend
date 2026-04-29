"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Camera, Heart } from "lucide-react"

// Sample gallery images - in production, these would come from a database/CMS
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    alt: "Children in classroom",
    category: "Education",
    title: "Back to School Program",
    description: "Students receiving school supplies during our annual back to school drive. Over 500 children benefited from this initiative.",
    date: "March 2026",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    alt: "Medical camp",
    category: "Healthcare",
    title: "Mobile Health Clinic",
    description: "Our medical team providing free health checkups in rural Turkana. We served over 300 patients during this outreach.",
    date: "February 2026",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop",
    alt: "Community gathering",
    category: "Community",
    title: "Community Meeting",
    description: "Local leaders discussing development projects with our team. Collaboration with communities ensures sustainable impact.",
    date: "February 2026",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
    alt: "Food distribution",
    category: "Food Security",
    title: "Food Distribution Drive",
    description: "Distributing food supplies to families affected by drought. This program reached over 1,000 families in Marsabit County.",
    date: "January 2026",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1594708767771-a7502c1f9f9a?w=800&h=600&fit=crop",
    alt: "Youth training",
    category: "Youth",
    title: "Skills Training Workshop",
    description: "Young people learning practical skills at our training center. This batch graduated with certificates in carpentry and welding.",
    date: "January 2026",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
    alt: "Volunteers working",
    category: "Volunteers",
    title: "Volunteer Day",
    description: "Our dedicated volunteers preparing care packages for distribution. Their tireless efforts make our work possible.",
    date: "December 2025",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
    alt: "Water project",
    category: "Community",
    title: "Clean Water Project",
    description: "Inauguration of a new borehole providing clean water to the community. This project serves over 2,000 residents daily.",
    date: "December 2025",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    alt: "Children playing",
    category: "Child Welfare",
    title: "Children at Play",
    description: "Children enjoying new playground equipment at the community center. Safe spaces for play are essential for child development.",
    date: "November 2025",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
    alt: "Gala event",
    category: "Events",
    title: "Annual Charity Gala",
    description: "Guests at our annual fundraising gala supporting education programs. The event raised over KES 5 million for scholarships.",
    date: "November 2025",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    alt: "Tree planting",
    category: "Environment",
    title: "Tree Planting Initiative",
    description: "Community members participating in our environmental conservation program. Over 5,000 trees planted this season.",
    date: "October 2025",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop",
    alt: "Mothers and children",
    category: "Healthcare",
    title: "Maternal Health Program",
    description: "Mothers and children at our maternal and child health clinic. We provide prenatal care, vaccinations, and nutrition support.",
    date: "October 2025",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    alt: "School construction",
    category: "Education",
    title: "New Classroom Construction",
    description: "Building new classrooms to accommodate more students. This project added 4 new classrooms to the school.",
    date: "September 2025",
  },
]

const categories = [
  "All",
  "Education",
  "Healthcare",
  "Community",
  "Youth",
  "Child Welfare",
  "Food Security",
  "Events",
  "Volunteers",
  "Environment",
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/community.jpg"
              alt="Gallery"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
                <Camera className="h-4 w-4" />
                <span>Photo Gallery</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 text-balance">
                Our Work in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Pictures
                </span>
              </h1>
              <p className="text-lg md:text-xl text-background/80 leading-relaxed">
                Browse through photos from our programs, events, and community activities. 
                Each image tells a story of hope, transformation, and community impact.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="border-b border-border sticky top-[136px] bg-background/95 backdrop-blur-md z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredImages.length}</span> {filteredImages.length === 1 ? "photo" : "photos"}
                {activeCategory !== "All" && <span> in <span className="font-semibold text-primary">{activeCategory}</span></span>}
              </p>
            </div>

            {filteredImages.length > 0 ? (
              <GalleryGrid images={filteredImages} columns={3} />
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-2xl">
                <Camera className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground text-lg mb-2">No photos found in this category.</p>
                <p className="text-sm text-muted-foreground/70">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Want to Be Part of Our Story?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join us as a volunteer, donor, or partner and help us create more moments 
                of impact in communities across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25">
                  <Link href="/donate">
                    Support Our Work
                    <Heart className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
