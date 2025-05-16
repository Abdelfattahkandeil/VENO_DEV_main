export interface User {
  id: string
  name: string
  avatar: string
  status?: "online" | "offline" | "away"
  lastSeen?: Date
}

export interface Message {
  id: string
  text: string
  sender: string
  timestamp: Date
  status: "sent" | "delivered" | "read"
  attachment?: {
    type: "image" | "file"
    url: string
    name?: string
  }
}

export type Theme = "dark" | "light" | "midnight" | "sunset" | "forest"
