import Image from "next/image"

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Triathlon bike transition area setup",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Rear hydration system detail shot",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Athlete crossing finish line",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Professional cycling race setup",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
            Race Day Ready
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
