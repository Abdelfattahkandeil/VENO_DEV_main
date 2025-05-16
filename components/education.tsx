"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Briefcase } from "lucide-react"

export default function Education() {
  const education = [
    {
      type: "education",
      title: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Specialized in Web Development and User Interface Design with honors.",
    },
    {
      type: "certification",
      title: "Advanced Frontend Development",
      institution: "Frontend Masters",
      period: "2021",
      description: "Comprehensive certification covering advanced React patterns and performance optimization.",
    },
    {
      type: "work",
      title: "Senior Frontend Developer",
      institution: "TechCorp Solutions",
      period: "2020 - Present",
      description: "Leading frontend development for enterprise web applications and mentoring junior developers.",
    },
    {
      type: "work",
      title: "UI/UX Developer",
      institution: "Creative Digital Agency",
      period: "2018 - 2020",
      description: "Designed and implemented user interfaces for various client projects across different industries.",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <BookOpen className="h-5 w-5" />
      case "certification":
        return <Award className="h-5 w-5" />
      case "work":
        return <Briefcase className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            My academic background and professional journey that have shaped my expertise in frontend development.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} icon={getIcon(item.type)} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
  icon,
}: {
  item: {
    title: string
    institution: string
    period: string
    description: string
    type: string
  }
  index: number
  icon: React.ReactNode
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2"></div>

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
        {icon}
      </div>

      <div className={`md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
        <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-sm text-primary font-medium mb-1">{item.period}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <div className="text-foreground/70 mb-3">{item.institution}</div>
            <p className="text-foreground/80">{item.description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
