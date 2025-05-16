"use client"

import { motion } from "framer-motion"
import { X, Trash2 } from "lucide-react"

interface HistoryPanelProps {
  history: string[]
  clearHistory: () => void
  isDarkMode: boolean
  onClose: () => void
}

export default function HistoryPanel({ history, clearHistory, isDarkMode, onClose }: HistoryPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h2 className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>Calculation History</h2>
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={clearHistory}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Clear history"
            disabled={history.length === 0}
          >
            <Trash2 size={18} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Close history panel"
          >
            <X size={18} />
          </motion.button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {history.length > 0 ? (
          <ul className="divide-y divide-gray-700">
            {history.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className={`p-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                <div className="text-sm">{item.split("=")[0]}</div>
                <div className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  = {item.split("=")[1]}
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className={`text-4xl mb-2 ${isDarkMode ? "text-gray-700" : "text-gray-300"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
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
            </div>
            <p className={`text-center ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              No calculation history yet
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
