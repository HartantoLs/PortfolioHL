import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getProjectById, projects } from "@/lib/projects-data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.2),transparent)]" />

      <Navigation />

      <article className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="space-y-6 sm:space-y-8">
            <Link
              href="/works"
              className="inline-flex items-center text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors group"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-primary font-medium text-pretty">{project.tagline}</p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </Button>
                </Link>
              )}
              <Link href={project.githubUrl} target="_blank" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/30 bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-500 group">
            <Image
              src={project.detailImage || project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="space-y-10 sm:space-y-12 text-base sm:text-lg leading-relaxed">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full" />
                Overview
              </h2>
              <p className="text-muted-foreground text-pretty">{project.description}</p>
            </div>

            {project.challenge && (
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-destructive rounded-full" />
                  The Challenge
                </h2>
                <p className="text-muted-foreground text-pretty">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-green-500 rounded-full" />
                  The Solution
                </h2>
                <p className="text-muted-foreground text-pretty">{project.solution}</p>
              </div>
            )}
            
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-primary rounded-full" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {project.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="group/card relative bg-gradient-to-br from-muted/30 via-background/50 to-muted/20 rounded-xl p-5 sm:p-6 border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg shadow-primary/30 group-hover/card:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="pr-6">
                        <p className="text-muted-foreground text-pretty leading-relaxed">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-lg font-semibold border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
