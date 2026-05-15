import { Instagram, Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-balance">
              {"Let's Connect"}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Questions about our products or interested in collaboration? 
              Reach out through Instagram or email — we respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <a 
              href="https://instagram.com/veloxracing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border pb-6 hover:border-foreground transition-colors"
            >
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5" />
                <span className="text-lg">@veloxracing</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a 
              href="mailto:hello@veloxracing.com"
              className="group flex items-center justify-between border-b border-border pb-6 hover:border-foreground transition-colors"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5" />
                <span className="text-lg">hello@veloxracing.com</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
