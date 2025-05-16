"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Users, CreditCard, Check } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  destination: any
}

export default function BookingModal({ isOpen, onClose, destination }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    adults: 2,
    children: 0,
    specialRequests: "",
  })

  // Reset step when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit booking
      console.log("Booking submitted:", formData)
      setTimeout(() => {
        onClose()
      }, 2000)
    }
  }

  const stepTitles = ["Personal Information", "Trip Details", "Payment Information"]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0081A7] text-white p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {step === 3
                    ? "Complete Your Booking"
                    : `Book Your Trip ${destination ? `to ${destination.name}` : ""}`}
                </h2>
                <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Progress steps */}
              <div className="flex justify-between mt-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= i ? "bg-[#F07167] text-white" : "bg-white/30 text-white"
                      }`}
                    >
                      {step > i ? <Check size={16} /> : i}
                    </div>
                    <span className="text-xs mt-1 text-white/80">{stepTitles[i - 1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date*
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                        />
                        <Calendar
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                        End Date*
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                        />
                        <Calendar
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                        Adults*
                      </label>
                      <div className="relative">
                        <select
                          id="adults"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7] appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <Users
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                        Children
                      </label>
                      <div className="relative">
                        <select
                          id="children"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7] appearance-none"
                        >
                          {[0, 1, 2, 3, 4].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <Users
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      placeholder="Any special requirements or preferences?"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number*
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date*
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV*
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card*
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">Booking Summary</h3>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Destination:</span>
                      <span className="font-medium">{destination?.name || "Selected Destination"}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Dates:</span>
                      <span className="font-medium">
                        {formData.startDate} - {formData.endDate}
                      </span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Travelers:</span>
                      <span className="font-medium">
                        {formData.adults} Adults, {formData.children} Children
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold text-[#0081A7]">${destination?.price || "999"}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F07167] text-white rounded-lg hover:bg-[#F07167]/90 transition-colors"
                >
                  {step === 3 ? "Complete Booking" : "Continue"}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
