"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { NeonButton } from "./ui/button"

interface NavbarProps {
  currentPage: string
  navigateTo: (page: string) => void
}

export default function Navbar({ currentPage, navigateTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (page: string) => {
    navigateTo(page)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-[#1A1A1A]/90 backdrop-blur-md py-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => handleNavigation("home")}>
          <span className="text-[#00F5D4]">VENO</span>AGENCY
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink isActive={currentPage === "home"} onClick={() => handleNavigation("home")}>
            Home
          </NavLink>
          <NavLink isActive={currentPage === "about"} onClick={() => handleNavigation("about")}>
            About
          </NavLink>
          <NavLink isActive={currentPage === "contact"} onClick={() => handleNavigation("contact")}>
            Contact
          </NavLink>
          <NeonButton onClick={() => window.open("#", "_blank")}>Get Started</NeonButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#00F5D4] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1A1A1A]/95 backdrop-blur-md border-t border-gray-800"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavLink isActive={currentPage === "home"} onClick={() => handleNavigation("home")} mobile>
              Home
            </NavLink>
            <NavLink isActive={currentPage === "about"} onClick={() => handleNavigation("about")} mobile>
              About
            </NavLink>
            <NavLink isActive={currentPage === "contact"} onClick={() => handleNavigation("contact")} mobile>
              Contact
            </NavLink>
            <NeonButton className="w-full text-center mt-4" onClick={() => window.open("#", "_blank")}>
              Get Started
            </NeonButton>
          </div>
        </motion.div>
      )}
    </header>
  )
}

interface NavLinkProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
  mobile?: boolean
}

function NavLink({ isActive, onClick, children, mobile = false }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`relative ${mobile ? "py-2 w-full text-left" : ""} font-medium transition-colors duration-300 ${
        isActive ? "text-[#00F5D4]" : "text-white hover:text-[#00F5D4]"
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className={`absolute ${
            mobile ? "-left-6" : "left-0 bottom-0"
          } bg-[#00F5D4] ${mobile ? "w-1 h-full" : "w-full h-0.5"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </button>
  )
}
