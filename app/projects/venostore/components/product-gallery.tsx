"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import type { Product } from "../data/products"

interface ProductGalleryProps {
  product: Product
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  // Use product images or fallback to placeholders
  const images = product.images || [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=Image+2",
    "/placeholder.svg?height=600&width=600&text=Image+3",
    "/placeholder.svg?height=600&width=600&text=Image+4",
  ]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsZoomed(false)
  }

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div className="relative mb-4 rounded-2xl overflow-hidden bg-white">
        <div
          className={`aspect-square relative overflow-hidden cursor-zoom-in ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          onClick={() => setIsZoomed(!isZoomed)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : ""}`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }
                : {}
            }
          />

          {!isZoomed && (
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
              <ZoomIn size={20} className="text-gray-700" />
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md text-gray-700 hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md text-gray-700 hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`
              w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all
              ${currentImageIndex === index ? "border-[#1a73e8] shadow-md" : "border-transparent"}
            `}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${product.name} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
