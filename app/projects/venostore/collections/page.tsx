"use client"

import { useState } from "react"
import { Grid, List } from "lucide-react"
import { products } from "../data/products"
import Header from "../components/header"
import { useTheme } from "../context/theme-context"

interface Collection {
  id: string
  name: string
  description: string
  image: string
  products: string[] // Product IDs
}

const collections: Collection[] = [
  {
    id: "1",
    name: "Apple Ecosystem",
    description: "Experience the seamless integration of Apple devices",
    image: "/collections/apple-ecosystem.jpg",
    products: ["1", "3", "5"]
  },
  {
    id: "2",
    name: "Premium Audio",
    description: "High-end audio equipment for the perfect sound",
    image: "/collections/premium-audio.jpg",
    products: ["4"]
  },
  {
    id: "3",
    name: "Professional Workstation",
    description: "Powerful devices for creative professionals",
    image: "/collections/workstation.jpg",
    products: ["3", "6"]
  },
  {
    id: "4",
    name: "Mobile Photography",
    description: "Capture perfect moments with these devices",
    image: "/collections/mobile-photography.jpg",
    products: ["1", "2"]
  }
]

export default function CollectionsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header onCartClick={() => {}} />
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Collections</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Discover our curated collections</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md ${
                  viewMode === "grid" 
                    ? "bg-gray-200 dark:bg-gray-700" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Grid size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md ${
                  viewMode === "list" 
                    ? "bg-gray-200 dark:bg-gray-700" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <List size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Collections Grid/List */}
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }`}
          >
            {collections.map((collection) => (
              <div
                key={collection.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div
                  className={`${
                    viewMode === "list" ? "w-1/3" : "w-full aspect-video"
                  } relative`}
                >
                  <div
                    className="w-full h-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center"
                    style={{ backgroundImage: `url(${collection.image})` }}
                  />
                </div>
                <div className={`p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{collection.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {collection.products.map((productId) => {
                      const product = products.find((p) => p.id === productId)
                      return (
                        product && (
                          <span
                            key={product.id}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                          >
                            {product.name}
                          </span>
                        )
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 