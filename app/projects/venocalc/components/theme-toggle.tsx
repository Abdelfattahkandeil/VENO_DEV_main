"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({ isDarkMode, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-[#6366F1] hover:bg-gray-700" : "bg-gray-200 text-[#4F46E5] hover:bg-gray-300"
      }`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun size={20} className="animate-theme-toggle" />
      ) : (
        <Moon size={20} className="animate-theme-toggle" />
      )}
    </motion.button>
  )
}
