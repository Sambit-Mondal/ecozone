import { ArrowRight, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EcoRecommendations() {
  const recommendations = [
    {
      title: "Switch to LED Bulbs",
      description: "Replace 5 remaining incandescent bulbs to save 45 kg CO₂ annually",
      impact: "High",
      effort: "Low",
      savings: "₹1,200/year",
    },
    {
      title: "Install Smart Thermostat",
      description: "Optimize heating/cooling to reduce energy consumption by 15%",
      impact: "High",
      effort: "Medium",
      savings: "₹3,500/year",
    },
    {
      title: "Start Composting",
      description: "Divert 80% of kitchen waste from landfills",
      impact: "Medium",
      effort: "Medium",
      savings: "₹800/year",
    },
    {
      title: "Use Reusable Water Bottles",
      description: "Replace single-use bottles to save 156 plastic bottles annually",
      impact: "Medium",
      effort: "Low",
      savings: "₹2,400/year",
    },
  ]

  return (
    <div className="space-y-4">
      {recommendations.map((rec, i) => (
        <div key={i} className="p-4 border rounded-lg space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 rounded-full">
                <Lightbulb className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium">{rec.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Learn More
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span
              className={`px-2 py-1 rounded-full ${
                rec.impact === "High" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {rec.impact} Impact
            </span>
            <span
              className={`px-2 py-1 rounded-full ${
                rec.effort === "Low" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {rec.effort} Effort
            </span>
            <span className="font-medium text-green-600">{rec.savings}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
