"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  colors: string[]
  techStack: string[]
  demoUrl: string
  sourceUrl: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)
  const primaryColor = project.colors[0]

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      style={
        {
          "--project-color": primaryColor,
          "--project-color-10": `${primaryColor}1A`,
        } as React.CSSProperties
      }
    >
      <Card
        className="overflow-hidden border-2 border-border/50 hover:border-[var(--project-color)] transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.title === "VenoProduct" ? "/venoproductproject.jpg" : (project.image || "/placeholder.svg")}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Overlay with project info on hover */}
          <div
            className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 text-white opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            <p className="text-center mb-4">{project.description}</p>
            <div className="flex gap-3">
              <Button
                size="sm"
                className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                style={{ backgroundColor: primaryColor }}
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-white/70 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                asChild
              >
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>

          {/* Category badge */}
          <Badge className="absolute top-3 right-3 z-10" style={{ backgroundColor: primaryColor }}>
            {project.category}
          </Badge>
        </div>

        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>

          {/* Color palette */}
          <div className="flex gap-1 mb-4">
            {project.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border border-border/50"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
