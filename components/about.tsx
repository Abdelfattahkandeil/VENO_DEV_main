"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            I'm a passionate frontend developer with a keen eye for design and a commitment to creating exceptional user
            experiences. With expertise in modern web technologies, I bring ideas to life through clean code and
            creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon={<Code className="h-10 w-10 text-purple-500" />}
            title="Clean Code"
            description="I write maintainable, scalable, and efficient code following best practices and industry standards."
          />
          <FeatureCard
            icon={<Palette className="h-10 w-10 text-blue-500" />}
            title="Creative Design"
            description="I blend aesthetics with functionality to create visually appealing and intuitive user interfaces."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-amber-400" />}
            title="Performance Focused"
            description="I optimize applications for speed and efficiency, ensuring smooth user experiences across all devices."
          />
        </div>
      </motion.div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
