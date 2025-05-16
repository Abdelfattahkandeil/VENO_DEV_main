"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
  featured: boolean
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#7678ED]/20 text-[#7678ED] px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 leading-tight">{post.title}</h3>
        <p className="text-[#AAAAAA] mb-4 flex-grow">{post.excerpt}</p>

        <div className="mt-auto">
          <div className="flex items-center text-[#888888] text-sm mb-4">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <Link
            href="#"
            className="inline-flex items-center px-3 py-1.5 bg-[#7678ED] text-white rounded-md hover:bg-[#5D5FEF] transition-colors text-sm shadow-[0_4px_10px_rgba(118,120,237,0.3)]"
          >
            Read More
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
