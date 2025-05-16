"use client"

import { useState, useEffect } from "react"
import ChatHeader from "./components/chat-header"
import MessageList from "./components/message-list"
import InputArea from "./components/input-area"
import SettingsPanel from "./components/settings-panel"
import type { Message, Theme, User } from "./types"
import "./styles.css"

export default function VenoChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark")
  const [currentUser, setCurrentUser] = useState<User>({
    id: "user1",
    name: "You",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  // Demo contact
  const contact: User = {
    id: "contact1",
    name: "abdo",
    avatar: "/oldman.jpg?height=100&width=100",
    status: "online",
    lastSeen: new Date(),
  }

  // Load initial demo messages
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        id: "1",
        text: "Hey there! Welcome to VenoChat 👋",
        sender: contact.id,
        timestamp: new Date(Date.now() - 3600000),
        status: "read",
      },
      {
        id: "2",
        text: "This is a demo chat interface with customizable themes and settings",
        sender: contact.id,
        timestamp: new Date(Date.now() - 3500000),
        status: "read",
      },
      {
        id: "3",
        text: "Try sending a message or changing the theme in settings!",
        sender: contact.id,
        timestamp: new Date(Date.now() - 3400000),
        status: "read",
      },
    ]
    setMessages(initialMessages)
  }, [])

  // Send a new message
  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text,
      sender: currentUser.id,
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate message being delivered
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg)))
    }, 1000)

    // Simulate message being read
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "read" } : msg)))
    }, 2000)

    // Simulate reply after a delay
    if (Math.random() > 0.5) {
      setTimeout(() => {
        const replies = [
          "That's interesting!",
          "Tell me more about that.",
          "I see what you mean.",
          "Great! What else is new?",
          "Thanks for sharing that.",
          "How's your day going?",
        ]

        const replyMessage: Message = {
          id: `msg-${Date.now()}`,
          text: replies[Math.floor(Math.random() * replies.length)],
          sender: contact.id,
          timestamp: new Date(),
          status: "read",
        }

        setMessages((prev) => [...prev, replyMessage])
      }, 3000)
    }
  }

  // Toggle settings panel
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen)
  }

  // Update username
  const updateUsername = (name: string) => {
    setCurrentUser((prev) => ({ ...prev, name }))
  }

  // Update theme
  const updateTheme = (theme: Theme) => {
    setCurrentTheme(theme)
  }

  return (
    <div className={`venochat-container ${currentTheme}`}>
      <div className="venochat-app">
        <ChatHeader contact={contact} onSettingsClick={toggleSettings} />

        <MessageList messages={messages} currentUser={currentUser} contact={contact} />

        <InputArea onSendMessage={sendMessage} />

        <SettingsPanel
          isOpen={settingsOpen}
          onClose={toggleSettings}
          username={currentUser.name}
          onUpdateUsername={updateUsername}
          currentTheme={currentTheme}
          onUpdateTheme={updateTheme}
        />
      </div>
    </div>
  )
}
