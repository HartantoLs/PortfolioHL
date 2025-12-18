import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <Navigation />
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 animate-fade-in-up">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl rotate-6 blur-sm" />
              <div className="relative w-full h-full bg-card rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                <img src="/professional-portrait.png" alt="Hartanto Luwis" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">About Me</h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                I'm Hartanto Luwis, a fourth-year Information System and Technology student at ITB passionate about
                building meaningful digital solutions
              </p>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12 animate-fade-in-up animation-delay-200">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed">
              <p className="text-pretty">
                Hartanto is a fourth-year Information System and Technology student at ITB. He is interested in web
                development, data analytics, AI, and project management, with a focus on aligning technical solutions
                with business objectives. He is an enthusiastic learner who adapts well to new challenges and considers
                multiple perspectives in problem-solving.
              </p>

              <p className="text-pretty">
                Currently pursuing his degree at Bandung Institute of Technology, Hartanto has gained hands-on
                experience through various internships spanning software development, data analytics, and project
                management. His work includes building full-stack web applications, developing predictive models, and
                leading teams to deliver impactful technical solutions.
              </p>
            </div>

            <div className="pt-4 sm:pt-8 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold">My Journey</h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                    <span className="text-sm text-muted-foreground">Jun 2025 — Aug 2025</span>
                  </div>
                  <p className="text-muted-foreground mb-3">PT Tunas Baru Lampung Tbk, Lampung, Indonesia</p>
                  <p className="mb-4">
                    Developed an internal web-based inventory management system covering front-end, back-end, and
                    database design. Automated stock management processes, reducing manual recording efforts and
                    improving data accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Database Design
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Full-Stack
                    </span>
                  </div>
                </div>

                <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold">Project Manager Intern</h3>
                    <span className="text-sm text-muted-foreground">Aug 2024 — Feb 2025</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Tracer Study ITB, Bandung, Indonesia</p>
                  <p className="mb-4">
                    Planned and coordinated tracer study project activities, monitored team progress, and prepared
                    project reports. Led a data analyst team in developing a predictive model, presented at the National
                    Information Systems Conference 2025.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Project Management
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Data Analysis
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Team Leadership
                    </span>
                  </div>
                </div>

                <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-muted/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold">Basic Programming Laboratory Assistant</h3>
                    <span className="text-sm text-muted-foreground">Feb 2024 — Jun 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Comlabs-USDI ITB, Bandung, Indonesia</p>
                  <p className="mb-4">
                    Assisted and supported first-year students completing all required modules during basic programming
                    practicum sessions. Evaluated student assessments and addressed technical issues during
                    examinations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm font-medium">
                      Teaching
                    </span>
                    <span className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm font-medium">
                      Programming
                    </span>
                    <span className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm font-medium">
                      Mentoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Skills & Certifications</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Programming:</strong> Web Development, Database Management,
                      Data Analysis
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Tools:</strong> Visual Studio Code, Figma, GitHub, ArchiMate,
                      CodeIgniter
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Duolingo English Test (DET) - Score 120</p>
                    <p className="text-muted-foreground">Samsung Innovation Campus Certification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-8 flex justify-center md:justify-start">
              <Link href="https://drive.google.com/your-cv-link" target="_blank" className="inline-block">
                <Button
                  size="lg"
                  className="text-base sm:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                >
                  Download Full CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
