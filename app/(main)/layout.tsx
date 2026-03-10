import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  )
}
