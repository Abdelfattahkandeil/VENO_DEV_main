"use client"

import { motion } from "framer-motion"
import type { User } from "../types"
import { Settings, ArrowLeft, MoreVertical, Phone, Video } from "lucide-react"

interface ChatHeaderProps {
  contact: User
  onSettingsClick: () => void
}

export default function ChatHeader({ contact, onSettingsClick }: ChatHeaderProps) {
  return (
    <motion.header
      className="chat-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <button className="md:hidden mr-2 text-neutral-300 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </button>

        <div className="avatar-container">
          <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="avatar" />
          {contact.status === "online" && <span className="status-indicator"></span>}
        </div>

        <div className="ml-3">
          <h2 className="font-medium text-white">{contact.name}</h2>
          <p className="text-xs text-neutral-400">{contact.status === "online" ? "Online" : "Last seen recently"}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="header-icon-button">
          <Phone size={18} />
        </button>
        <button className="header-icon-button">
          <Video size={18} />
        </button>
        <button className="header-icon-button" onClick={onSettingsClick}>
          <Settings size={18} />
        </button>
        <button className="header-icon-button">
          <MoreVertical size={18} />
        </button>
      </div>
    </motion.header>
  )
}
