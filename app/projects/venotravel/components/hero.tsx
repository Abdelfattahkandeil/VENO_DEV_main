"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Users } from "lucide-react"

interface HeroProps {
  onBookNow: () => void
}

export default function Hero({ onBookNow }: HeroProps) {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    dates: "",
    travelers: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search params:", searchParams)
    // In a real app, this would trigger a search
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-black/30 z-10"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/venotravel.jpg') center center / cover no-repeat`,
          }}
        ></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover the World's <span className="text-[#F07167]">Hidden Gems</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Explore breathtaking destinations, create unforgettable memories, and embark on the journey of a lifetime
              with VenoTravel.
            </p>

            {/* Search form */}
            <div className="bg-white rounded-lg p-4 shadow-lg mb-8">
              <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                    Destination
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={searchParams.destination}
                      onChange={handleChange}
                      placeholder="Where to?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                    />
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
                    Dates
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      value={searchParams.dates}
                      onChange={handleChange}
                      placeholder="When?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
                    Travelers
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="travelers"
                      name="travelers"
                      value={searchParams.travelers}
                      onChange={handleChange}
                      placeholder="How many?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                    />
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-[#0081A7] hover:bg-[#0081A7]/90 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </form>
            </div>

            <button
              onClick={onBookNow}
              className="bg-[#F07167] hover:bg-[#F07167]/90 text-white py-4 px-8 rounded-full text-lg font-medium transition-transform hover:scale-105 shadow-lg"
            >
              Book Your Adventure Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#FDFCDC"
            fillOpacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
