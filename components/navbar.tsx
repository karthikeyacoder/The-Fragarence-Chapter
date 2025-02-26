"use client"

import Link from "next/link"
import { Search, ShoppingBag, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <>


      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-xl font-medium">
                  THE FRAGRANCE CHAPTER
                </Link>
                <Link href="/shop" className="text-sm hover:text-gray-600">
                  Shop
                </Link>
                <Link href="/blog" className="text-sm hover:text-gray-600">
                  Blog
                </Link>
                <Link href="/elements" className="text-sm hover:text-gray-600">
                  Elements
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/shop" className="text-sm hover:text-gray-600">
              Shop
            </Link>
            <Link href="/blog" className="text-sm hover:text-gray-600">
              Blog
            </Link>
            <Link href="/elements" className="text-sm hover:text-gray-600">
              Elements
            </Link>
          </nav>

          <Link href="/" className="text-2xl font-medium">
          The Fragrance Chapter
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

