import Image from "next/image"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Ecozon helped us reduce our packaging waste by 35% and saved us money in the process. The AI recommendations were spot on.",
      author: "Sarah Johnson",
      role: "Sustainability Manager, GreenTech Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The marketplace has transformed how I shop. I love that each product comes with impact metrics and disposal guides.",
      author: "Michael Chen",
      role: "Eco-conscious Consumer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "The Chrome extension is a game-changer. It helps me make better choices while shopping on any website.",
      author: "Priya Sharma",
      role: "Environmental Activist",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="bg-green-50 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What Our Users Say</h2>
          <p className="text-gray-600 md:text-xl">
            Hear from businesses and individuals who have transformed their sustainability journey with Ecozon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="relative h-12 w-12 mb-6">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
