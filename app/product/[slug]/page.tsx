"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square relative bg-gray-100">
              <Image src="/placeholder.svg" alt="Product texture" fill className="object-contain p-12" />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light mb-2">Midnight Orchid</h1>
              <p className="text-gray-600">50ml / 1.7 fl oz</p>
            </div>

            <div className="text-2xl">₹120.00</div>

            <p className="text-gray-600">
              A sophisticated blend of rare orchid, vanilla, and warm amber notes creates an enchanting fragrance that
              captures the mystery of twilight.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Button className="flex-1">ADD TO CART</Button>
                <Button variant="outline" className="flex-1">
                  ADD TO WISHLIST
                </Button>
              </div>
            </div>

            {/* Expandable Sections */}
            {[
              {
                title: "FUNCTIONS",
                content:
                  "A luxurious fragrance that combines floral and oriental notes for a sophisticated and lasting scent.",
              },
              {
                title: "NOTES",
                content: "Top: Bergamot, Pink Pepper\nHeart: Orchid, Jasmine\nBase: Vanilla, Amber, Musk",
              },
              {
                title: "PAYMENT & DELIVERY",
                content: "Free shipping on orders over ₹150. Express delivery available.",
              },
            ].map((section) => (
              <div key={section.title} className="border-t pt-4">
                <button
                  className="w-full flex justify-between items-center py-2"
                  onClick={() => setActiveTab(activeTab === section.title ? null : section.title)}
                >
                  <span className="font-medium">{section.title}</span>
                  <ChevronDown
                    className={`transform transition-transform ${activeTab === section.title ? "rotate-180" : ""}`}
                  />
                </button>
                {activeTab === section.title && (
                  <div className="py-4 text-gray-600 whitespace-pre-line">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="text-2xl font-light mb-12">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square mb-4">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <div className="text-sm">₹{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

