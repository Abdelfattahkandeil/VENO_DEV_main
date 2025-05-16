"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import DestinationCard from "./destination-card"

interface Destination {
  id: number
  name: string
  location: string
  description: string
  price: number
  image: string
  rating: number
  category: string[]
}

interface DestinationSectionProps {
  destinations: Destination[]
  onBookNow: (destination: Destination) => void
}

export default function DestinationSection({ destinations, onBookNow }: DestinationSectionProps) {
  const [activeTab, setActiveTab] = useState("all")

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(destinations.flatMap((d) => d.category)))]

  // Filter destinations based on active tab
  const filteredDestinations =
    activeTab === "all" ? destinations : destinations.filter((d) => d.category.includes(activeTab))

  return (
    <section className="py-20 bg-[#FDFCDC]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="text-[#0081A7]">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of stunning destinations around the world, each offering unique experiences
            and unforgettable memories.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeTab === category
                  ? "bg-[#0081A7] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DestinationCard destination={destination} onBookNow={onBookNow} />
            </motion.div>
          ))}
        </div>

        {/* Show more button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-[#0081A7] text-[#0081A7] rounded-full font-medium hover:bg-[#0081A7] hover:text-white transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  )
}
