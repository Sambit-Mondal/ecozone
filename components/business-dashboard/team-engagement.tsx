import { Award, MessageSquare } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function TeamEngagement() {
  const engagementData = {
    participationRate: 78,
    activeChallenges: 3,
    completedTraining: 85,
    suggestions: 12,
  }

  return (
    <div className="space-y-4">
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <p className="text-2xl font-bold text-green-600">{engagementData.participationRate}%</p>
        <p className="text-sm text-gray-600">Team Participation</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-yellow-600" />
            <span className="text-sm">Active Challenges</span>
          </div>
          <span className="font-medium">{engagementData.activeChallenges}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>Training Completion</span>
            <span>{engagementData.completedTraining}%</span>
          </div>
          <Progress value={engagementData.completedTraining} className="h-2" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-blue-600" />
            <span className="text-sm">Suggestions</span>
          </div>
          <span className="font-medium">{engagementData.suggestions}</span>
        </div>
      </div>
    </div>
  )
}
