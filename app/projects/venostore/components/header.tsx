"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingCart, User, Menu, X, Bell } from "lucide-react"
import { useAuth } from "../context/auth-context"
import { useCart } from "../context/cart-context"

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const { user, logout } = useAuth()
  const { items } = useCart()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-800 shadow-md py-2" : "bg-white dark:bg-gray-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex items-center">
            <Link href="/projects/venostore" className="flex items-center">
              <span className="text-2xl font-bold text-[#1a73e8]">
                Veno<span className="text-[#fbbc05]">Store</span>
              </span>
            </Link>
          </div>

          {/* Primary Navigation (Center) - F-pattern */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/projects/venostore"
              className={`font-medium transition-colors ${
                isActive("/projects/venostore") && pathname === "/projects/venostore"
                  ? "text-[#1a73e8]"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects/venostore/products"
              className={`font-medium transition-colors ${
                isActive("/projects/venostore/products")
                  ? "text-[#1a73e8]"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              }`}
            >
              Products
            </Link>
            <Link
              href="/projects/venostore/collections"
              className={`font-medium transition-colors ${
                isActive("/projects/venostore/collections")
                  ? "text-[#1a73e8]"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              }`}
            >
              Collections
            </Link>
            <Link
              href="/projects/venostore/admin/analytics"
              className={`font-medium transition-colors ${
                isActive("/projects/venostore/admin/analytics")
                  ? "text-[#1a73e8]"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              }`}
            >
              Analytics
            </Link>
            <Link
              href="/projects/venostore/admin/apps"
              className={`font-medium transition-colors ${
                isActive("/projects/venostore/admin/apps")
                  ? "text-[#1a73e8]"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              }`}
            >
              Apps
            </Link>
            <Link
              href="/projects/venostore/admin/settings"
              className={`font-medium transition-colors ${
                isActive("/projects/venostore/admin/settings")
                  ? "text-[#1a73e8]"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              }`}
            >
              Settings
            </Link>
          </nav>

          {/* Right Side - User, Cart */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Always Visible */}
            <div className={`relative hidden md:block transition-all duration-300 ${searchFocused ? "w-64" : "w-48"}`}>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            </div>

            {/* Mobile Search Icon */}
            <button className="md:hidden text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]">
              <Search size={24} />
            </button>

            {/* Notifications */}
            <button className="hidden md:flex text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8] relative">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]">
                <User size={24} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-10 hidden group-hover:block">
                {user ? (
                  <>
                    <Link
                      href="/projects/venostore/account"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Account
                    </Link>
                    <Link 
                      href="/projects/venostore/orders" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/projects/venostore/login" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Login
                    </Link>
                    <Link
                      href="/projects/venostore/register"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Cart */}
            <button 
              className="relative text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]" 
              onClick={onCartClick}
            >
              <ShoppingCart size={24} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1a73e8] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Always visible on mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/projects/venostore"
                  className={`block font-medium ${
                    isActive("/projects/venostore") && pathname === "/projects/venostore"
                      ? "text-[#1a73e8]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/venostore/products"
                  className={`block font-medium ${
                    isActive("/projects/venostore/products")
                      ? "text-[#1a73e8]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/venostore/collections"
                  className={`block font-medium ${
                    isActive("/projects/venostore/collections")
                      ? "text-[#1a73e8]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/venostore/admin/analytics"
                  className={`block font-medium ${
                    isActive("/projects/venostore/admin/analytics")
                      ? "text-[#1a73e8]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/venostore/admin/apps"
                  className={`block font-medium ${
                    isActive("/projects/venostore/admin/apps")
                      ? "text-[#1a73e8]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/venostore/admin/settings"
                  className={`block font-medium ${
                    isActive("/projects/venostore/admin/settings")
                      ? "text-[#1a73e8]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#1a73e8] dark:hover:text-[#1a73e8]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
