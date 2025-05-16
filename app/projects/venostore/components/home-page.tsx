"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Zap, Shield, CreditCard, Gift, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section - Z-pattern top */}
      <section className="relative bg-gradient-to-r from-[#1a73e8]/10 to-[#fbbc05]/10 dark:from-[#1a73e8]/5 dark:to-[#fbbc05]/5 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Build your online store with <span className="text-[#1a73e8]">VenoStore</span>
              </motion.h1>
              <motion.p
                className="text-xl text-blue-600 dark:text-blue-300 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Everything you need to create, manage, and grow your e-commerce business in one powerful platform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/projects/venostore/products"
                  className="inline-flex items-center px-6 py-3 bg-[#1a73e8] text-white font-medium rounded-xl hover:bg-[#1a73e8]/90 transition-colors"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            {/* Right side image */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="VenoStore Platform"
                  className="rounded-2xl shadow-xl dark:opacity-90"
                />

                {/* Floating elements for visual interest */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium dark:text-gray-200">Sales up 24%</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <ShoppingBag className="h-5 w-5 text-[#1a73e8] mr-2" />
                    <span className="text-sm font-medium dark:text-gray-200">10k+ Products</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Z-pattern: Primary CTA positioned bottom-right */}
          <div className="mt-16 text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/projects/venostore/admin"
                className="inline-flex items-center px-8 py-4 bg-[#fbbc05] text-gray-900 dark:text-gray-900 font-bold rounded-xl hover:bg-[#fbbc05]/90 transition-colors shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Z-pattern middle (diagonal flow) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features for Your Business</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and scale your online store.
            </p>
          </div>

          {/* Feature cards in a grid - diagonal flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 bg-[#1a73e8]/10 dark:bg-[#1a73e8]/5 rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag className="h-7 w-7 text-[#1a73e8]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Product Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily add, edit, and organize your products with our intuitive interface.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 bg-[#fbbc05]/10 dark:bg-[#fbbc05]/5 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-[#fbbc05]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Checkout</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimize your conversion rate with our streamlined checkout process.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 bg-[#1a73e8]/10 dark:bg-[#1a73e8]/5 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-[#1a73e8]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure Payments</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accept payments securely with our integrated payment solutions.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 bg-[#fbbc05]/10 dark:bg-[#fbbc05]/5 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="h-7 w-7 text-[#fbbc05]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Multiple Payment Options</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support various payment methods to accommodate all your customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Thousands of Businesses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what our customers have to say about VenoStore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fashion Boutique Owner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "VenoStore transformed my business. The platform is intuitive, powerful, and the customer support is exceptional."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Michael Chen</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Electronics Store Owner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The analytics tools have helped us understand our customers better and increase our conversion rate by
                35%."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Handmade Crafts Seller</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "As a small business owner, I needed something easy to use but powerful. VenoStore is the perfect
                solution."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Z-pattern bottom */}
      <section className="py-20 bg-gradient-to-r from-[#1a73e8] to-[#1a73e8]/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Z-pattern: Secondary CTA positioned bottom-left */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/projects/venostore/admin/themes"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1a73e8] font-medium rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Browse Themes
                  <Gift className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            <div className="md:w-1/2 text-center md:text-right">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to grow your business?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join thousands of successful businesses using VenoStore.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/projects/venostore/register"
                  className="inline-flex items-center px-6 py-3 bg-[#fbbc05] text-gray-900 font-medium rounded-xl hover:bg-[#fbbc05]/90 transition-colors"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
