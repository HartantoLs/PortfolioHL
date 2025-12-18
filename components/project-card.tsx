"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  variant?: "large" | "medium" | "small"
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  variant = "small",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const heightClasses = {
    large: "h-full min-h-[600px] lg:min-h-[700px]",
    medium: "h-full min-h-[400px] lg:min-h-[340px]",
    small: "h-full min-h-[520px]",
  }

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button, a")) {
      return
    }
    router.push(`/works/${id}`)
  }

  return (
    <Card
      className={`overflow-hidden group border-border/40 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 bg-card/80 backdrop-blur-xl relative ${heightClasses[variant]} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative h-full flex flex-col">
        <div className="block flex-shrink-0">
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30 ${
              variant === "large"
                ? "h-[320px] lg:h-[380px]"
                : variant === "medium"
                  ? "h-[200px] lg:h-[180px]"
                  : "h-[260px]"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div
              className={`absolute inset-0 flex items-center justify-center gap-3 lg:gap-4 transition-all duration-500 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {liveUrl && (
                <Link href={liveUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
                  <Button
                    size={variant === "large" ? "default" : "sm"}
                    className="shadow-2xl backdrop-blur-md bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/20 group/btn"
                  >
                    <svg
                      className="w-4 h-4 sm:mr-2 group-hover/btn:rotate-45 transition-transform duration-300"
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
                    <span className="hidden sm:inline">Live Demo</span>
                  </Button>
                </Link>
              )}
              <Link href={githubUrl || '/'} target="_blank" onClick={(e) => e.stopPropagation()}>
                <Button
                  size={variant === "large" ? "default" : "sm"}
                  variant="secondary"
                  className="shadow-2xl backdrop-blur-md bg-background/90 hover:bg-secondary group/btn"
                >
                  <svg
                    className="w-4 h-4 sm:mr-2 group-hover/btn:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="hidden sm:inline">Source</span>
                </Button>
              </Link>
            </div>

            <div className="absolute top-4 right-4 w-12 h-12 lg:w-20 lg:h-20 border-t-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        <div className="block flex-1">
          <div
            className={`relative flex flex-col ${variant === "large" ? "p-6 lg:p-8" : "p-5 lg:p-6"} bg-card/50 h-full group-hover:bg-card/70 transition-colors duration-500`}
          >
            <div className="flex-1 flex flex-col min-h-0">
              <div className="space-y-2 lg:space-y-3 mb-4">
                <h3
                  className={`font-bold group-hover:text-primary transition-colors leading-tight line-clamp-2 ${
                    variant === "large" ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-muted-foreground leading-relaxed line-clamp-2 ${
                    variant === "large" ? "text-sm lg:text-base" : "text-xs lg:text-sm"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 lg:gap-2 pt-4 border-t border-border/50 mt-auto">
              {technologies.slice(0, variant === "large" ? 5 : 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 lg:px-3 py-1 lg:py-1.5 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-lg text-[10px] lg:text-xs font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/15 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > (variant === "large" ? 5 : 4) && (
                <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 text-muted-foreground text-[10px] lg:text-xs font-medium bg-muted/30 rounded-lg border border-border/50">
                  +{technologies.length - (variant === "large" ? 5 : 4)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
