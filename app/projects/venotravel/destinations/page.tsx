"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/header"
import Footer from "../components/footer"
import DestinationCard from "../components/destination-card"
import BookingModal from "../components/booking-modal"
import { destinations } from "../data/destinations"

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeRegion, setActiveRegion] = useState("all")

  const regions = ["all", "europe", "asia", "africa", "americas", "oceania"]

  const handleBookNow = (destination: any) => {
    setSelectedDestination(destination)
    setIsModalOpen(true)
  }

  // Filter destinations based on search query and active region
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRegion = activeRegion === "all" || destination.region === activeRegion

    return matchesSearch && matchesRegion
  })

  return (
    <div className="min-h-screen bg-[#FDFCDC] text-gray-800">
      {/* Back to portfolio link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#0081A7] hover:text-[#F07167] transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      <Header activePage="destinations" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#0081A7]">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Our Destinations</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover breathtaking locations around the world and find your next adventure.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F07167]"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </motion.div>
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

      {/* Regions filter */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                  activeRegion === region
                    ? "bg-[#0081A7] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {region === "all" ? "All Regions" : region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>

          {/* Destinations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DestinationCard destination={destination} onBookNow={handleBookNow} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">No destinations found</h3>
                  <p className="text-gray-600 mb-4">We couldn't find any destinations matching your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setActiveRegion("all")
                    }}
                    className="px-6 py-2 bg-[#0081A7] text-white rounded-lg hover:bg-[#0081A7]/90 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#0081A7]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Travel Inspiration</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and receive exclusive offers, travel tips, and destination guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
              />
              <button className="px-6 py-3 bg-[#F07167] text-white rounded-lg hover:bg-[#F07167]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} destination={selectedDestination} />
    </div>
  )
}
