"use client"

import type React from "react"

import { useState } from "react"
import { Search, Hash, BookOpen, Calendar, User, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

interface SidebarProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string) => void
}

export default function Sidebar({ categories, selectedCategory, onSelectCategory }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would trigger a search
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="bg-[#1E1E1E] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h3 className="text-lg font-bold text-white mb-4">Search</h3>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-[#2A2A2A] border border-[#333333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7678ED] text-white placeholder-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <button
            type="submit"
            className="w-full mt-3 px-4 py-2 bg-[#7678ED] text-white rounded-md hover:bg-[#5D5FEF] transition-colors shadow-[0_4px_10px_rgba(118,120,237,0.3)]"
          >
            Search
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-[#1E1E1E] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Hash size={18} className="mr-2" />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-[#7678ED]/20 text-[#7678ED] font-medium"
                    : "hover:bg-[#2A2A2A] text-[#E0E0E0]"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* About Author */}
      <div className="bg-[#1E1E1E] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <User size={18} className="mr-2" />
          About Me
        </h3>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 relative">
            <img src="/placeholder.svg?height=200&width=200" alt="Author" className="object-cover" />
          </div>
          <h4 className="font-medium text-white">Alex Johnson</h4>
          <p className="text-sm text-[#AAAAAA] mt-1">Frontend Developer & Writer</p>
          <p className="text-sm text-[#AAAAAA] mt-3">
            I write about web development, UI/UX design, and the latest frontend technologies.
          </p>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#1E1E1E] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <BookOpen size={18} className="mr-2" />
          Recent Posts
        </h3>
        <ul className="space-y-4">
          <RecentPostItem title="Understanding JavaScript Promises" date="June 2, 2023" />
          <RecentPostItem title="CSS Variables: A Complete Guide" date="May 28, 2023" />
          <RecentPostItem title="Building a REST API with Node.js" date="May 20, 2023" />
        </ul>
      </div>

      {/* Archives */}
      <div className="bg-[#1E1E1E] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Calendar size={18} className="mr-2" />
          Archives
        </h3>
        <ul className="space-y-2">
          <ArchiveItem month="May 2023" count={8} />
          <ArchiveItem month="April 2023" count={5} />
          <ArchiveItem month="March 2023" count={12} />
          <ArchiveItem month="February 2023" count={7} />
          <ArchiveItem month="January 2023" count={9} />
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-[#7678ED] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] text-white">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <Mail size={18} className="mr-2" />
          Newsletter
        </h3>
        <p className="text-sm mb-4">Subscribe to my newsletter and never miss my upcoming articles</p>
        <form>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 mb-3"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-[#7678ED] rounded-md hover:bg-white/90 transition-colors font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="bg-[#1E1E1E] p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
        <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
        <div className="flex justify-between">
          <SocialButton icon={<Twitter size={18} />} color="#1DA1F2" />
          <SocialButton icon={<Facebook size={18} />} color="#4267B2" />
          <SocialButton icon={<Instagram size={18} />} color="#E1306C" />
          <SocialButton icon={<Linkedin size={18} />} color="#0077B5" />
        </div>
      </div>
    </div>
  )
}

function RecentPostItem({ title, date }: { title: string; date: string }) {
  return (
    <li>
      <a href="#" className="block group">
        <h4 className="font-medium text-[#E0E0E0] group-hover:text-[#7678ED] transition-colors">{title}</h4>
        <p className="text-sm text-[#888888] mt-1">{date}</p>
      </a>
    </li>
  )
}

function ArchiveItem({ month, count }: { month: string; count: number }) {
  return (
    <li>
      <a
        href="#"
        className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#2A2A2A] transition-colors"
      >
        <span className="text-[#E0E0E0]">{month}</span>
        <span className="bg-[#7678ED]/20 text-[#7678ED] px-2 py-0.5 rounded-full text-xs font-medium">{count}</span>
      </a>
    </li>
  )
}

function SocialButton({
  icon,
  color,
}: {
  icon: React.ReactNode
  color: string
}) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
      style={{ backgroundColor: color, color: "white" }}
    >
      {icon}
    </a>
  )
}
