"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, X } from "lucide-react"

// Categories for filtering
const categories = [
  { id: "clothing", name: "Clothing", count: 124 },
  { id: "electronics", name: "Electronics", count: 87 },
  { id: "home", name: "Home & Kitchen", count: 65 },
  { id: "beauty", name: "Beauty & Personal Care", count: 43 },
  { id: "sports", name: "Sports & Outdoors", count: 38 },
  { id: "toys", name: "Toys & Games", count: 29 },
  { id: "books", name: "Books", count: 52 },
  { id: "jewelry", name: "Jewelry", count: 18 },
]

// Tags for filtering
const tags = [
  { id: "new", name: "New Arrival" },
  { id: "sale", name: "On Sale" },
  { id: "bestseller", name: "Bestseller" },
  { id: "limited", name: "Limited Edition" },
  { id: "eco", name: "Eco-friendly" },
  { id: "handmade", name: "Handmade" },
]

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    tags: true,
    ratings: true,
  })
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Handle category selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  // Handle tag selection
  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]))
  }

  // Handle rating selection
  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) => (prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]))
  }

  // Handle price range change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = Number.parseInt(e.target.value)
    setPriceRange((prev) => {
      const newRange = [...prev]
      newRange[index] = newValue
      return newRange
    })
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedTags([])
    setSelectedRatings([])
    setPriceRange([0, 1000])
  }

  return (
    <aside className="filter-sidebar bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
        {(selectedCategories.length > 0 || selectedTags.length > 0 || selectedRatings.length > 0) && (
          <button onClick={clearAllFilters} className="text-sm text-[#1a73e8] hover:underline">
            Clear All
          </button>
        )}
      </div>

      {/* Price Range Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <input
              type="number"
              placeholder="Min"
              className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <span className="text-gray-500 dark:text-gray-400">to</span>
            <input
              type="number"
              placeholder="Max"
              className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <button className="w-full py-2 bg-[#1a73e8]/10 dark:bg-[#1a73e8]/20 text-[#1a73e8] rounded-lg hover:bg-[#1a73e8]/20 dark:hover:bg-[#1a73e8]/30 transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#1a73e8] border-gray-300 dark:border-gray-600 rounded focus:ring-[#1a73e8]"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300 group-hover:text-[#1a73e8] dark:group-hover:text-[#1a73e8] transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-[#1a73e8]/10 dark:hover:bg-[#1a73e8]/20 hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors"
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#1a73e8] border-gray-300 dark:border-gray-600 rounded focus:ring-[#1a73e8]"
                />
                <div className="flex ml-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">& Up</span>
            </label>
          ))}
        </div>
      </div>

      {/* Applied Filters */}
      {(selectedCategories.length > 0 || selectedTags.length > 0 || selectedRatings.length > 0) && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Applied Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId)
              return category ? (
                <div
                  key={categoryId}
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700"
                >
                  <span>{category.name}</span>
                  <button onClick={() => toggleCategory(categoryId)} className="ml-1 text-gray-500 hover:text-gray-700">
                    <X size={14} />
                  </button>
                </div>
              ) : null
            })}

            {selectedTags.map((tagId) => {
              const tag = tags.find((t) => t.id === tagId)
              return tag ? (
                <div key={tagId} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                  <span>{tag.name}</span>
                  <button onClick={() => toggleTag(tagId)} className="ml-1 text-gray-500 hover:text-gray-700">
                    <X size={14} />
                  </button>
                </div>
              ) : null
            })}

            {selectedRatings.map((rating) => (
              <div key={rating} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                <span>{rating}+ Stars</span>
                <button onClick={() => toggleRating(rating)} className="ml-1 text-gray-500 hover:text-gray-700">
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
