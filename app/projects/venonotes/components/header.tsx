"use client"

import { Plus } from "lucide-react"

interface HeaderProps {
  onAddNote: () => void
}

export default function Header({ onAddNote }: HeaderProps) {
  return (
    <header className="bg-[#1A1A1A] border-b border-[#333333] py-4 px-6 flex justify-between items-center h-16">
      <div className="text-2xl font-bold">
        <span className="text-[#FFD93D]">Veno</span>
        <span className="text-[#6A0572]">Notes</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onAddNote}
          className="flex items-center gap-2 px-4 py-2 bg-[#6A0572] text-white rounded-md hover:bg-[#6A0572]/80 transition-colors"
        >
          <Plus size={18} />
          Add Note
        </button>
      </div>
    </header>
  )
}
