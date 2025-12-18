import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-background order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/40 to-primary/10 rounded-[60px] sm:rounded-[80px] rotate-12 hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
                About My Journey
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                A fourth-year Information System and Technology student at ITB with a passion for web development, data
                analytics, AI, and project management. I focus on aligning technical solutions with business objectives,
                approaching challenges with adaptability and multiple perspectives.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Through internships at organizations like PT Tunas Baru Lampung, ITB Research Labs, and Comlabs-USDI, I
                have developed full-stack applications, led data analyst teams, and mentored fellow students. I'm an
                enthusiastic learner who thrives in collaborative environments.
              </p>
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
