"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description?: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  const currentImage = images[currentIndex]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrevious()
      if (e.key === "ArrowRight") onNext()
    },
    [isOpen, onClose, onPrevious, onNext]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !currentImage) return null

  return (
    <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-background hover:bg-background/10 z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/10 h-12 w-12"
        onClick={onPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/10 h-12 w-12"
        onClick={onNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Image Container */}
      <div className="w-full max-w-5xl px-16 py-8">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Image Info */}
        <div className="mt-6 text-center text-background">
          <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
          {currentImage.description && (
            <p className="text-background/70 max-w-2xl mx-auto">{currentImage.description}</p>
          )}
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-sm text-background/50">
              {currentIndex + 1} of {images.length}
            </span>
            <span className="text-sm px-3 py-1 bg-primary/20 rounded-full text-primary">
              {currentImage.category}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto py-2 px-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => {
              const diff = index - currentIndex
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext()
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrevious()
              }
            }}
            className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 transition-all ${
              index === currentIndex
                ? "ring-2 ring-primary scale-110"
                : "opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
