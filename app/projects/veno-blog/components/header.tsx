"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Search, Moon, Sun } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // In a real implementation, this would toggle a dark mode class or context
  }

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.5)] py-3" : "bg-[#121212] py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/projects/veno-blog" className="text-2xl font-bold">
            Veno<span className="text-[#7678ED]">Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/projects/veno-blog">Home</NavLink>
            <NavLink href="#">Articles</NavLink>
            <NavLink href="#">Categories</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>

            {/* Search button */}
            <button className="p-2 text-[#7678ED] hover:text-white transition-colors" aria-label="Search">
              <Search size={20} />
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-[#7678ED] hover:text-white transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 text-[#7678ED] hover:text-white transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#7678ED] hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/projects/veno-blog" onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#" onClick={() => setMobileMenuOpen(false)}>
                Articles
              </MobileNavLink>
              <MobileNavLink href="#" onClick={() => setMobileMenuOpen(false)}>
                Categories
              </MobileNavLink>
              <MobileNavLink href="#" onClick={() => setMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>

              {/* Search bar for mobile */}
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 bg-[#2A2A2A] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7678ED] text-white placeholder-gray-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#E0E0E0] hover:text-[#7678ED] font-medium transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[#E0E0E0] hover:text-[#7678ED] font-medium transition-colors block py-2"
    >
      {children}
    </Link>
  )
}
