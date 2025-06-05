"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "For Businesses", href: "/business" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: "/dashboard" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Ecozon Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-bold">Ecozon</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/marketplace/cart" className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-600 text-[10px] font-medium text-white flex items-center justify-center">
                2
              </span>
            </Link>
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button asChild className="hidden md:flex">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Ecozon Logo"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <span className="text-xl font-bold">Ecozon</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 py-6">
                    {navItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4">
                    <Button asChild className="w-full">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/login">Log In</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
