"use client"

import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import FilterSidebar from "../components/filter-sidebar"
import ProductCard from "../components/product-card"
import CartSidebar from "../components/cart-sidebar"
import { products } from "../data/products"
import { Grid, List, SlidersHorizontal, ChevronDown } from "lucide-react"

export default function ProductsPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header onCartClick={() => setCartOpen(true)} />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* F-pattern: Left sidebar */}
            <div className="md:w-1/4 lg:w-1/5">
              <FilterSidebar />
            </div>

            {/* F-pattern: Main content area */}
            <div className="md:w-3/4 lg:w-4/5">
              {/* Page header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Products</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length}{" "}
                  products
                </p>
              </div>

              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                {/* View mode and sort */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                    <button
                      className={`p-2 ${
                        viewMode === "grid" 
                          ? "bg-gray-100 dark:bg-gray-800" 
                          : "bg-white dark:bg-gray-700"
                      }`}
                      onClick={() => setViewMode("grid")}
                      aria-label="Grid view"
                    >
                      <Grid size={20} className="text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                      className={`p-2 ${
                        viewMode === "list" 
                          ? "bg-gray-100 dark:bg-gray-800" 
                          : "bg-white dark:bg-gray-700"
                      }`}
                      onClick={() => setViewMode("list")}
                      aria-label="List view"
                    >
                      <List size={20} className="text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>

                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-4 pr-10 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="best-selling">Best Selling</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Mobile filter button */}
                <button className="sm:hidden flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-200">
                  <SlidersHorizontal size={16} />
                  <span>Filter</span>
                </button>
              </div>

              {/* Product grid - F-pattern: Main content */}
              <div
                className={`
                ${
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-6"
                }
              `}
              >
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>

              {/* Pagination - F-pattern: Bottom navigation */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        currentPage === page
                          ? "bg-[#1a73e8] text-white"
                          : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
