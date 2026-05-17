import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          VORT VENTO
        </Link>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VORT VENTO. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
