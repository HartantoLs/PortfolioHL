export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/hl-logo.png" alt="HL Logo" width={50} height={50} />
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Hartanto Luwis. Built with Next.js and deployed on Vercel.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/HartantoLs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hartantoluwis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hartantoluwis14@gmail.com"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
