import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Rear Hydration Mount",
    description: "Carbon fiber construction with integrated bottle retention. Designed for triathlon bikes and time trial setups.",
    image: "/images/product-mount.jpg",
    status: "available",
  },
  {
    id: 2,
    name: "Bottle Retention Clip",
    description: "Precision-engineered clip system. Zero ejection guarantee under race conditions.",
    image: "/images/product-clip.jpg",
    status: "available",
  },
  {
    id: 3,
    name: "Wind Sensor",
    description: "Real-time aero data for triathlon testing. Optimize your position with precise wind measurements.",
    image: "/images/product-sensor.jpg",
    status: "coming-soon",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Products
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance">
            Engineered for Performance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square relative bg-secondary mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.status === "coming-soon" && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs uppercase tracking-wider px-3 py-1">
                    Coming Soon
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              {product.status === "available" && (
                <button className="inline-flex items-center gap-2 text-sm font-medium group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
