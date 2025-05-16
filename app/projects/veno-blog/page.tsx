"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Header from "./components/header"
import FeaturedPost from "./components/featured-post"
import PostCard from "./components/post-card"
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"

export default function VenoBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state more effectively.",
      date: "May 15, 2023",
      category: "React",
      readTime: "5 min read",
      image: "/React.js-Hooks1.jpg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Discover how to create complex, responsive layouts using CSS Grid that work across all device sizes.",
      date: "April 28, 2023",
      category: "CSS",
      readTime: "7 min read",
      image: "/cssgrid.jpg?height=400&width=600",
      featured: false,
    },
    {
      id: 3,
      title: "TypeScript Best Practices for 2023",
      excerpt:
        "Explore the latest TypeScript features and best practices to write more maintainable and type-safe code.",
      date: "April 15, 2023",
      category: "TypeScript",
      readTime: "8 min read",
      image: "/typescriptbest.jpg?height=400&width=600",
      featured: false,
    },
    {
      id: 4,
      title: "Introduction to Next.js 13 App Router",
      excerpt: "Learn about the new App Router in Next.js 13 and how it changes the way we build React applications.",
      date: "March 30, 2023",
      category: "Next.js",
      readTime: "6 min read",
      image: "/nextapprouter.jpg?height=400&width=600",
      featured: false,
    },
    {
      id: 5,
      title: "Mastering Tailwind CSS: Advanced Techniques",
      excerpt: "Take your Tailwind CSS skills to the next level with these advanced techniques and customizations.",
      date: "March 22, 2023",
      category: "CSS",
      readTime: "9 min read",
      image: "/advancedtailwind.jpg?height=400&width=600",
      featured: false,
    },
    {
      id: 6,
      title: "State Management with Zustand",
      excerpt: "Discover why Zustand is becoming a popular alternative to Redux for state management in React apps.",
      date: "March 10, 2023",
      category: "React",
      readTime: "7 min read",
      image: "/zustand.jpg?height=400&width=600",
      featured: false,
    },
    {
      id: 7,
      title: "Creating Animations with Framer Motion",
      excerpt: "Learn how to add beautiful animations to your React components using the Framer Motion library.",
      date: "February 28, 2023",
      category: "Animation",
      readTime: "8 min read",
      image: "/framermotion.jpg?height=400&width=600",
      featured: false,
    },
    {
      id: 8,
      title: "Web Accessibility: A Comprehensive Guide",
      excerpt:
        "Understand the importance of web accessibility and learn practical tips to make your websites more inclusive.",
      date: "February 15, 2023",
      category: "Accessibility",
      readTime: "10 min read",
      image: "/webaccessibility.jpg?height=400&width=600",
      featured: false,
    },
  ]

  // Extract unique categories from posts
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory && !post.featured)
    : posts.filter((post) => !post.featured)

  // Featured post (first in the array with featured: true)
  const featuredPost = posts.find((post) => post.featured)

  useEffect(() => {
    // Simulate loading for smoother entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0]">
      {/* Loading animation */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-[#7678ED]">
            Veno<span className="text-[#FFFFFF]">Blog</span>
          </motion.div>
        </div>
      )}

      {/* Back to portfolio link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#7678ED] hover:text-[#FFFFFF] transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* F-pattern layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content area (9 columns on large screens) */}
          <div className="lg:col-span-9">
            {/* Featured post (top of F-pattern) */}
            {featuredPost && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <FeaturedPost post={featuredPost} />
              </motion.div>
            )}

            {/* Category title if filtered */}
            {selectedCategory && (
              <div className="mt-12 mb-6">
                <h2 className="text-2xl font-bold text-[#FFFFFF] flex items-center">
                  <span>{selectedCategory}</span>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="ml-3 text-sm text-[#7678ED] hover:underline"
                  >
                    (Clear filter)
                  </button>
                </h2>
                <div className="w-20 h-1 bg-[#7678ED] mt-2"></div>
              </div>
            )}

            {/* Blog posts grid (middle and bottom of F-pattern) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </div>

            {/* Empty state when no posts match the filter */}
            {filteredPosts.length === 0 && selectedCategory && (
              <div className="text-center py-12">
                <h3 className="text-xl text-[#AAAAAA]">No posts found in this category.</h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 px-4 py-2 bg-[#7678ED] text-white rounded-md hover:bg-[#5D5FEF] transition-colors"
                >
                  View all posts
                </button>
              </div>
            )}
          </div>

          {/* Sidebar (3 columns on large screens) */}
          <div className="lg:col-span-3">
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
