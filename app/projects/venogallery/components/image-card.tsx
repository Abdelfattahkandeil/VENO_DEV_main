"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ImageCard({ image, handleImageClick, index }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className="image-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      onClick={() => handleImageClick(image)}
    >
      <div className="image-wrapper">
        <img
          src={image.url || "/placeholder.svg"}
          alt={image.title}
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "loaded" : ""}
        />
        <div className="image-overlay">
          <h3>{image.title}</h3>
          <span className="category-tag">{image.category}</span>
        </div>
      </div>
    </motion.div>
  )
}
