"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
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

      <Header activePage="about" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#0081A7]">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About VenoTravel</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our story, our mission, and the passionate team behind your travel experiences.
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

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-[#F07167] mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 2010, VenoTravel began with a simple mission: to create authentic travel experiences that
                connect people with the world's most incredible destinations. What started as a small team of passionate
                travelers has grown into a global company serving thousands of adventurers each year.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, Alex and Maria, met while backpacking across Southeast Asia and bonded over their shared
                love of exploration and cultural immersion. They noticed a gap in the travel industry – most tour
                companies either offered budget experiences that missed the authentic local culture or luxury packages
                that felt isolated from the destination.
              </p>
              <p className="text-gray-600">
                VenoTravel was born from their desire to create a different kind of travel company – one that balances
                comfort with authenticity, adventure with relaxation, and personal discovery with environmental
                responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image src="/placeholder.svg?height=800&width=1200" alt="Our Story" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-[#0081A7]/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="w-20 h-1 bg-[#F07167] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 mb-8">
                "To inspire and enable meaningful connections through travel, creating experiences that transform how
                people see the world and their place within it."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">Authentic Experiences</h3>
                  <p className="text-gray-600">
                    We create journeys that go beyond tourist attractions to reveal the true essence of each
                    destination.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">Responsible Travel</h3>
                  <p className="text-gray-600">
                    We're committed to sustainable practices that respect local communities and protect the environment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-3">Personal Growth</h3>
                  <p className="text-gray-600">
                    We believe travel has the power to transform perspectives and create lifelong memories.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate travel experts behind your unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Alex Rodriguez"
              role="Co-Founder & CEO"
              image="/placeholder.svg?height=400&width=400"
              delay={0.1}
            />
            <TeamMember
              name="Maria Chen"
              role="Co-Founder & Creative Director"
              image="/placeholder.svg?height=400&width=400"
              delay={0.2}
            />
            <TeamMember
              name="David Kim"
              role="Head of Operations"
              image="/placeholder.svg?height=400&width=400"
              delay={0.3}
            />
            <TeamMember
              name="Sarah Johnson"
              role="Lead Travel Designer"
              image="/placeholder.svg?height=400&width=400"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#0081A7]/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at VenoTravel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We believe in real experiences that connect travelers with local cultures, traditions, and people. Our
                itineraries are designed to go beyond the surface and reveal the true character of each destination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to responsible travel practices that minimize environmental impact and support local
                communities. We partner with eco-friendly accommodations and promote cultural respect among our
                travelers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in every aspect of our service, from meticulously planned itineraries
                to responsive customer support. We continuously seek feedback and improve our offerings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies that enhance the travel experience. We're always looking for fresh
                perspectives and unique destinations to share with our community of travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from people who have experienced the VenoTravel difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="VenoTravel created the perfect balance of adventure and relaxation. Our guide was knowledgeable and passionate, making every moment special."
              author="Emily T."
              location="European Highlights Tour"
              image="/placeholder.svg?height=200&width=200"
            />
            <Testimonial
              quote="The attention to detail was impressive. From unique accommodations to insider experiences, this wasn't just a trip—it was a journey of discovery."
              author="Michael L."
              location="Japan Explorer Package"
              image="/placeholder.svg?height=200&width=200"
            />
            <Testimonial
              quote="As a solo traveler, I felt welcomed and included. I made lifelong friends and memories that will stay with me forever."
              author="Jessica R."
              location="Southeast Asia Adventure"
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0081A7]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have experienced the world with VenoTravel.
            </p>
            <Link
              href="/projects/venotravel/destinations"
              className="inline-block px-8 py-4 bg-[#F07167] text-white rounded-full text-lg font-medium hover:bg-[#F07167]/90 transition-colors"
            >
              Explore Our Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay: number
}

function TeamMember({ name, role, image, delay }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-[#0081A7]">{role}</p>
      </div>
    </motion.div>
  )
}

interface TestimonialProps {
  quote: string
  author: string
  location: string
  image: string
}

function Testimonial({ quote, author, location, image }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  )
}
