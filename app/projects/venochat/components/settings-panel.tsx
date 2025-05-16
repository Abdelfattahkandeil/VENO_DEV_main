"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { Theme } from "../types"
import ThemeSelector from "./theme-selector"

interface SettingsPanelProps {
  isOpen: boolean
  onClose: () => void
  username: string
  onUpdateUsername: (name: string) => void
  currentTheme: Theme
  onUpdateTheme: (theme: Theme) => void
}

export default function SettingsPanel({
  isOpen,
  onClose,
  username,
  onUpdateUsername,
  currentTheme,
  onUpdateTheme,
}: SettingsPanelProps) {
  const [nameInput, setNameInput] = useState(username)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nameInput.trim()) {
      onUpdateUsername(nameInput)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="settings-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="settings-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="settings-header">
              <h2>Settings</h2>
              <button onClick={onClose} className="close-button">
                <X size={20} />
              </button>
            </div>

            <div className="settings-content">
              <section className="settings-section">
                <h3>Profile</h3>
                <form onSubmit={handleSubmit} className="settings-form">
                  <div className="form-group">
                    <label htmlFor="username">Your Name</label>
                    <input
                      type="text"
                      id="username"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="settings-input"
                    />
                  </div>
                  <button type="submit" className="settings-button">
                    Update Name
                  </button>
                </form>
              </section>

              <section className="settings-section">
                <h3>Appearance</h3>
                <ThemeSelector currentTheme={currentTheme} onSelectTheme={onUpdateTheme} />
              </section>

              <section className="settings-section">
                <h3>About</h3>
                <p className="text-sm text-neutral-400">
                  VenoChat v1.0.0
                  <br />A modern chat interface demo
                </p>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
