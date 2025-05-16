"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ShoppingCart,
  Volume2,
  Bluetooth,
  Battery,
  Check,
  Star,
  Minus,
  Plus,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  RefreshCw,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VenoProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Midnight Black")
  const [cartOpen, setCartOpen] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const colors = [
    { name: "Midnight Black", hex: "#121212" },
    { name: "Ocean Blue", hex: "#0081A7" },
    { name: "Sunset Orange", hex: "#F07167" },
  ]

  const productImages = [
    "/place%20holder.jpg",
    "/place%20holder2.jpg",
    "/place%20holder3.jpg",
    "/place%20holder4.jpg",
  ]

  const handleAddToCart = () => {
    setAddedToCart(true)
    setCartOpen(true)

    // Reset notification after 3 seconds
    setTimeout(() => {
      setAddedToCart(false)
    }, 3000)
  }

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            VenoProduct
          </div>
          <button
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <ShoppingCart size={24} />
            {addedToCart && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-xs">
                1
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gray-900 border-l border-gray-800 z-50 p-6 overflow-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button className="p-1 text-gray-400 hover:text-white" onClick={() => setCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {addedToCart ? (
                <div className="border border-gray-800 rounded-lg p-4 mb-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-800 rounded-md overflow-hidden relative">
                      <Image
                        src="/placeholder.jpg?height=200&width=200"
                        alt="VenoProduct Speaker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">VenoProduct Speaker</h3>
                      <p className="text-sm text-gray-400">Color: {selectedColor}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="font-semibold">${(199.99 * quantity).toFixed(2)}</p>
                        <div className="flex items-center gap-2">
                          <button
                            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-gray-500"
                            onClick={decrementQuantity}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center">{quantity}</span>
                          <button
                            className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-gray-500"
                            onClick={incrementQuantity}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <ShoppingCart className="mx-auto mb-4 opacity-30" size={40} />
                  <p>Your cart is empty</p>
                </div>
              )}

              <div className="border-t border-gray-800 pt-4 mt-auto">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${addedToCart ? (199.99 * quantity).toFixed(2) : "0.00"}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-400">Shipping</span>
                  <span>{addedToCart ? "Free" : "-"}</span>
                </div>
                <div className="flex justify-between mb-6 text-lg font-bold">
                  <span>Total</span>
                  <span>${addedToCart ? (199.99 * quantity).toFixed(2) : "0.00"}</span>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  disabled={!addedToCart}
                >
                  Checkout
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Product Images */}
              <div className="lg:w-1/2">
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={productImages[currentImage] || "/placeholder.svg"}
                    alt="VenoProduct Smart Speaker"
                    fill
                    className="object-contain p-8"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600">New Release</Badge>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      className={`aspect-square bg-gray-800 rounded-lg overflow-hidden relative ${
                        currentImage === index ? "ring-2 ring-purple-500" : "opacity-70 hover:opacity-100"
                      }`}
                      onClick={() => setCurrentImage(index)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`VenoProduct view ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">(128 reviews)</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">VenoProduct Smart Bluetooth Speaker</h1>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-3xl font-bold">$199.99</span>
                  <span className="text-lg text-gray-400 line-through">$249.99</span>
                  <Badge className="bg-green-600">Save $50</Badge>
                </div>

                <p className="text-gray-300 mb-8">
                  Experience unparalleled sound quality with the VenoProduct smart Bluetooth speaker. Featuring advanced
                  audio technology, seamless connectivity, and a sleek design that complements any space.
                </p>

                {/* Color Selection */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Color</h3>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`w-12 h-12 rounded-full relative ${
                          selectedColor === color.name
                            ? "ring-2 ring-offset-2 ring-offset-gray-900 ring-purple-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color.name)}
                        aria-label={`Select ${color.name} color`}
                      >
                        {selectedColor === color.name && (
                          <Check className="absolute inset-0 m-auto text-white" size={16} />
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Selected: {selectedColor}</p>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-400 mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      className="w-10 h-10 rounded-l-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700"
                      onClick={decrementQuantity}
                    >
                      <Minus size={16} />
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center border-y border-gray-700 bg-gray-800">
                      {quantity}
                    </div>
                    <button
                      className="w-10 h-10 rounded-r-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700"
                      onClick={incrementQuantity}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-700 text-white hover:bg-gray-800 py-6 rounded-lg text-lg"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                </div>

                {/* Product Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <ShieldCheck className="text-purple-400" size={18} />
                    <span>2-Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Truck className="text-purple-400" size={18} />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <RefreshCw className="text-purple-400" size={18} />
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Share2 className="text-purple-400" size={18} />
                    <span>Share Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={<Volume2 className="h-8 w-8 text-purple-400" />}
                    title="Crystal Clear Sound"
                    description="Experience audio like never before with our proprietary sound technology that delivers rich bass, crisp highs, and perfectly balanced mids."
                  />
                  <FeatureCard
                    icon={<Bluetooth className="h-8 w-8 text-blue-400" />}
                    title="Seamless Connectivity"
                    description="Connect effortlessly to any device with advanced Bluetooth 5.2 technology, ensuring stable connections and high-quality audio streaming."
                  />
                  <FeatureCard
                    icon={<Battery className="h-8 w-8 text-yellow-400" />}
                    title="All-Day Battery Life"
                    description="Enjoy up to 24 hours of continuous playback on a single charge, ensuring your music never stops when you need it most."
                  />
                </div>

                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                    <Button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full w-16 h-16 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specs">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                    <table className="w-full">
                      <tbody>
                        <SpecRow label="Dimensions" value="8.5 x 3.5 x 3.5 inches" />
                        <SpecRow label="Weight" value="2.2 lbs (1 kg)" />
                        <SpecRow label="Drivers" value="2 x 20W full-range drivers" />
                        <SpecRow label="Frequency Response" value="20Hz - 20kHz" />
                        <SpecRow label="Battery Capacity" value="10,000mAh" />
                        <SpecRow label="Battery Life" value="Up to 24 hours" />
                        <SpecRow label="Charging Time" value="3 hours" />
                        <SpecRow label="Bluetooth Version" value="5.2" />
                        <SpecRow label="Water Resistance" value="IPX7" />
                        <SpecRow label="Colors Available" value="Midnight Black, Ocean Blue, Sunset Orange" />
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">What's in the Box</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>VenoProduct Smart Speaker</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>USB-C Charging Cable</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>Quick Start Guide</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>Warranty Card (2-year coverage)</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Connectivity Options</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>Bluetooth 5.2</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>Wi-Fi 6 Compatible</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>3.5mm Auxiliary Input</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <span>USB-C for Charging and Audio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="bg-gray-800 rounded-xl p-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 text-center">
                      <div className="text-5xl font-bold mb-2">4.9</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">Based on 128 reviews</p>
                    </div>

                    <div className="md:w-2/3">
                      <div className="space-y-2">
                        <RatingBar rating={5} percentage={85} />
                        <RatingBar rating={4} percentage={12} />
                        <RatingBar rating={3} percentage={2} />
                        <RatingBar rating={2} percentage={1} />
                        <RatingBar rating={1} percentage={0} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <ReviewCard
                    name="Sarah J."
                    role="Music Producer"
                    rating={5}
                    date="2 weeks ago"
                    review="The sound quality is absolutely incredible. I've never heard my music sound this good from a portable speaker. The bass response is particularly impressive for a speaker of this size."
                  />
                  <ReviewCard
                    name="Michael T."
                    role="Outdoor Enthusiast"
                    rating={5}
                    date="1 month ago"
                    review="Battery life is amazing! I took it on a weekend camping trip and it lasted the entire time without needing a recharge. The water resistance came in handy when it started raining."
                  />
                  <ReviewCard
                    name="Emma R."
                    role="Interior Designer"
                    rating={4}
                    date="2 months ago"
                    review="The design is sleek and modern. It looks as good as it sounds, and fits perfectly with my home decor. I only wish it came in more color options to match different interior styles."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <RelatedProductCard name="Smart Bluetooth Speaker Mini" price={99.99} image="/Smart Bluetooth Speakermini.jpg" />
              <RelatedProductCard name="Smart Bluetooth Speaker Pro" price={299.99} image="/Smart Bluetooth Speaker pro_.jpg" />
              <RelatedProductCard name="Smart Bluetooth Speaker Outdoor" price={249.99} image="/Smart Bluetooth Speaker outdoor.jpg" />
              <RelatedProductCard name="Smart Bluetooth Speaker Stereo Set" price={399.99} image="/Smart Bluetooth Speaker stereoset.jpg" />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Subscribe to our newsletter for exclusive deals, new product announcements, and audio tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                VenoProduct
              </div>
              <p className="text-gray-400 mb-4">Premium audio experiences for the discerning listener.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Special Offers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns & Warranty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <Link href="/#projects" className="hover:text-white">
                    Back to Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2023 VenoProduct. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-gray-700 last:border-0">
      <td className="py-3 text-gray-400">{label}</td>
      <td className="py-3 text-right">{value}</td>
    </tr>
  )
}

function RatingBar({ rating, percentage }: { rating: number; percentage: number }) {
  return (
    <div className="flex items-center">
      <div className="w-12 text-sm text-gray-400">{rating} star</div>
      <div className="flex-1 mx-3 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="w-8 text-sm text-right text-gray-400">{percentage}%</div>
    </div>
  )
}

function ReviewCard({
  name,
  role,
  rating,
  date,
  review,
}: { name: string; role: string; rating: number; date: string; review: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
        <div className="text-sm text-gray-400">{date}</div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"}`} />
        ))}
      </div>
      <p className="text-gray-300">{review}</p>
    </div>
  )
}

function RelatedProductCard({ name, price, image }: { name: string; price: number; image: string }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-colors group">
      <div className="aspect-square relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain p-4" />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${price.toFixed(2)}</span>
          <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
