"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Message, User } from "../types"
import MessageBubble from "./message-bubble"

interface MessageListProps {
  messages: Message[]
  currentUser: User
  contact: User
}

export default function MessageList({ messages, currentUser, contact }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = {}

  messages.forEach((message) => {
    const date = message.timestamp.toDateString()
    if (!groupedMessages[date]) {
      groupedMessages[date] = []
    }
    groupedMessages[date].push(message)
  })

  return (
    <div className="message-list">
      <AnimatePresence>
        {Object.entries(groupedMessages).map(([date, dateMessages]) => (
          <div key={date}>
            <div className="date-divider">
              <span>{formatDate(date)}</span>
            </div>

            {dateMessages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <MessageBubble
                  message={message}
                  isOwn={message.sender === currentUser.id}
                  sender={message.sender === currentUser.id ? currentUser : contact}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </AnimatePresence>
      <div ref={messagesEndRef} />
    </div>
  )
}

function formatDate(dateString: string): string {
  const today = new Date().toDateString()
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  if (dateString === today) {
    return "Today"
  } else if (dateString === yesterday.toDateString()) {
    return "Yesterday"
  } else {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }
}
