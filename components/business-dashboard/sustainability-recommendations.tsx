import { AlertTriangle, CheckCircle, Clock, DollarSign, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Recommendation {
  id: number
  title: string
  description: string
  impact: string
  savings: string
  carbonSaving: string
  status: string
  priority: string
}

interface SustainabilityRecommendationsProps {
  recommendations: Recommendation[]
}

export function SustainabilityRecommendations({ recommendations }: SustainabilityRecommendationsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Sustainability Recommendations</CardTitle>
          <CardDescription>Actionable insights to reduce your environmental impact and costs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recommendations.map((rec) => (
              <div key={rec.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(rec.status)}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{rec.title}</h3>
                        <Badge className={getPriorityColor(rec.priority)}>{rec.priority} priority</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{rec.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Implement</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Annual Savings</p>
                      <p className="font-semibold text-green-600">{rec.savings}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <Leaf className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Carbon Reduction</p>
                      <p className="font-semibold text-blue-600">{rec.carbonSaving}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Impact Level</p>
                      <p className="font-semibold text-purple-600">{rec.impact}</p>
                    </div>
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
