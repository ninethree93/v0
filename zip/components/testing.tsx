import Image from "next/image"

export function Testing() {
  return (
    <section id="testing" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">
              Rough Road Testing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-balance">
              Tested in the Harshest Conditions
            </h2>
            <p className="text-background/70 leading-relaxed mb-8 max-w-lg">
              Every product undergoes rigorous testing on cobblestones, gravel, and the roughest race courses. 
              We simulate race conditions that push equipment beyond its limits — so you never have to worry on race day.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-light mb-1">500+</p>
                <p className="text-xs uppercase tracking-wider text-background/60">Test Hours</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light mb-1">0</p>
                <p className="text-xs uppercase tracking-wider text-background/60">Ejections</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light mb-1">100%</p>
                <p className="text-xs uppercase tracking-wider text-background/60">Retention</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/rough-road.jpg"
              alt="Triathlon bike being tested on rough cobblestone road"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
