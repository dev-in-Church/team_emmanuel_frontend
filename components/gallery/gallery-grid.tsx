"use client"

import { useState } from "react"
import Image from "next/image"
import { GalleryLightbox } from "./gallery-lightbox"
import { ZoomIn, Calendar } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description?: string
  date?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

export function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {images.map((image, index) => (
          <div key={image.id} className="group">
            {/* Image Container */}
            <button
              onClick={() => openLightbox(index)}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="h-6 w-6 text-foreground" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold text-primary-foreground bg-primary px-3 py-1.5 rounded-full shadow-lg">
                  {image.category}
                </span>
              </div>
            </button>

            {/* Caption Below Image */}
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {image.title}
              </h3>
              {image.description && (
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {image.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="px-2 py-0.5 bg-muted rounded-full">{image.category}</span>
                {image.date && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {image.date}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <GalleryLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  )
}
