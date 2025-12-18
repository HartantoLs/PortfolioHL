"use client"

import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getFeaturedProjects } from "@/lib/projects-data"

export function WorksPreview() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="works-preview" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(96,165,250,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1] px-4">
              Crafting Digital
              <br />
              <span className="text-gradient bg-gradient-to-r from-primary via-accent to-blue-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto px-4">
              Innovative solutions that blend cutting-edge technology with exceptional user experiences
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
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

          <div className="text-center pt-6 sm:pt-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-primary/50 to-primary" />
                <span className="text-xs sm:text-sm text-muted-foreground font-semibold">Explore More</span>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
              </div>
              <Link href="/works" className="inline-block">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-8 sm:px-10 h-12 sm:h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 group transition-all duration-300 hover:scale-105 border border-primary/30"
                >
                  View All Projects
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="text-primary font-bold">12+</span> projects showcasing diverse technical expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
