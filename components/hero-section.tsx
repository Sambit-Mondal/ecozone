import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
            Track, Transform & Thrive — Your eco-journey, simplified
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            From Insights to Impact – Automate Your Journey to Net Zero
          </h1>
          <p className="text-gray-600 md:text-xl max-w-2xl mx-auto">
            Empower your business and lifestyle with AI-driven sustainability solutions. Get personalized
            recommendations, track your impact, and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/signup">Start for Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-green-100 opacity-50 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-green-200 opacity-50 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-green-300 opacity-30 blur-xl"></div>
    </section>
  )
}
