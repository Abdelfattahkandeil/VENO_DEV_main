"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smile, Paperclip, Mic, Send } from "lucide-react"

interface InputAreaProps {
  onSendMessage: (text: string) => void
}

export default function InputArea({ onSendMessage }: InputAreaProps) {
  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto"
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
    }
  }, [message])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <button type="button" className="input-icon-button">
        <Smile size={20} />
      </button>

      <button type="button" className="input-icon-button">
        <Paperclip size={20} />
      </button>

      <div className="input-container">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSubmit(e)
            }
          }}
        />
      </div>

      <AnimatePresence>
        {message ? (
          <motion.button
            type="submit"
            className="send-button"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Send size={20} />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            className="input-icon-button"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Mic size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </form>
  )
}
