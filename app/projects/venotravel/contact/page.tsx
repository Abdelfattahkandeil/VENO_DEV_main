"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-[#FDFCDC] text-gray-800">
      {/* Back to portfolio link */}
      <div className="fixed top-4 left-4 z-40">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#0081A7] hover:text-[#F07167] transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </Link>
      </div>

      <Header activePage="contact" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#0081A7]">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help you plan your perfect journey.
            </p>
          </motion.div>
        </div>

        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#FDFCDC"
              fillOpacity="1"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <div className="w-20 h-1 bg-[#F07167] mb-6"></div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <MessageSquare className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">Message Sent!</h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7]"
                      placeholder="Trip Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081A7] resize-none"
                      placeholder="Tell us about your travel plans or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0081A7] text-white rounded-lg hover:bg-[#0081A7]/90 transition-colors flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="w-20 h-1 bg-[#F07167] mb-6"></div>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you may have about our travel packages, booking process, or special
                requests. Feel free to reach out through any of the following channels.
              </p>

              <div className="space-y-6 mb-12">
                <ContactInfo
                  icon={<Mail />}
                  title="Email Us"
                  content="info@venotravel.com"
                  link="mailto:info@venotravel.com"
                />
                <ContactInfo icon={<Phone />} title="Call Us" content="+1 (555) 123-4567" link="tel:+15551234567" />
                <ContactInfo
                  icon={<MapPin />}
                  title="Visit Our Office"
                  content="123 Travel Street, Adventure City, 10001"
                  link="#"
                />
              </div>

              <div className="bg-[#0081A7]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  * All times are in Eastern Standard Time (EST). For urgent matters outside of business hours, please
                  email our support team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>
          <div className="h-[400px] bg-gray-200 rounded-xl relative">
            {/* This would be a real map in a production environment */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0081A7]/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem
              question="How do I book a trip with VenoTravel?"
              answer="You can book directly through our website by selecting your desired destination and package, then following the booking process. Alternatively, you can contact our team via phone or email for assistance."
            />
            <FaqItem
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, PayPal, and bank transfers. For certain destinations, we also offer payment plans to help you spread the cost of your trip."
            />
            <FaqItem
              question="Can I customize a travel package?"
              answer="We specialize in creating personalized travel experiences. Contact our team with your preferences, and we'll design a custom itinerary just for you."
            />
            <FaqItem
              question="What is your cancellation policy?"
              answer="Our standard policy allows free cancellation up to 30 days before departure. Cancellations between 30-14 days incur a 50% fee, and less than 14 days incur a 100% fee. Travel insurance is recommended."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  content: string
  link: string
}

function ContactInfo({ icon, title, content, link }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#0081A7]/10 rounded-full flex items-center justify-center text-[#0081A7] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <a href={link} className="text-gray-600 hover:text-[#0081A7] transition-colors">
          {content}
        </a>
      </div>
    </div>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
