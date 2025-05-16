"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Star, Clock, ArrowRight } from "lucide-react"

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

interface DestinationCardProps {
  destination: Destination
  onBookNow: (destination: Destination) => void
}

export default function DestinationCard({ destination, onBookNow }: DestinationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-64">
        <Image src={destination.image || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-[#0081A7]">
          ${destination.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-[#F07167] mr-1" />
          <span className="text-gray-600 text-sm">{destination.location}</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(destination.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{destination.rating.toFixed(1)}</span>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3">{destination.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>5-7 days</span>
          </div>

          <button
            onClick={() => onBookNow(destination)}
            className="flex items-center gap-2 px-4 py-2 bg-[#0081A7] text-white rounded-lg hover:bg-[#0081A7]/90 transition-colors"
          >
            Book Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
