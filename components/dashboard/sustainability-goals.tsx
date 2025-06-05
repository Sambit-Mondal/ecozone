import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface Goal {
  title: string
  target: number
  current: number
  unit: string
  deadline: string
  status: "ahead" | "on-track" | "behind"
}

interface SustainabilityGoalsProps {
  goals: Goal[]
}

export function SustainabilityGoals({ goals }: SustainabilityGoalsProps) {
  return (
    <div className="space-y-6">
      {goals.map((goal, i) => (
        <div key={i} className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{goal.title}</h4>
            <Badge
              variant={goal.status === "ahead" ? "default" : goal.status === "on-track" ? "secondary" : "destructive"}
            >
              {goal.status === "ahead" ? "Ahead" : goal.status === "on-track" ? "On Track" : "Behind"}
            </Badge>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>
                {goal.current} / {goal.target} {goal.unit}
              </span>
              <span className="text-gray-500">Due: {goal.deadline}</span>
            </div>
            <Progress value={(goal.current / goal.target) * 100} className="h-2" />
          </div>
        </div>
      ))}
    </div>
  )
}
