"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User, Search, Globe } from "lucide-react"

interface HeaderProps {
  activePage?: string
}

export default function Header({ activePage = "home" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/projects/venotravel" className="text-2xl font-bold">
          <span className="text-[#0081A7]">Veno</span>
          <span className="text-[#F07167]">Travel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/projects/venotravel" isActive={activePage === "home"}>
            Home
          </NavLink>
          <NavLink href="/projects/venotravel/destinations" isActive={activePage === "destinations"}>
            Destinations
          </NavLink>
          <NavLink href="/projects/venotravel/packages" isActive={activePage === "packages"}>
            Packages
          </NavLink>
          <NavLink href="/projects/venotravel/about" isActive={activePage === "about"}>
            About Us
          </NavLink>
          <NavLink href="/projects/venotravel/contact" isActive={activePage === "contact"}>
            Contact
          </NavLink>

          <div className="flex items-center gap-4 ml-4">
            <button className="p-2 text-[#0081A7] hover:text-[#F07167] transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2 text-[#0081A7] hover:text-[#F07167] transition-colors" aria-label="Language">
              <Globe size={20} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0081A7] text-white rounded-full hover:bg-[#0081A7]/90 transition-colors">
              <User size={18} />
              <span>Sign In</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0081A7] hover:text-[#F07167] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <MobileNavLink
              href="/projects/venotravel"
              onClick={() => setMobileMenuOpen(false)}
              isActive={activePage === "home"}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              href="/projects/venotravel/destinations"
              onClick={() => setMobileMenuOpen(false)}
              isActive={activePage === "destinations"}
            >
              Destinations
            </MobileNavLink>
            <MobileNavLink
              href="/projects/venotravel/packages"
              onClick={() => setMobileMenuOpen(false)}
              isActive={activePage === "packages"}
            >
              Packages
            </MobileNavLink>
            <MobileNavLink
              href="/projects/venotravel/about"
              onClick={() => setMobileMenuOpen(false)}
              isActive={activePage === "about"}
            >
              About Us
            </MobileNavLink>
            <MobileNavLink
              href="/projects/venotravel/contact"
              onClick={() => setMobileMenuOpen(false)}
              isActive={activePage === "contact"}
            >
              Contact
            </MobileNavLink>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button className="p-2 text-[#0081A7] hover:text-[#F07167] transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="p-2 text-[#0081A7] hover:text-[#F07167] transition-colors" aria-label="Language">
                <Globe size={20} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0081A7] text-white rounded-full hover:bg-[#0081A7]/90 transition-colors">
                <User size={18} />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

function NavLink({ href, children, isActive = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`font-medium transition-colors ${isActive ? "text-[#F07167]" : "text-gray-800 hover:text-[#F07167]"}`}
    >
      {children}
    </Link>
  )
}

interface MobileNavLinkProps {
  href: string
  onClick: () => void
  children: React.ReactNode
  isActive?: boolean
}

function MobileNavLink({ href, onClick, children, isActive = false }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-medium transition-colors block py-2 ${
        isActive ? "text-[#F07167]" : "text-gray-800 hover:text-[#F07167]"
      }`}
    >
      {children}
    </Link>
  )
}
