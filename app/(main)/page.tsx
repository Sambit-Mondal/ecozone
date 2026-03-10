import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ProductCard } from "@/components/product-card"
import { BusinessFeatures } from "@/components/business-features"
import { AuthCTAButton } from "@/components/auth-cta-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Main Value Proposition */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Dual Platform Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              One platform, two powerful solutions for sustainability
            </h2>
            <p className="text-gray-600 md:text-xl">
              Ecozon bridges the gap between businesses seeking to reduce their carbon footprint and consumers wanting
              to make sustainable choices.
            </p>

            <Tabs defaultValue="business" className="w-full">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="business">For Businesses</TabsTrigger>
                <TabsTrigger value="consumer">For Consumers</TabsTrigger>
              </TabsList>
              <TabsContent value="business" className="space-y-4 mt-4">
                <p>Transform your business operations with AI-powered sustainability insights and recommendations.</p>
                <ul className="space-y-2">
                  {[
                    "Analyze your business processes",
                    "Get actionable eco-friendly recommendations",
                    "Track your carbon footprint reduction",
                    "Connect with green vendors",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link href="/business">
                    Explore B2B Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </TabsContent>
              <TabsContent value="consumer" className="space-y-4 mt-4">
                <p>Discover sustainable products and services to transform your lifestyle and home.</p>
                <ul className="space-y-2">
                  {[
                    "Shop curated eco-friendly products",
                    "Get personalized sustainability tips",
                    "Track your environmental impact",
                    "Join a community of eco-conscious consumers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link href="/marketplace">
                    Visit Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </TabsContent>
            </Tabs>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Ecozon Platform" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="bg-green-50 py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Business Intelligence Engine</h2>
            <p className="text-gray-600 md:text-xl">
              Leverage AI to analyze your business processes and get actionable recommendations to reduce your carbon
              footprint.
            </p>
          </div>

          <BusinessFeatures />

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/business">
                Get Started with Business Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Sustainable Marketplace</h2>
          <p className="text-gray-600 md:text-xl">
            Discover curated eco-friendly products and services to transform your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Bamboo Cutlery Set",
              price: 499,
              image: "/placeholder.svg?height=300&width=300",
              impact: "Saves 120 plastic utensils per year",
              category: "Kitchen",
            },
            {
              name: "Solar Power Bank",
              price: 1299,
              image: "/placeholder.svg?height=300&width=300",
              impact: "Reduces 15kg CO₂ emissions annually",
              category: "Electronics",
            },
            {
              name: "Compost Starter Kit",
              price: 899,
              image: "/placeholder.svg?height=300&width=300",
              impact: "Diverts 200kg waste from landfills yearly",
              category: "Garden",
            },
          ].map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/marketplace">
              Explore All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Chrome Extension */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Shop Green Everywhere with Our Chrome Extension
              </h2>
              <p className="md:text-xl">
                Our browser extension analyzes your online shopping in real-time and suggests eco-friendly alternatives.
              </p>
              <ul className="space-y-4">
                {[
                  "Get eco-ratings for products you browse",
                  "See sustainable alternatives with one click",
                  "Track your environmental impact while shopping",
                  "Receive disposal guides for your purchases",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" className="gap-2">
                <Download className="h-5 w-5" />
                Download Extension
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden bg-white/10 p-4">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Chrome Extension Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="rounded-3xl bg-green-50 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to start your sustainability journey?
              </h2>
              <p className="text-gray-600 md:text-xl">
                Whether you're a business looking to reduce your carbon footprint or an individual seeking sustainable
                alternatives, Ecozon has the tools you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AuthCTAButton size="lg" />
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Sustainability Journey"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
