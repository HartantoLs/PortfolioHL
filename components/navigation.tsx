"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/hl-logo.png"
                alt="HL Logo"
                width={70}
                height={70}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hartanto Luwis
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 bg-secondary/40 backdrop-blur-sm rounded-full p-1.5 border border-border/50 shadow-xl shadow-primary/10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 relative overflow-hidden",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/70",
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {pathname === link.href && (
                    <>
                      <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-background/50 animate-pulse" />
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 blur-xl" />
                    </>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="container mx-auto px-6 pt-24">
            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "p-4 rounded-2xl text-lg font-semibold transition-all duration-300 animate-fade-in-up",
                    pathname === link.href
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-xl shadow-primary/30"
                      : "bg-card/50 border border-border/50 text-foreground hover:border-primary/50 hover:shadow-lg",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}