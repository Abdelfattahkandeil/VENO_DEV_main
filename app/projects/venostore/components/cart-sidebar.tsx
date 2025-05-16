"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingCart, Trash2, ChevronRight } from "lucide-react"
import { useCart } from "../context/cart-context"
import Link from "next/link"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  // Close cart when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Cart Sidebar - Z-pattern for urgency */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-800 shadow-xl z-50 flex flex-col"
          >
            {/* Header - Z-pattern top */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-300 mr-2" />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Your Cart ({cartItems.length})</h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items - Z-pattern middle */}
            <div className="flex-grow overflow-y-auto py-4 px-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Looks like you haven't added any products to your cart yet.</p>
                  <button
                    onClick={onClose}
                    className="bg-[#1a73e8] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#1a73e8]/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li
                      key={`${item.id}-${item.selectedColor || ""}-${item.selectedSize || ""}`}
                      className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-700"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg?height=80&width=80"}
                          alt={item.name}
                          className="w-full h-full object-cover dark:opacity-90"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.name}</h4>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {item.selectedColor && <span className="mr-2">Color: {item.selectedColor}</span>}
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item, Math.max(1, (item.quantity || 1) - 1))}
                              className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={(item.quantity || 1) <= 1}
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-gray-900 dark:text-white">{item.quantity || 1}</span>
                            <button
                              onClick={() => updateQuantity(item, (item.quantity || 1) + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="font-medium text-gray-900 dark:text-white">
                              ${((item.salePrice || item.price) * (item.quantity || 1)).toFixed(2)}
                            </div>
                            {item.salePrice && (
                              <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                ${(item.price * (item.quantity || 1)).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart Summary - Z-pattern bottom */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/50">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button - Z-pattern: CTA at bottom */}
                <Link
                  href="/projects/venostore/checkout"
                  className="w-full bg-[#1a73e8] text-white font-medium py-3 px-4 rounded-xl hover:bg-[#1a73e8]/90 transition-colors flex items-center justify-center"
                  onClick={onClose}
                >
                  Proceed to Checkout
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>

                <button onClick={onClose} className="w-full text-[#1a73e8] font-medium py-2 mt-2 hover:underline">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
