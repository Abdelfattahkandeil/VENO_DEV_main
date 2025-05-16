"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, ShoppingCart, Heart } from "lucide-react"
import { useCart } from "../context/cart-context"
import type { Product } from "../data/products"

interface ProductCardProps {
  product: Product
  viewMode: "grid" | "list"
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      className={`
        bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden transition-shadow hover:shadow-md
        ${viewMode === "list" ? "flex" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className={`relative ${viewMode === "list" ? "w-1/3" : "w-full"}`}>
        <Link href={`/projects/venostore/products/${product.id}`}>
          <div className="aspect-square relative overflow-hidden">
            <img
              src={product.image || "/placeholder.svg?height=300&width=300"}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out dark:opacity-90"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Quick view button - F-pattern: Left aligned */}
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <button
                    className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Quick view"
                  >
                    <Eye size={18} className="text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="absolute top-2 left-2 flex flex-col gap-2">
                {product.tags.includes("new") && (
                  <span className="bg-[#1a73e8] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                )}
                {product.tags.includes("sale") && (
                  <span className="bg-[#fbbc05] text-gray-900 text-xs font-bold px-2 py-1 rounded">SALE</span>
                )}
              </div>
            )}
          </div>
        </Link>

        {/* Favorite button */}
        <button
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite 
              ? "bg-red-500 text-white" 
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          } shadow-md transition-colors`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={16} className={isFavorite ? "fill-current" : ""} />
        </button>
      </div>

      {/* Product Info */}
      <div className={`p-4 ${viewMode === "list" ? "w-2/3" : ""}`}>
        {/* Category */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</div>

        {/* Product Name */}
        <Link href={`/projects/venostore/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 dark:text-white hover:text-[#1a73e8] dark:hover:text-[#1a73e8] transition-colors mb-1 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({product.reviewCount})</span>
        </div>

        {/* Description - Only show in list view */}
        {viewMode === "list" && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="font-bold text-gray-900 dark:text-white">${product.salePrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="p-2 rounded-full bg-[#1a73e8]/10 dark:bg-[#1a73e8]/20 text-[#1a73e8] hover:bg-[#1a73e8]/20 dark:hover:bg-[#1a73e8]/30 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
