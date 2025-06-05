import { Calendar, Leaf, ShoppingBag, Target } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "purchase",
      title: "Purchased Bamboo Cutlery Set",
      description: "Saved 120 plastic utensils per year",
      time: "2 hours ago",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      type: "goal",
      title: "Completed Zero Waste Week",
      description: "Achieved 7 days without single-use plastics",
      time: "1 day ago",
      icon: Target,
      color: "text-green-600",
    },
    {
      type: "impact",
      title: "Carbon Footprint Reduced",
      description: "Monthly reduction of 15.2 kg CO₂",
      time: "3 days ago",
      icon: Leaf,
      color: "text-green-600",
    },
    {
      type: "milestone",
      title: "Sustainability Score Improved",
      description: "Reached 78/100 sustainability score",
      time: "1 week ago",
      icon: Calendar,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{activity.title}</p>
            <p className="text-sm text-gray-600">{activity.description}</p>
            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
