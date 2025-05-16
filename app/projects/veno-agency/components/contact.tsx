"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react"
import { NeonButton } from "./ui/button"

export default function Contact() {
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1A1A]/90 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00F5D4]/5 to-transparent z-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <div className="w-20 h-1 bg-[#00F5D4] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
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
              <div className="w-16 h-1 bg-[#00F5D4] mb-6"></div>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#00F5D4]/10 border border-[#00F5D4]/30 rounded-lg p-6 text-center"
                >
                  <MessageSquare className="w-12 h-12 text-[#00F5D4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00F5D4] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00F5D4] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00F5D4] transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-[#00F5D4] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <div>
                    <NeonButton
                      type="submit"
                      className="w-full py-3 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </NeonButton>
                  </div>
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
              <div className="w-16 h-1 bg-[#00F5D4] mb-6"></div>
              <p className="text-gray-300 mb-8">Feel free to reach out to us through any of the following channels.</p>

              <div className="space-y-6 mb-12">
                <ContactInfo
                  icon={<Mail />}
                  title="Email Us"
                  content="info@venoagency.com"
                  link="mailto:info@venoagency.com"
                />
                <ContactInfo icon={<Phone />} title="Call Us" content="+1 (555) 123-4567" link="tel:+15551234567" />
                <ContactInfo
                  icon={<MapPin />}
                  title="Visit Us"
                  content="123 Design Street, Creative City, 10001"
                  link="#"
                />
                <ContactInfo icon={<Clock />} title="Business Hours" content="Monday - Friday: 9AM - 6PM" link="#" />
              </div>

              <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-gray-400 mb-4">
                  Stay connected with us on social media for the latest updates, insights, and inspiration.
                </p>
                <div className="flex space-x-4">
                  <SocialButton href="#" aria-label="Twitter">
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
                  </SocialButton>
                  <SocialButton href="#" aria-label="Instagram">
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
                  </SocialButton>
                  <SocialButton href="#" aria-label="LinkedIn">
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </SocialButton>
                  <SocialButton href="#" aria-label="Dribbble">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </SocialButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <div className="w-20 h-1 bg-[#00F5D4] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Located in the heart of the city, our office is easily accessible by public transportation.
            </p>
          </motion.div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center">
              <p className="text-gray-400">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-[#00F5D4]">Start Your Project</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Our team is ready to help you create something amazing.
            </p>
            <NeonButton size="lg">Schedule a Consultation</NeonButton>
          </motion.div>
        </div>
      </section>
    </motion.div>
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
      <div className="w-10 h-10 bg-[#00F5D4]/10 rounded-full flex items-center justify-center text-[#00F5D4] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <a href={link} className="text-gray-400 hover:text-[#00F5D4] transition-colors">
          {content}
        </a>
      </div>
    </div>
  )
}

interface SocialButtonProps {
  href: string
  children: React.ReactNode
  "aria-label": string
}

function SocialButton({ href, children, "aria-label": ariaLabel }: SocialButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="w-10 h-10 bg-[#1A1A1A] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00F5D4] hover:border-[#00F5D4]/50 hover:shadow-[0_0_10px_rgba(0,245,212,0.3)] transition-all duration-300"
    >
      {children}
    </a>
  )
}
