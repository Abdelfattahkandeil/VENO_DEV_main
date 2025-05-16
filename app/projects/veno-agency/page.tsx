"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function VenoAgencyPage() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smoother entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Handle navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page)
    // Update URL without page reload
    window.history.pushState({}, "", `/projects/veno-agency/${page === "home" ? "" : page.toLowerCase()}`)
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path.includes("about")) {
        setCurrentPage("about")
      } else if (path.includes("contact")) {
        setCurrentPage("contact")
      } else {
        setCurrentPage("home")
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-hidden">
      {/* Initial loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl font-bold text-[#00F5D4]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              VENO<span className="text-white">AGENCY</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to portfolio link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-gray-400 hover:text-[#00F5D4] transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="relative">
        <Navbar currentPage={currentPage} navigateTo={navigateTo} />

        <main className="pt-20">
          <AnimatePresence mode="wait">
            {currentPage === "home" && <Home key="home" />}
            {currentPage === "about" && <About key="about" />}
            {currentPage === "contact" && <Contact key="contact" />}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  )
}
