"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Users, Clock, Star, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/header"
import Footer from "../components/footer"
import BookingModal from "../components/booking-modal"

// Sample packages data
const packages = [
  {
    id: 1,
    title: "European Highlights",
    description: "Experience the best of Europe with this 14-day tour through iconic cities and landmarks.",
    price: 2499,
    duration: "14 days",
    groupSize: "10-15 people",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    featured: true,
  },
  {
    id: 2,
    title: "Asian Adventure",
    description: "Explore the diverse cultures and landscapes of Southeast Asia on this unforgettable journey.",
    price: 1899,
    duration: "12 days",
    groupSize: "8-12 people",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.7,
    destinations: ["Bangkok", "Hanoi", "Siem Reap", "Bali"],
  },
  {
    id: 3,
    title: "African Safari",
    description: "Witness the incredible wildlife of Africa on this premium safari experience.",
    price: 3299,
    duration: "10 days",
    groupSize: "6-10 people",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    destinations: ["Serengeti", "Masai Mara", "Kruger Park"],
  },
  {
    id: 4,
    title: "South American Expedition",
    description: "From the Amazon rainforest to Machu Picchu, discover the wonders of South America.",
    price: 2799,
    duration: "16 days",
    groupSize: "8-14 people",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    destinations: ["Rio de Janeiro", "Machu Picchu", "Galapagos Islands"],
  },
  {
    id: 5,
    title: "Mediterranean Cruise",
    description: "Sail the crystal-clear waters of the Mediterranean and visit charming coastal towns.",
    price: 1999,
    duration: "8 days",
    groupSize: "Up to 100 people",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.6,
    destinations: ["Santorini", "Mykonos", "Dubrovnik", "Venice"],
  },
  {
    id: 6,
    title: "Japan Explorer",
    description: "Discover the perfect blend of ancient traditions and modern wonders in Japan.",
    price: 2599,
    duration: "10 days",
    groupSize: "8-12 people",
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    destinations: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
  },
]

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  const handleBookNow = (pkg: any) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  // Featured package (first in the array with featured: true)
  const featuredPackage = packages.find((pkg) => pkg.featured)

  // Filter options
  const filters = ["all", "under $2000", "$2000-$3000", "over $3000"]

  // Filter packages based on active filter
  const filteredPackages = packages.filter((pkg) => {
    if (activeFilter === "all") return true
    if (activeFilter === "under $2000") return pkg.price < 2000
    if (activeFilter === "$2000-$3000") return pkg.price >= 2000 && pkg.price <= 3000
    if (activeFilter === "over $3000") return pkg.price > 3000
    return true
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

      <Header activePage="packages" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#0081A7]">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Travel Packages</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Carefully curated travel experiences to make your journey unforgettable.
            </p>
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

      {/* Featured Package */}
      {featuredPackage && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Featured Package</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPackage.image || "/placeholder.svg"}
                    alt={featuredPackage.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#F07167] text-white px-4 py-1 rounded-full font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{featuredPackage.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(featuredPackage.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{featuredPackage.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{featuredPackage.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar size={18} className="text-[#0081A7] mr-2" />
                      <span>{featuredPackage.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={18} className="text-[#0081A7] mr-2" />
                      <span>{featuredPackage.groupSize}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPackage.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="bg-[#0081A7]/10 text-[#0081A7] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-[#0081A7]">${featuredPackage.price}</div>
                    <button
                      onClick={() => handleBookNow(featuredPackage)}
                      className="px-6 py-3 bg-[#F07167] text-white rounded-lg hover:bg-[#F07167]/90 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Packages */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">All Packages</h2>

          {/* Price filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-[#0081A7] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Packages grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages
              .filter((pkg) => !pkg.featured)
              .map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-48 md:h-full">
                      <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(pkg.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-xs text-gray-600">{pkg.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div className="flex items-center">
                          <Clock size={14} className="text-[#0081A7] mr-1" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="text-[#0081A7] mr-1" />
                          <span>{pkg.groupSize}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-[#0081A7]">${pkg.price}</div>
                        <button
                          onClick={() => handleBookNow(pkg)}
                          className="flex items-center gap-1 px-4 py-2 bg-[#0081A7] text-white rounded-lg hover:bg-[#0081A7]/90 transition-colors"
                        >
                          Book Now
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#0081A7]/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We create unforgettable travel experiences with attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#0081A7]/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-[#0081A7]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Our experienced local guides provide insider knowledge and ensure a smooth journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#0081A7]/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-[#0081A7]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose from a variety of departure dates or customize your own itinerary.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#0081A7]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#0081A7]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Small Groups</h3>
              <p className="text-gray-600">
                Travel with like-minded people in small groups for a more personalized experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} destination={selectedPackage} />
    </div>
  )
}
