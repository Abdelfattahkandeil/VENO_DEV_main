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

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 md:h-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#7678ED] text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-3">
              <span className="bg-[#7678ED]/20 text-[#7678ED] px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{post.title}</h2>
            <p className="text-[#AAAAAA] mb-6">{post.excerpt}</p>
          </div>

          <div>
            <div className="flex items-center text-[#888888] text-sm mb-4">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 bg-[#7678ED] text-white rounded-md hover:bg-[#5D5FEF] transition-colors shadow-[0_4px_10px_rgba(118,120,237,0.3)]"
            >
              Read More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
