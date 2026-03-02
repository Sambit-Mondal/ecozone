import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, Leaf, Search, ShoppingBag, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"

export default function MarketplacePage() {
  const categories = ["All Products", "Kitchen", "Home", "Personal Care", "Garden", "Electronics", "Fashion"]

  const products = [
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
    {
      name: "Reusable Cotton Produce Bags",
      price: 349,
      image: "/placeholder.svg?height=300&width=300",
      impact: "Replaces 100+ plastic bags annually",
      category: "Kitchen",
    },
    {
      name: "Bamboo Toothbrush Set",
      price: 249,
      image: "/placeholder.svg?height=300&width=300",
      impact: "Biodegradable alternative to plastic",
      category: "Personal Care",
    },
    {
      name: "Recycled Paper Notebook",
      price: 199,
      image: "/placeholder.svg?height=300&width=300",
      impact: "Made from 100% post-consumer waste",
      category: "Home",
    },
    {
      name: "Organic Cotton T-shirt",
      price: 799,
      image: "/placeholder.svg?height=300&width=300",
      impact: "Uses 91% less water than conventional cotton",
      category: "Fashion",
    },
    {
      name: "Stainless Steel Water Bottle",
      price: 599,
      image: "/placeholder.svg?height=300&width=300",
      impact: "Replaces 167 plastic bottles yearly",
      category: "Personal Care",
    },
    {
      name: "LED Solar Garden Lights",
      price: 1499,
      image: "/placeholder.svg?height=300&width=300",
      impact: "Zero energy costs, 100% renewable",
      category: "Garden",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Sustainable Shopping
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Shop Eco-Friendly Products for a Sustainable Lifestyle
              </h1>
              <p className="text-gray-600 md:text-xl">
                Discover curated products that help you reduce your environmental footprint while enhancing your daily
                life.
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input className="pl-10 pr-20 py-6 text-lg rounded-full" placeholder="Search sustainable products..." />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full">Search</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Eco-friendly products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sustainable living"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Green lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-8">
        <Tabs defaultValue="All Products" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Browse Categories</h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          <TabsList className="flex w-full h-auto overflow-x-auto pb-2 justify-start">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2 whitespace-nowrap">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(category === "All Products" ? products : products.filter((p) => p.category === category)).map(
                  (product, i) => (
                    <ProductCard key={i} product={product} />
                  ),
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Featured Collections */}
      <section className="bg-green-50 py-12 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Featured Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Waste Kitchen",
                description: "Transform your kitchen with sustainable alternatives to single-use products.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                title: "Eco Home Office",
                description: "Create a sustainable workspace with eco-friendly office essentials.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                title: "Sustainable Garden",
                description: "Grow your own food and create a thriving ecosystem in your backyard.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((collection, i) => (
              <Card key={i} className="border-0 shadow-md overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Explore Collection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Plans */}
      <section className="container py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Monthly Eco Update Plans</h2>
          <p className="text-gray-600 md:text-xl">
            Transform your home with our subscription-based eco-friendly upgrades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: 599,
              description: "Begin your sustainability journey with essential eco-friendly products.",
              features: [
                "Monthly eco-friendly product box",
                "Basic waste collection service",
                "Digital sustainability tips",
                "Access to community events",
              ],
            },
            {
              name: "Premium",
              price: 1299,
              description: "Accelerate your transition to a sustainable lifestyle with premium products and services.",
              features: [
                "Premium eco product box",
                "Weekly waste collection service",
                "Personalized sustainability plan",
                "Home energy assessment",
                "Exclusive workshops and events",
              ],
              popular: true,
            },
            {
              name: "Complete",
              price: 2499,
              description: "Comprehensive home transformation with high-impact sustainable solutions.",
              features: [
                "Luxury eco product box",
                "Unlimited waste collection",
                "Solar panel consultation",
                "Rainwater harvesting system",
                "Composting setup and maintenance",
                "Quarterly home sustainability audit",
              ],
            },
          ].map((plan, i) => (
            <Card key={i} className={`border-0 shadow-md relative ${plan.popular ? "ring-2 ring-green-600" : ""}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">₹{plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : ""}`}>
                  Subscribe Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Our Marketplace?</h2>
              <p className="text-gray-600 md:text-xl">
                We're not just another online store. We're committed to making sustainable living accessible,
                affordable, and impactful.
              </p>
              <ul className="space-y-4">
                {[
                  "Curated products that meet strict sustainability criteria",
                  "Transparent impact metrics for every product",
                  "Disposal and reuse guides included with purchases",
                  "Carbon-neutral shipping and minimal packaging",
                  "Support for local and ethical manufacturers",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-700" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/marketplace/about">
                  Learn More About Our Standards <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Sustainable Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-20">
        <div className="rounded-3xl bg-green-800 text-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to start your eco-friendly journey?
              </h2>
              <p className="md:text-xl">
                Join thousands of individuals who are making a difference with every purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/marketplace/signup">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="/marketplace">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "10,000+ Sustainable Products",
                "5,000+ Happy Customers",
                "100% Carbon Neutral Shipping",
                "30-Day Satisfaction Guarantee",
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-lg">
                  <Leaf className="h-8 w-8 text-green-300 mb-2" />
                  <p className="font-medium">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
