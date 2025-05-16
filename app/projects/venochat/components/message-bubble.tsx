import { Check, CheckCheck } from "lucide-react"
import type { Message, User } from "../types"

interface MessageBubbleProps {
  message: Message
  isOwn: boolean
  sender: User
}

export default function MessageBubble({ message, isOwn, sender }: MessageBubbleProps) {
  return (
    <div className={`message-container ${isOwn ? "own-message" : "other-message"}`}>
      {!isOwn && (
        <div className="message-avatar">
          <img src={sender.avatar || "/placeholder.svg"} alt={sender.name} className="w-8 h-8 rounded-full" />
        </div>
      )}

      <div className={`message-bubble ${isOwn ? "own" : "other"}`}>
        <div className="message-text">{message.text}</div>

        <div className="message-meta">
          <span className="message-time">{formatTime(message.timestamp)}</span>

          {isOwn && (
            <span className="message-status">
              {message.status === "sent" && <Check size={14} />}
              {message.status === "delivered" && <CheckCheck size={14} />}
              {message.status === "read" && <CheckCheck size={14} className="text-accent" />}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}
