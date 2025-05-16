"use client"

import { motion } from "framer-motion"

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <motion.div
      className="category-filter"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`filter-button ${selectedCategory === category ? "active" : ""}`}
          onClick={() => setSelectedCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.button>
      ))}
    </motion.div>
  )
}
