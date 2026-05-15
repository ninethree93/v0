import Image from "next/image"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cycling.jpg"
          alt="Professional cyclist in aerodynamic position during race"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <p className="text-primary-foreground/70 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6">
            Race Performance Equipment
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.1] tracking-tight">
            <span className="block">No bottle ejection.</span>
            <span className="block mt-2 md:mt-4 text-primary-foreground/80">Built for race conditions.</span>
          </h1>
        </div>
      </div>

      <Link 
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ArrowDown className="w-6 h-6" />
      </Link>
    </section>
  )
}
