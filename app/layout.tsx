import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Luxury Fragrances | Home",
  description: "Discover our collection of handcrafted luxury perfumes.",
  icons: {
    icon: "https://res.cloudinary.com/dqwm8wgg8/image/upload/v1739287506/lqdko92v1mnsulox0s2i.png", // Ensure this file is in the public/ directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}

