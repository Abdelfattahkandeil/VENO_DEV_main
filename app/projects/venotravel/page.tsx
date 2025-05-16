"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "./components/header"
import Hero from "./components/hero"
import DestinationSection from "./components/destination-section"
import Footer from "./components/footer"
import BookingModal from "./components/booking-modal"
import { destinations } from "./data/destinations"

export default function VenoTravelPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smoother entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleBookNow = (destination: any) => {
    setSelectedDestination(destination)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#FDFCDC] text-gray-800">
      {/* Loading animation */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFCDC]">
          <div className="text-4xl font-bold">
            <span className="text-[#0081A7]">Veno</span>
            <span className="text-[#F07167]">Travel</span>
          </div>
        </div>
      )}

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

      <Header />
      <Hero onBookNow={() => setIsModalOpen(true)} />
      <DestinationSection destinations={destinations} onBookNow={handleBookNow} />
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} destination={selectedDestination} />
    </div>
  )
}
