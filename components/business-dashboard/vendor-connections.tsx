import { Building2, MapPin, Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function VendorConnections() {
  const vendors = [
    {
      id: 1,
      name: "EcoPackaging Solutions",
      category: "Packaging",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      certifications: ["FSC Certified", "Biodegradable"],
      description: "Sustainable packaging solutions made from recycled and biodegradable materials",
      priceRange: "₹₹",
      responseTime: "2-4 hours",
    },
    {
      id: 2,
      name: "GreenLogistics Pro",
      category: "Transportation",
      location: "Delhi, NCR",
      rating: 4.6,
      certifications: ["Carbon Neutral", "Electric Fleet"],
      description: "Eco-friendly logistics and transportation services with electric vehicle fleet",
      priceRange: "₹₹₹",
      responseTime: "1-2 hours",
    },
    {
      id: 3,
      name: "Renewable Energy Systems",
      category: "Energy",
      location: "Bangalore, Karnataka",
      rating: 4.9,
      certifications: ["ISO 14001", "Solar Certified"],
      description: "Solar panel installation and renewable energy solutions for businesses",
      priceRange: "₹₹₹₹",
      responseTime: "4-6 hours",
    },
    {
      id: 4,
      name: "Sustainable Materials Co.",
      category: "Raw Materials",
      location: "Chennai, Tamil Nadu",
      rating: 4.7,
      certifications: ["Organic", "Fair Trade"],
      description: "Ethically sourced raw materials and sustainable manufacturing supplies",
      priceRange: "₹₹",
      responseTime: "2-3 hours",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Green Vendor Network</CardTitle>
          <CardDescription>Connect with pre-vetted sustainable vendors for your business needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Building2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{vendor.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{vendor.category}</Badge>
                        <span className="text-sm text-gray-500">{vendor.priceRange}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{vendor.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm">{vendor.description}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {vendor.location}
                </div>

                <div className="flex flex-wrap gap-2">
                  {vendor.certifications.map((cert, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-500">Response time: {vendor.responseTime}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Profile
                    </Button>
                    <Button size="sm">Get Quote</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
