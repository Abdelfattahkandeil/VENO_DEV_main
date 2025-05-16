"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Code, Layers, Zap, Monitor, Users, TrendingUp } from "lucide-react"
import { NeonButton, SplitButton } from "./ui/button"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error)
      })
    }
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background video with overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1A1A]/70 z-10"></div>
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/placeholder.svg" type="video/mp4" />
          </video>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Design <span className="text-[#00F5D4]">Digital Experiences</span> That Matter
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                VenoAgency is a creative design studio specializing in crafting unique digital solutions that elevate
                brands and drive business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <SplitButton
                  leftContent="View Our Work"
                  rightContent={<ArrowRight size={18} />}
                  className="text-base"
                />
                <NeonButton variant="outline">Learn More</NeonButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src="/venoagency.jpg?height=800&width=800"
                  alt="Digital Design Concept"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-[#00F5D4] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-[#00F5D4] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Monitor />}
              title="Web Design"
              description="We create stunning, responsive websites that captivate your audience and drive conversions."
              delay={0.1}
            />
            <ServiceCard
              icon={<Code />}
              title="Web Development"
              description="Our developers build robust, scalable web applications using cutting-edge technologies."
              delay={0.2}
            />
            <ServiceCard
              icon={<Layers />}
              title="UI/UX Design"
              description="We craft intuitive user experiences and interfaces that delight your users."
              delay={0.3}
            />
            <ServiceCard
              icon={<Zap />}
              title="Digital Marketing"
              description="Strategic marketing solutions to boost your online presence and reach your target audience."
              delay={0.4}
            />
            <ServiceCard
              icon={<Users />}
              title="Brand Strategy"
              description="We help define and develop your brand identity to stand out in a competitive market."
              delay={0.5}
            />
            <ServiceCard
              icon={<TrendingUp />}
              title="Growth Consulting"
              description="Data-driven strategies to scale your business and achieve sustainable growth."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Turn <span className="text-[#00F5D4]">Ideas</span> Into Reality
              </h2>
              <p className="text-gray-300 mb-6">
                At VenoAgency, we believe that great design is about more than just aesthetics—it's about solving
                problems and creating meaningful experiences that resonate with users.
              </p>
              <p className="text-gray-300 mb-8">
                Our team of designers, developers, and strategists work collaboratively to bring your vision to life,
                delivering solutions that are both beautiful and functional.
              </p>
              <NeonButton>Our Process</NeonButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Our Design Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#111111] to-[#1A1A1A]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-[#00F5D4]">Digital Journey</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Get in touch with our team today to discuss your
              project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NeonButton size="lg">Get in Touch</NeonButton>
              <NeonButton variant="outline" size="lg">
                View Our Work
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-[#1A1A1A]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00F5D4]/30 hover:shadow-[0_0_15px_rgba(0,245,212,0.15)] transition-all duration-300"
    >
      <div className="w-12 h-12 bg-[#00F5D4]/10 rounded-lg flex items-center justify-center text-[#00F5D4] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
