import { CheckCircle, Clock, AlertTriangle, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ComplianceTracker() {
  const complianceItems = [
    {
      id: 1,
      title: "Carbon Footprint Reporting",
      description: "Annual carbon emissions disclosure",
      status: "completed",
      dueDate: "2024-03-31",
      progress: 100,
      category: "Environmental",
    },
    {
      id: 2,
      title: "Waste Management Audit",
      description: "Quarterly waste disposal and recycling audit",
      status: "in-progress",
      dueDate: "2024-06-30",
      progress: 65,
      category: "Environmental",
    },
    {
      id: 3,
      title: "Sustainability Report",
      description: "Annual sustainability and ESG report",
      status: "pending",
      dueDate: "2024-12-31",
      progress: 25,
      category: "ESG",
    },
    {
      id: 4,
      title: "Energy Efficiency Certification",
      description: "ISO 50001 energy management certification",
      status: "overdue",
      dueDate: "2024-04-15",
      progress: 80,
      category: "Energy",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "overdue":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Compliance & Reporting Tracker</CardTitle>
          <CardDescription>Monitor regulatory compliance and sustainability reporting requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {complianceItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge className={getStatusColor(item.status)}>{item.status.replace("-", " ")}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        Due: {new Date(item.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {item.status !== "completed" && <Button size="sm">Update Progress</Button>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>Important compliance dates to remember</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: "Quarterly Emissions Report", date: "2024-07-15", days: 45 },
              { title: "Sustainability Audit", date: "2024-08-30", days: 91 },
              { title: "Green Certification Renewal", date: "2024-09-15", days: 107 },
            ].map((deadline, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{deadline.title}</p>
                  <p className="text-sm text-gray-600">{deadline.date}</p>
                </div>
                <Badge variant={deadline.days < 30 ? "destructive" : deadline.days < 60 ? "default" : "secondary"}>
                  {deadline.days} days
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
