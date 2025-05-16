"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "VenoProduct",
      category: "Landing Page",
      description: "A modern landing page with Z-pattern layout and gradient CTAs.",
      image: "/placeholder.svg?height=600&width=800",
      colors: ["#6C63FF", "#F9A826", "#FFFFFF"],
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "/projects/veno-product",
      sourceUrl: "https://github.com/veno-dev/veno-product",
    },
    {
      id: 2,
      title: "VenoAgency",
      category: "Agency Site",
      description: "Dark-themed agency website with neon accents and transparent UI elements.",
      image: "/venoagencyproject.jpg?height=600&width=800",
      colors: ["#1A1A1A", "#00F5D4", "#333333"],
      techStack: ["React", "GSAP", "Styled Components", "Three.js"],
      demoUrl: "/projects/veno-agency",
      sourceUrl: "https://github.com/veno-dev/veno-agency",
    },
    {
      id: 3,
      title: "VenoBlog",
      category: "Blog",
      description: "Dark-themed blog with F-pattern layout, card-based posts in purple scheme.",
      image: "/venoblog.jpg?height=600&width=800",
      colors: ["#121212", "#7678ED", "#1E1E1E"],
      techStack: ["Next.js", "MDX", "Tailwind CSS", "Prisma"],
      demoUrl: "/projects/veno-blog",
      sourceUrl: "https://github.com/veno-dev/veno-blog",
    },
    {
      id: 4,
      title: "VenoNotes",
      category: "App",
      description: "Interactive note-taking app with drag-drop functionality and localStorage.",
      image: "/venonotes.jpg?height=600&width=800",
      colors: ["#121212", "#FFD93D", "#6A0572"],
      techStack: ["React", "Framer Motion", "React Draggable", "LocalStorage"],
      demoUrl: "/projects/venonotes",
      sourceUrl: "https://github.com/veno-dev/veno-notes",
    },
    {
      id: 5,
      title: "VenoTravel",
      category: "Booking Site",
      description: "Travel booking site with modal forms, filters, and card-based layout.",
      image: "/venotravelproject.jpg?height=600&width=800",
      colors: ["#0081A7", "#F07167", "#FDFCDC"],
      techStack: ["React", "Next.js", "React Hook Form", "Mapbox"],
      demoUrl: "/projects/venotravel",
      sourceUrl: "https://github.com/veno-dev/veno-travel",
    },
    {
      id: 6,
      title: "VenoCalc",
      category: "Calculator",
      description: "Grid-based calculator with theme toggle functionality and smooth animations.",
      image: "/venocalc.jpg?height=600&width=800",
      colors: ["#14213D", "#FCA311", "#E5E5E5"],
      techStack: ["React", "CSS Grid", "Context API", "TypeScript"],
      demoUrl: "/projects/venocalc",
      sourceUrl: "https://github.com/veno-dev/veno-calc",
    },
    {
      id: 7,
      title: "VenoChat",
      category: "Chat UI",
      description: "Dark-themed chat interface with bubble messages and settings panel.",
      image: "/venochatproject.jpg?height=600&width=800",
      colors: ["#1E272E", "#2C2C54", "#F19066"],
      techStack: ["React", "Framer Motion", "Context API", "TypeScript"],
      demoUrl: "/projects/venochat",
      sourceUrl: "https://github.com/veno-dev/veno-chat",
    },
    {
      id: 8,
      title: "VenoGallery",
      category: "Gallery",
      description: "Masonry grid gallery with lightbox feature and vibrant colors.",
      image: "/placeholder.svg?height=600&width=800",
      colors: ["#9D4EDD", "#FEC260", "#FFFFFF"],
      techStack: ["React", "React Query", "CSS Grid", "Framer Motion"],
      demoUrl: "/projects/venogallery",
      sourceUrl: "https://github.com/veno-dev/veno-gallery",
    },
    {
      id: 9,
      title: "VenoStats",
      category: "Dashboard",
      description: "Data visualization dashboard with modern UI and interactive charts.",
      image: "/placeholder.svg?height=600&width=800",
      colors: ["#1F2937", "#10B981", "#F3F4F6"],
      techStack: ["React", "D3.js", "Recharts", "Tailwind CSS"],
      demoUrl: "/projects/venostats",
      sourceUrl: "https://github.com/veno-dev/veno-stats",
    },
    {
      id: 10,
      title: "VenoStore",
      category: "E-commerce",
      description: "E-commerce site with product grid, cart functionality, and checkout process.",
      image: "/placeholder.svg?height=600&width=800",
      colors: ["#FF6B6B", "#4ECDC4", "#FFFFFF"],
      techStack: ["React", "Redux Toolkit", "Stripe", "Firebase"],
      demoUrl: "/projects/venostore",
      sourceUrl: "https://github.com/veno-dev/veno-store",
    },
  ]

  const categories = [
    "all",
    "Landing Page",
    "Agency Site",
    "Blog",
    "App",
    "Booking Site",
    "Calculator",
    "Chat UI",
    "Gallery",
    "Dashboard",
    "E-commerce",
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            Explore my portfolio of frontend development projects showcasing diverse skills and creative solutions.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`capitalize ${
                filter === category ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
