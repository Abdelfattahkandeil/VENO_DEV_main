"use client"

import type React from "react"

import { useState } from "react"
import Header from "../components/header"
import { useCart } from "../context/cart-context"
import { Check, CreditCard, Truck, User } from "lucide-react"

// Checkout steps
const STEPS = {
  CONTACT: 0,
  SHIPPING: 1,
  PAYMENT: 2,
  REVIEW: 3,
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(STEPS.CONTACT)
  const [contactInfo, setContactInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  })
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("credit")
  
  const { cartItems, cartTotal } = useCart()
  
  // Handle form submissions for each step
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(STEPS.SHIPPING)
  }
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(STEPS.PAYMENT)
  }
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(STEPS.REVIEW)
  }
  
  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to the backend
    alert("Order placed successfully!")
  }
  
  // Calculate order summary
  const subtotal = cartTotal
  const shipping = shippingMethod === "express" ? 15 : 5
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onCartClick={() => {}} />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
            
            {/* Checkout Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {/* Step 1: Contact */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center mb-2
                    ${currentStep >= STEPS.CONTACT 
                      ? 'bg-[#1a73e8] text-white' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {currentStep > STEPS.CONTACT ? <Check size={20} /> : <User size={20} />}
                  </div>
                  <span className={`text-sm ${currentStep >= STEPS.CONTACT ? 'text-[#1a73e8] font-medium' : 'text-gray-500'}`}>
                    Contact
                  </span>
                </div>
                
                {/* Connector */}
                <div className={`flex-1 h-1 mx-2 ${currentStep > STEPS.CONTACT ? 'bg-[#1a73e8]' : 'bg-gray-200'}`}></div>
                
                {/* Step 2: Shipping */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center mb-2
                    ${currentStep >= STEPS.SHIPPING 
                      ? 'bg-[#1a73e8] text-white' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {currentStep > STEPS.SHIPPING ? <Check size={20} /> : <Truck size={20} />}
                  </div>
                  <span className={`text-sm ${currentStep >= STEPS.SHIPPING ? 'text-[#1a73e8] font-medium' : 'text-gray-500'}`}>
                    Shipping
                  </span>
                </div>
                
                {/* Connector */}
                <div className={`flex-1 h-1 mx-2 ${currentStep > STEPS.SHIPPING ? 'bg-[#1a73e8]' : 'bg-gray-200'}`}></div>
                
                {/* Step 3: Payment */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center mb-2
                    ${currentStep >= STEPS.PAYMENT 
                      ? 'bg-[#1a73e8] text-white' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {currentStep > STEPS.PAYMENT ? <Check size={20} /> : <CreditCard size={20} />}
                  </div>
                  <span className={`text-sm ${currentStep >= STEPS.PAYMENT ? 'text-[#1a73e8] font-medium' : 'text-gray-500'}`}>
                    Payment
                  </span>
                </div>
                
                {/* Connector */}
                <div className={`flex-1 h-1 mx-2 ${currentStep > STEPS.PAYMENT ? 'bg-[#1a73e8]' : 'bg-gray-200'}`}></div>
                
                {/* Step 4: Review */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center mb-2
                    ${currentStep >= STEPS.REVIEW 
                      ? 'bg-[#1a73e8] text-white' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    <Check size={20} />
                  </div>
                  <span className={`text-sm ${currentStep >= STEPS.REVIEW ? 'text-[#1a73e8] font-medium' : 'text-gray-500'}`}>
                    Review
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Checkout Forms */}
              <div className="lg:w-2/3">
                {/* Step 1: Contact Information */}
                {currentStep === STEPS.CONTACT && (
                  <div className="bg-white rounded-2xl shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    
                    <form onSubmit={handleContactSubmit}>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#1a73e8] focus:ring-[#1a73e8]"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 \
