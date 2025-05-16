"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GalleryGrid from "./components/gallery-grid"
import CategoryFilter from "./components/category-filter"
import Lightbox from "./components/lightbox"
import ThemeToggle from "./components/theme-toggle"
import { images } from "./data/images"
import "./styles.css"

export default function VenoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [filteredImages, setFilteredImages] = useState(images)

  // Filter images when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(images)
    } else {
      setFilteredImages(images.filter((image) => image.category === selectedCategory))
    }
  }, [selectedCategory])

  // Get unique categories from images
  const categories = ["all", ...Array.from(new Set(images.map((image) => image.category)))]

  // Handle image click to open lightbox
  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  // Handle lightbox close
  const handleLightboxClose = () => {
    setSelectedImage(null)
  }

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div className={`gallery-container ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <header className="gallery-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="gallery-title"
        >
          Veno<span className="accent-text">Gallery</span>
        </motion.h1>
        <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </header>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <GalleryGrid images={filteredImages} handleImageClick={handleImageClick} />

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            handleClose={handleLightboxClose}
            images={filteredImages}
            setSelectedImage={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
