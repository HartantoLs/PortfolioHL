"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { useState, useMemo } from "react"
import { projects } from "@/lib/projects-data"

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const categoryCounts = useMemo(() => {
    return {
      all: otherProjects.length,
      fullstack: otherProjects.filter((p) => p.category === "fullstack").length,
      frontend: otherProjects.filter((p) => p.category === "frontend").length,
      ai: otherProjects.filter((p) => p.category === "ai").length,
      mobile: otherProjects.filter((p) => p.category === "mobile").length,
      data: otherProjects.filter((p) => p.category === "data").length,
    }
  }, [otherProjects])

  const filteredOtherProjects =
    activeCategory === "all" ? otherProjects : otherProjects.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <Navigation />

      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10 max-w-[1400px]">
        <div className="space-y-12 lg:space-y-16">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Complete Portfolio</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                Featured & Side
                <br />
                <span className="text-gradient bg-gradient-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                Exploring the intersection of design and technology through innovative web applications
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Work</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-fr">
              <div className="lg:col-span-7 lg:row-span-2">
                <ProjectCard {...featuredProjects[0]} variant="large" />
              </div>
              <div className="lg:col-span-5 lg:row-span-1">
                <ProjectCard {...featuredProjects[1]} variant="medium" />
              </div>
              <div className="lg:col-span-5 lg:row-span-1">
                <ProjectCard {...featuredProjects[2]} variant="medium" />
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl lg:text-4xl font-bold">More Projects</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              <div className="flex items-center justify-start gap-3 flex-wrap">
                {[
                  { id: "all", label: "All", count: categoryCounts.all },
                  { id: "fullstack", label: "Full-Stack", count: categoryCounts.fullstack },
                  { id: "frontend", label: "Frontend", count: categoryCounts.frontend },
                  { id: "ai", label: "AI/ML", count: categoryCounts.ai },
                  { id: "mobile", label: "Mobile", count: categoryCounts.mobile },
                  { id: "data", label: "Data Science", count: categoryCounts.data },
                ].map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                        : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <span>{category.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        activeCategory === category.id
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(500px,1fr)]">
              {filteredOtherProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProjectCard {...project} variant="small" />
                </div>
              ))}
            </div>

            {filteredOtherProjects.length === 0 && (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <p className="text-xl text-muted-foreground">No projects found in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
