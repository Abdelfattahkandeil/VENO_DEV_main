"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/header"
import Note from "./components/note"
import AddNoteModal from "./components/add-note-modal"
import { useLocalStorage } from "./hooks/use-local-storage"
import { generateUniqueId, getRandomColor } from "./utils/helpers"

export interface NoteType {
  id: string
  content: string
  color: string
  position: { x: number; y: number }
  createdAt: number
}

export default function VenoNotesPage() {
  const [notes, setNotes] = useLocalStorage<NoteType[]>("veno-notes", [])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smoother entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const addNote = (content: string) => {
    const newNote: NoteType = {
      id: generateUniqueId(),
      content,
      color: getRandomColor(),
      position: {
        x: Math.random() * (window.innerWidth / 2 - 200),
        y: Math.random() * (window.innerHeight / 2 - 200),
      },
      createdAt: Date.now(),
    }
    setNotes([...notes, newNote])
  }

  const updateNote = (id: string, updates: Partial<NoteType>) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updates } : note)))
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* Loading animation */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold">
            <span className="text-[#FFD93D]">Veno</span>
            <span className="text-[#6A0572]">Notes</span>
          </motion.div>
        </div>
      )}

      {/* Back to portfolio link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#FFD93D] hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      <Header onAddNote={() => setIsAddModalOpen(true)} />

      {/* Notes Canvas */}
      <main className="relative h-[calc(100vh-64px)] overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#6A0572 1px, transparent 1px), linear-gradient(90deg, #6A0572 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <AnimatePresence>
          {notes.map((note) => (
            <Note key={note.id} note={note} onUpdate={updateNote} onDelete={deleteNote} />
          ))}
        </AnimatePresence>

        {/* Empty state */}
        {notes.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center max-w-md px-4"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#6A0572]/20 flex items-center justify-center">
                  <Plus size={32} className="text-[#FFD93D]" />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2 text-white">No Notes Yet</h2>
              <p className="mb-6">
                Click the "Add Note" button to create your first note. You can drag notes around and organize them
                however you like.
              </p>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-[#6A0572] text-white rounded-md hover:bg-[#6A0572]/80 transition-colors"
              >
                Create Your First Note
              </button>
            </motion.div>
          </div>
        )}
      </main>

      {/* Add Note Modal */}
      <AddNoteModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={addNote} />
    </div>
  )
}
