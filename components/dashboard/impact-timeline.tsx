import { Calendar, Leaf, ShoppingBag, Target, Zap } from "lucide-react"

export function ImpactTimeline() {
  const events = [
    {
      date: "Dec 2023",
      title: "Started Sustainability Journey",
      description: "Created account and set first goals",
      icon: Target,
      color: "bg-blue-100 text-blue-600",
    },
    {
      date: "Jan 2024",
      title: "First Eco Purchase",
      description: "Bought reusable water bottle and bamboo toothbrush",
      icon: ShoppingBag,
      color: "bg-green-100 text-green-600",
    },
    {
      date: "Feb 2024",
      title: "Energy Efficiency Upgrade",
      description: "Installed LED bulbs and smart power strips",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      date: "Mar 2024",
      title: "Zero Waste Week",
      description: "Successfully completed first zero waste challenge",
      icon: Leaf,
      color: "bg-green-100 text-green-600",
    },
    {
      date: "Apr 2024",
      title: "100kg CO₂ Milestone",
      description: "Reached first major carbon savings milestone",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      {events.map((event, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${event.color}`}>
            <event.icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium">{event.title}</h4>
              <span className="text-sm text-gray-500">{event.date}</span>
            </div>
            <p className="text-sm text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
