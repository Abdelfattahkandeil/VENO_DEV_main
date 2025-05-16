"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Edit, Trash2, Check, X } from "lucide-react"
import Draggable from "react-draggable"
import type { NoteType } from "../page"

interface NoteProps {
  note: NoteType
  onUpdate: (id: string, updates: Partial<NoteType>) => void
  onDelete: (id: string) => void
}

export default function Note({ note, onUpdate, onDelete }: NoteProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(note.content)
  const nodeRef = useRef(null)

  const handleDragStop = (_e: any, data: { x: number; y: number }) => {
    onUpdate(note.id, { position: { x: data.x, y: data.y } })
  }

  const handleSave = () => {
    onUpdate(note.id, { content })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setContent(note.content)
    setIsEditing(false)
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={note.position}
      onStop={handleDragStop}
      bounds="parent"
      handle=".drag-handle"
    >
      <motion.div
        ref={nodeRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="absolute w-64 rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundColor: "#1E1E1E",
          borderTop: `3px solid ${note.color}`,
        }}
      >
        {/* Note Header - Drag Handle */}
        <div
          className="drag-handle p-3 flex justify-between items-center cursor-move"
          style={{ backgroundColor: `${note.color}20` }}
        >
          <div className="text-xs text-gray-400">{formatDate(note.createdAt)}</div>
          <div className="flex gap-1">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="w-6 h-6 rounded-full bg-[#1E1E1E]/20 flex items-center justify-center text-white hover:bg-[#1E1E1E]/40 transition-colors"
                  title="Save"
                >
                  <Check size={14} />
                </button>
                <button
                  onClick={handleCancel}
                  className="w-6 h-6 rounded-full bg-[#1E1E1E]/20 flex items-center justify-center text-white hover:bg-[#1E1E1E]/40 transition-colors"
                  title="Cancel"
                >
                  <X size={14} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-6 h-6 rounded-full bg-[#1E1E1E]/20 flex items-center justify-center text-white hover:bg-[#1E1E1E]/40 transition-colors"
                  title="Edit"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => onDelete(note.id)}
                  className="w-6 h-6 rounded-full bg-[#1E1E1E]/20 flex items-center justify-center text-white hover:bg-[#1E1E1E]/40 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Note Content */}
        <div className="p-4">
          {isEditing ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 p-2 bg-[#2A2A2A] border border-[#333333] rounded text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#6A0572]"
              autoFocus
            />
          ) : (
            <div className="whitespace-pre-wrap break-words text-[#E0E0E0]">{note.content}</div>
          )}
        </div>
      </motion.div>
    </Draggable>
  )
}
