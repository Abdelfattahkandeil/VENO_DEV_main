"use client"

import { motion } from "framer-motion"
import type { Theme } from "../types"

interface ThemeSelectorProps {
  currentTheme: Theme
  onSelectTheme: (theme: Theme) => void
}

export default function ThemeSelector({ currentTheme, onSelectTheme }: ThemeSelectorProps) {
  const themes: { id: Theme; name: string; colors: string[] }[] = [
    {
      id: "dark",
      name: "Dark",
      colors: ["#1E272E", "#2C2C54", "#F19066"],
    },
    {
      id: "light",
      name: "Light",
      colors: ["#F5F5F5", "#FFFFFF", "#6C5CE7"],
    },
    {
      id: "midnight",
      name: "Midnight",
      colors: ["#0F2027", "#203A43", "#00B4DB"],
    },
    {
      id: "sunset",
      name: "Sunset",
      colors: ["#232526", "#414345", "#FF416C"],
    },
    {
      id: "forest",
      name: "Forest",
      colors: ["#1F1F1F", "#2D3436", "#6AB04C"],
    },
  ]

  return (
    <div className="theme-selector">
      {themes.map((theme) => (
        <motion.button
          key={theme.id}
          className={`theme-option ${currentTheme === theme.id ? "active" : ""}`}
          onClick={() => onSelectTheme(theme.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="theme-colors">
            {theme.colors.map((color, index) => (
              <div key={index} className="theme-color" style={{ backgroundColor: color }} />
            ))}
          </div>
          <span className="theme-name">{theme.name}</span>
        </motion.button>
      ))}
    </div>
  )
}
