"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Header from "../../components/header"
import Footer from "../../components/footer"
import ProductGallery from "../../components/product-gallery"
import CartSidebar from "../../components/cart-sidebar"
import { products } from "../../data/products"
import { useCart } from "../../context/cart-context"
import { Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react"
import Link from "next/link"
import ProductCard from "../../components/product-card"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id.toString() === productId) || products[0]

  const [cartOpen, setCartOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [isFavorite, setIsFavorite] = useState(false)

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    })
    setCartOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onCartClick={() => setCartOpen(true)} />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm">
            <Link href="/projects/venostore" className="text-gray-500 hover:text-[#1a73e8]">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link href="/projects/venostore/products" className="text-gray-500 hover:text-[#1a73e8]">
              Products
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link
              href={`/projects/venostore/products?category=${product.category}`}
              className="text-gray-500 hover:text-[#1a73e8]"
            >
              {product.category}
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Gallery - Left side */}
            <div className="lg:w-1/2">
              <ProductGallery product={product} />
            </div>

            {/* Product Info - Right side */}
            <div className="lg:w-1/2">
              {/* Category */}
              <div className="text-sm text-gray-500 mb-2">{product.category}</div>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">${product.salePrice.toFixed(2)}</span>
                    <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <span className="bg-[#fbbc05] text-gray-900 text-sm font-bold px-2 py-1 rounded">
                      {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-gray-600 mb-8">{product.description}</p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Color: <span className="text-gray-600">{selectedColor}</span>
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`
                          h-10 w-10 rounded-full border-2 transition-all
                          ${selectedColor === color ? "border-[#1a73e8] ring-2 ring-[#1a73e8]/30" : "border-gray-300"}
                        `}
                        style={{ backgroundColor: color }}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      Size: <span className="text-gray-600">{selectedSize}</span>
                    </h3>
                    <button className="text-sm text-[#1a73e8] hover:underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`
                          min-w-[4rem] py-2 px-3 rounded-lg border text-sm font-medium transition-all
                          ${
                            selectedSize === size
                              ? "border-[#1a73e8] bg-[#1a73e8]/5 text-[#1a73e8]"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity:</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="h-10 w-10 rounded-l-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="h-10 w-16 border-t border-b border-gray-300 text-center text-gray-900"
                  />
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="h-10 w-10 rounded-r-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart and Wishlist */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#1a73e8] text-white font-medium py-3 px-6 rounded-xl hover:bg-[#1a73e8]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`
                    p-3 rounded-xl border transition-colors
                    ${
                      isFavorite
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }
                  `}
                  aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart size={20} className={isFavorite ? "fill-current" : ""} />
                </button>

                <button
                  className="p-3 rounded-xl border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
                  aria-label="Share product"
                >
                  <Share2 size={20} />
                </button>
              </div>

              {/* Shipping and Returns */}
              <div className="bg-gray-100 rounded-xl p-4 mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Truck className="h-5 w-5 text-[#1a73e8] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Free Shipping</h4>
                    <p className="text-sm text-gray-600">Free standard shipping on orders over $50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="h-5 w-5 text-[#1a73e8] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Secure Payment</h4>
                    <p className="text-sm text-gray-600">Your payment information is processed securely</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="h-5 w-5 text-[#1a73e8] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">30-Day Returns</h4>
                    <p className="text-sm text-gray-600">Simple returns up to 30 days from purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs - Description, Reviews, FAQ */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${
                      activeTab === "description"
                        ? "border-[#1a73e8] text-[#1a73e8]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${
                      activeTab === "reviews"
                        ? "border-[#1a73e8] text-[#1a73e8]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  Reviews ({product.reviewCount})
                </button>
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${
                      activeTab === "faq"
                        ? "border-[#1a73e8] text-[#1a73e8]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  FAQ
                </button>
              </nav>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
                  <p className="mb-4">{product.description}</p>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,
                    nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
                    lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Features</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>High-quality materials</li>
                    <li>Durable construction</li>
                    <li>Comfortable fit</li>
                    <li>Versatile design</li>
                    <li>Easy to clean</li>
                  </ul>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Specifications</h3>
                  <table className="w-full mb-4">
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 pr-4 font-medium text-gray-900">Material</td>
                        <td className="py-2 text-gray-600">Premium quality</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 pr-4 font-medium text-gray-900">Dimensions</td>
                        <td className="py-2 text-gray-600">10 x 20 x 5 cm</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 pr-4 font-medium text-gray-900">Weight</td>
                        <td className="py-2 text-gray-600">500g</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 pr-4 font-medium text-gray-900">Origin</td>
                        <td className="py-2 text-gray-600">Made in USA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                  <div className="flex items-center mb-8">
                    <div className="flex mr-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium">{product.rating} out of 5</span>
                      <p className="text-sm text-gray-500">Based on {product.reviewCount} reviews</p>
                    </div>
                    <div className="ml-auto">
                      <button className="bg-[#1a73e8] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#1a73e8]/90 transition-colors">
                        Write a Review
                      </button>
                    </div>
                  </div>

                  {/* Sample Reviews */}
                  <div className="space-y-8">
                    {/* Review 1 */}
                    <div className="border-b border-gray-200 pb-8">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium text-gray-900">John Doe</h3>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Excellent product!</h4>
                      <p className="text-gray-600 mb-4">
                        I'm extremely satisfied with this product. The quality is outstanding and it exceeded my
                        expectations. Would definitely recommend!
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Verified Purchase</span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Size: M</span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Color: Blue</span>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="border-b border-gray-200 pb-8">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium text-gray-900">Jane Smith</h3>
                        <span className="text-sm text-gray-500">1 week ago</span>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Great value for money</h4>
                      <p className="text-gray-600 mb-4">
                        This product offers great value for the price. The quality is good and it serves its purpose
                        well. The only minor issue is that the color is slightly different from what's shown in the
                        pictures.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Verified Purchase</span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Size: S</span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Color: Red</span>
                      </div>
                    </div>

                    {/* Review 3 */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium text-gray-900">Michael Johnson</h3>
                        <span className="text-sm text-gray-500">2 weeks ago</span>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Perfect fit and great quality</h4>
                      <p className="text-gray-600 mb-4">
                        I'm very happy with my purchase. The product fits perfectly and the quality is excellent. The
                        shipping was also very fast. I'll definitely buy from this store again.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Verified Purchase</span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Size: L</span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Color: Black</span>
                      </div>
                    </div>
                  </div>

                  {/* Load More Button */}
                  <div className="mt-8 text-center">
                    <button className="text-[#1a73e8] font-medium hover:underline">Load More Reviews</button>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">What materials is this product made from?</h3>
                      <p className="text-gray-600">
                        This product is made from high-quality, sustainable materials that are designed to last. We
                        source our materials from trusted suppliers who meet our strict quality standards.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">How do I care for this product?</h3>
                      <p className="text-gray-600">
                        We recommend gentle hand washing with mild soap and water. Avoid using harsh chemicals or
                        abrasive cleaners. Allow to air dry completely before storing.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">What is the warranty period?</h3>
                      <p className="text-gray-600">
                        This product comes with a 1-year limited warranty that covers manufacturing defects. Please
                        contact our customer service team if you experience any issues with your purchase.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Is this product suitable for children?</h3>
                      <p className="text-gray-600">
                        This product is designed for adult use. We recommend supervision for children under 12 years of
                        age.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Do you offer international shipping?</h3>
                      <p className="text-gray-600">
                        Yes, we ship to most countries worldwide. Shipping times and costs vary depending on your
                        location. You can view the shipping options available to you during checkout.
                      </p>
                    </div>
                  </div>

                  {/* Ask a Question */}
                  <div className="mt-8 bg-gray-100 rounded-xl p-6">
                    <h3 className="font-medium text-gray-900 mb-4">Don't see your question? Ask us directly</h3>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Type your question here..."
                        className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                      />
                      <button className="bg-[#1a73e8] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#1a73e8]/90 transition-colors">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} viewMode="grid" />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
