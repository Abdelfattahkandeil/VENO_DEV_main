"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Lightbox({ image, handleClose, images, setSelectedImage }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Find the index of the current image
  useEffect(() => {
    const index = images.findIndex((img) => img.id === image.id)
    setCurrentIndex(index)
  }, [image, images])

  // Navigate to previous image
  const handlePrevious = (e) => {
    e.stopPropagation()
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setSelectedImage(images[newIndex])
  }

  // Navigate to next image
  const handleNext = (e) => {
    e.stopPropagation()
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(images[newIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") handlePrevious(e)
      if (e.key === "ArrowRight") handleNext(e)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, images])

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={handleClose}>
          <X size={24} />
        </button>

        <div className="lightbox-navigation">
          <button className="nav-button prev" onClick={handlePrevious}>
            <ChevronLeft size={30} />
          </button>

          <div className="lightbox-image-container">
            <img src={image.url || "/placeholder.svg"} alt={image.title} className="lightbox-image" />
          </div>

          <button className="nav-button next" onClick={handleNext}>
            <ChevronRight size={30} />
          </button>
        </div>

        <div className="lightbox-info">
          <h2>{image.title}</h2>
          <p className="lightbox-description">{image.description}</p>
          <span className="lightbox-category">{image.category}</span>
        </div>

        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </motion.div>
  )
}
