"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle({ isDarkTheme, toggleTheme }) {
  return (
    <motion.button className="theme-toggle" onClick={toggleTheme} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {isDarkTheme ? <Sun className="theme-icon" size={20} /> : <Moon className="theme-icon" size={20} />}
    </motion.button>
  )
}
