"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "UI/UX Design", level: 85 },
    { name: "Responsive Design", level: 95 },
  ]

  const technologies = [
    "Redux",
    "GraphQL",
    "SASS/SCSS",
    "Framer Motion",
    "Jest",
    "Webpack",
    "Git",
    "Figma",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80">
            I've honed my skills across various frontend technologies and design principles to deliver exceptional web
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Core Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
