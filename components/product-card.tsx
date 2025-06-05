import Image from "next/image"
import { Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: {
    name: string
    price: number
    image: string
    impact: string
    category: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          <Badge className="absolute top-3 right-3 bg-green-100 text-green-800 hover:bg-green-200">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-4 w-4 text-green-600" />
          <span className="text-sm text-gray-600">{product.impact}</span>
        </div>
        <div className="font-bold text-xl">₹{product.price}</div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
