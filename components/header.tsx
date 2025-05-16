"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonStar, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-amber-400 bg-clip-text text-transparent animate-gradient">
            VENO.DEV
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks scrollToSection={scrollToSection} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLinks scrollToSection={scrollToSection} />
          </div>
        </nav>
      )}
    </header>
  )
}

function NavLinks({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void
}) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {["about", "skills", "education", "projects", "contact"].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`
            px-4 py-2 rounded-md cursor-pointer capitalize border-2
            transition-all duration-300 ease-in-out
            ${
              activeSection === section
                ? "bg-primary/10 text-primary border-primary/50 font-medium shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                : "border-transparent text-foreground/80 hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:scale-105"
            }
          `}
        >
          {section}
        </button>
      ))}
    </>
  )
}

function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined
  setTheme: (theme: string) => void
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(124,58,237,0.4)]"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
