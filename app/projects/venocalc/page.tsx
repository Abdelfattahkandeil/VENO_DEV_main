"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Calculator from "./components/calculator"
import ThemeToggle from "./components/theme-toggle"
import HistoryPanel from "./components/history-panel"

export default function VenoCalcPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [calculationHistory, setCalculationHistory] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.toggle("calc-light-mode", !isDarkMode)
    document.body.classList.toggle("calc-dark-mode", isDarkMode)

    // Simulate loading for smoother entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => {
      document.body.classList.remove("calc-light-mode", "calc-dark-mode")
      clearTimeout(timer)
    }
  }, [isDarkMode])

  const addToHistory = (calculation: string) => {
    setCalculationHistory((prev) => [calculation, ...prev].slice(0, 50)) // Keep last 50 calculations
  }

  const clearHistory = () => {
    setCalculationHistory([])
  }

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDarkMode ? "bg-[#121212]" : "bg-[#f5f5f5]"
      }`}
    >
      {/* Loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: isDarkMode ? "#121212" : "#f5f5f5" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className={isDarkMode ? "text-white" : "text-[#121212]"}>Veno</span>
              <span className="text-[#6366F1]">Calc</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to portfolio link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/#projects"
          className={`flex items-center gap-2 ${
            isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
          } transition-colors duration-300`}
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Main calculator area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#121212]"}`}>
                <span>Veno</span>
                <span className="text-[#6366F1]">Calc</span>
              </h1>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  aria-label="Toggle history panel"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 8v4l3 3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </button>
                <ThemeToggle isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
              </div>
            </div>

            <Calculator isDarkMode={isDarkMode} addToHistory={addToHistory} />

            <div className="mt-8 text-center">
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Created by Veno Dev • {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>

        {/* History panel (slides in from right) */}
        <AnimatePresence>
          {isHistoryOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "300px", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${isDarkMode ? "bg-gray-900" : "bg-white"} border-l ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              } overflow-hidden`}
            >
              <HistoryPanel
                history={calculationHistory}
                clearHistory={clearHistory}
                isDarkMode={isDarkMode}
                onClose={() => setIsHistoryOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
