import Header from "@/components/header"
import ProjectsGrid from "@/components/projects-grid"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Education />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
