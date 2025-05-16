"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Award, Users, Coffee, Code } from "lucide-react"
import { NeonButton } from "./ui/button"

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1A1A]/90 z-10"></div>
          <Image
            src="/placeholder.svg?height=1200&width=1920"
            alt="About Us Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VenoAgency</h1>
            <div className="w-20 h-1 bg-[#00F5D4] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              We're a team of passionate designers, developers, and strategists dedicated to creating exceptional
              digital experiences that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-[#00F5D4] mb-6"></div>
              <p className="text-gray-300 mb-4">
                Founded in 2018, VenoAgency began with a simple mission: to bridge the gap between stunning design and
                effective functionality. We believed that digital experiences should not only look beautiful but also
                drive meaningful results for businesses.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small team of three has grown into a diverse collective of creative minds from around
                the world, united by our passion for digital excellence and innovation.
              </p>
              <p className="text-gray-300 mb-6">
                Today, we're proud to have partnered with clients across various industries, helping them transform
                their digital presence and achieve their business goals through strategic design and development.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <ValueBadge>Innovation</ValueBadge>
                <ValueBadge>Quality</ValueBadge>
                <ValueBadge>Collaboration</ValueBadge>
                <ValueBadge>Integrity</ValueBadge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=1000&width=1000" alt="Our Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard icon={<Users />} value="120+" label="Happy Clients" />
            <StatCard icon={<Code />} value="350+" label="Projects Completed" />
            <StatCard icon={<Coffee />} value="15k+" label="Cups of Coffee" />
            <StatCard icon={<Award />} value="25+" label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-[#00F5D4] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The creative minds behind VenoAgency's success. Our diverse team brings together expertise from various
              disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Alex Morgan"
              role="Creative Director"
              image="/placeholder.svg?height=500&width=500"
              delay={0.1}
            />
            <TeamMember
              name="Sarah Chen"
              role="Lead Developer"
              image="/placeholder.svg?height=500&width=500"
              delay={0.2}
            />
            <TeamMember
              name="Michael Rodriguez"
              role="UX/UI Designer"
              image="/placeholder.svg?height=500&width=500"
              delay={0.3}
            />
            <TeamMember
              name="Emma Wilson"
              role="Project Manager"
              image="/placeholder.svg?height=500&width=500"
              delay={0.4}
            />
            <TeamMember
              name="David Kim"
              role="Marketing Strategist"
              image="/placeholder.svg?height=500&width=500"
              delay={0.5}
            />
            <TeamMember
              name="Olivia Taylor"
              role="Content Specialist"
              image="/placeholder.svg?height=500&width=500"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-[#111111] to-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#00F5D4] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and define our culture at VenoAgency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
              delay={0.1}
            />
            <ValueCard
              title="Quality"
              description="We're committed to excellence in everything we do, from design and development to client communication."
              delay={0.2}
            />
            <ValueCard
              title="Collaboration"
              description="We believe in the power of teamwork and partnership, both within our team and with our clients."
              delay={0.3}
            />
            <ValueCard
              title="Integrity"
              description="We operate with honesty, transparency, and ethical practices in all our business dealings."
              delay={0.4}
            />
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
              Want to <span className="text-[#00F5D4]">Join Our Team</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. Check out our current openings or
              send us your portfolio.
            </p>
            <NeonButton size="lg">View Careers</NeonButton>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

function ValueBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2 bg-[#00F5D4]/10 border border-[#00F5D4]/30 rounded-full text-[#00F5D4] text-sm">
      {children}
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6"
    >
      <div className="text-[#00F5D4] flex justify-center mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
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
      transition={{ delay, duration: 0.6 }}
      className="group"
    >
      <div className="relative h-80 rounded-lg overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-[#00F5D4]">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface ValueCardProps {
  title: string
  description: string
  delay: number
}

function ValueCard({ title, description, delay }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00F5D4]/30 hover:shadow-[0_0_15px_rgba(0,245,212,0.15)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="text-[#00F5D4] mt-1">
          <CheckCircle size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
