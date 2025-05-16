"use client"

import { motion } from "framer-motion"
import ImageCard from "./image-card"

export default function GalleryGrid({ images, handleImageClick }) {
  return (
    <motion.div
      className="gallery-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {images.map((image, index) => (
        <ImageCard key={image.id} image={image} handleImageClick={handleImageClick} index={index} />
      ))}
    </motion.div>
  )
}
