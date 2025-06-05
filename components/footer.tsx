import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
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
            <p className="text-gray-600">
              Your automated green partner for carbon-zero optimization. Track, transform, and thrive with Ecozon.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">For Businesses</h3>
            <ul className="space-y-3">
              {[
                { label: "Business Intelligence", href: "/business" },
                { label: "Data Analysis", href: "/business/analysis" },
                { label: "Sustainability Dashboard", href: "/business/dashboard" },
                { label: "Green Vendor Network", href: "/business/vendors" },
                { label: "Case Studies", href: "/business/case-studies" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">For Individuals</h3>
            <ul className="space-y-3">
              {[
                { label: "Marketplace", href: "/marketplace" },
                { label: "Eco Plans", href: "/marketplace/plans" },
                { label: "Disposal Guides", href: "/guides/disposal" },
                { label: "Chrome Extension", href: "/extension" },
                { label: "Impact Calculator", href: "/calculator" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Get the latest sustainability tips and exclusive offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-white" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ecozon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
