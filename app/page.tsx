import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { WorksPreview } from "@/components/works-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <WorksPreview />
      <Footer />
    </main>
  )
}
