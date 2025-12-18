"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "./navigation"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById("works-preview")
    worksSection?.scrollIntoView({ behavior: "smooth" })
  }

  const heroRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        cursorRef.current.style.left = `${x}px`
        cursorRef.current.style.top = `${y}px`
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove)
      return () => hero.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navigation />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

        <div
          ref={cursorRef}
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-[100px] pointer-events-none transition-[left,top] duration-300 ease-out"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-primary">Available for new opportunities</span>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance leading-[1.1] px-4">
              <span className="inline-block animate-gradient bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text text-transparent">
                Hartanto Luwis
              </span>
              <br />
              {/* <span className="text-foreground">Full-Stack Developer & Data Enthusiast</span> */}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty px-4">
              Information Systems student at ITB specializing in web development, data analytics, and AI. I build
              scalable solutions that align technical innovation with business objectives, transforming complex
              challenges into user-centric digital experiences.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 animate-fade-in-up animation-delay-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 group transition-all duration-300 hover:scale-105"
                onClick={scrollToWorks}
              >
                View My Work
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 border-primary/30 bg-secondary/50 hover:bg-secondary hover:border-primary/50 text-foreground backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  About Me
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-4 px-4">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-1 border-x border-border/50">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">4+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">2025</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Expected Graduation</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-4 animate-fade-in-up animation-delay-400">
            <Link
              href="https://github.com/HartantoLs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/hartantoluwis"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="mailto:hartantoluwis14@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
