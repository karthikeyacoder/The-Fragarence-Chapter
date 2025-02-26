"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://png.pngtree.com/background/20250116/original/pngtree-a-bottle-of-perfume-that-says-the-brand-on-it-picture-image_15713679.jpg"
          alt="Luxury perfume"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center" data-aos="fade-up">
          <div className="text-white space-y-6 max-w-2xl">
            <div className="text-sm tracking-wide">SIGNATURE COLLECTION</div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Luxury Fragrances
              <br />
              For Every Occasion
            </h1>
            <p className="text-lg opacity-90">
              Discover our collection of handcrafted perfumes,
              <br />
              made with the finest ingredients from around the world.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-light">Signature Fragrances</h2>
          <p className="text-gray-600">Handcrafted with passion and precision</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Midnight Orchid",
              price: "120.00",
              image: "/placeholder.svg",
            },
            {
              name: "Ocean Breeze",
              price: "95.00",
              image: "/placeholder.svg",
            },
            {
              name: "Wild Rose",
              price: "150.00",
              image: "/placeholder.svg",
            },
            {
              name: "Cedar & Sage",
              price: "135.00",
              image: "/placeholder.svg",
            },
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={i * 100}>
              <Link href={`/product/${product.name.toLowerCase().replace(/ /g, "-")}`}>
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-sm font-medium group-hover:text-gray-600">{product.name}</h3>
                  <div className="text-sm">₹{product.price}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-[#F8F8F8] p-8 flex items-center" data-aos="fade-right">
          <div className="space-y-4">
            <div className="text-sm tracking-wide">NEW ARRIVAL</div>
            <h3 className="text-2xl font-light">
              Limited Edition
              <br />
              Summer Collection
            </h3>
            <Button variant="link" className="p-0 text-black hover:text-gray-600">
              Discover Now →
            </Button>
          </div>
        </div>
        <div className="bg-[#E8EFEA] p-8 flex items-center" data-aos="fade-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-light">COMING SOOOONNNN...</h3>
            <p className="text-gray-600">Experience luxury for less</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-600">
              Shop Now →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

