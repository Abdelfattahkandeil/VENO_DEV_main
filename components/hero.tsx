"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: `linear-gradient(45deg, #6C63FF ${i * 20}%, #F9A826)`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Welcome to</span>
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-amber-400 bg-clip-text text-transparent animate-gradient text-5xl md:text-7xl">
              VENO.DEV
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">Frontend Development Portfolio</p>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies and creative
            design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg"
            >
              View Projects
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              variant="outline"
              className="px-8 py-6 rounded-full text-lg border-2"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <Button
        onClick={() => {
          const element = document.getElementById("about")
          if (element) element.scrollIntoView({ behavior: "smooth" })
        }}
        variant="ghost"
        size="icon"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  )
}
