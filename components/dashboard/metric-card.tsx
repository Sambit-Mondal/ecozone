import type { LucideIcon } from "lucide-react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string
  change: number
  icon: LucideIcon
  trend: "up" | "down"
}

export function MetricCard({ title, value, change, icon: Icon, trend }: MetricCardProps) {
  const isPositive = (trend === "up" && change > 0) || (trend === "down" && change < 0)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs mt-1">
          {isPositive ? (
            <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
          )}
          <span className={isPositive ? "text-green-600" : "text-red-600"}>{Math.abs(change)}%</span>
          <span className="text-gray-500 ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}
