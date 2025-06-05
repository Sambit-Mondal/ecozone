"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface BusinessAnalyticsChartProps {
  timeRange: string
}

export function BusinessAnalyticsChart({ timeRange }: BusinessAnalyticsChartProps) {
  // Mock data - in real app this would be fetched based on timeRange
  const data = [
    { month: "Jan", emissions: 1200, target: 1100, savings: 150 },
    { month: "Feb", emissions: 1150, target: 1050, savings: 280 },
    { month: "Mar", emissions: 1080, target: 1000, savings: 420 },
    { month: "Apr", emissions: 1020, target: 950, savings: 580 },
    { month: "May", emissions: 950, target: 900, savings: 750 },
    { month: "Jun", emissions: 880, target: 850, savings: 920 },
    { month: "Jul", emissions: 820, target: 800, savings: 1100 },
    { month: "Aug", emissions: 780, target: 750, savings: 1250 },
  ]

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 border rounded-lg shadow-lg">
                    <p className="font-medium">{label}</p>
                    <p className="text-red-600">Emissions: {payload[0].value} kg CO₂</p>
                    <p className="text-blue-600">Target: {payload[1].value} kg CO₂</p>
                    <p className="text-green-600">Cumulative Savings: {payload[2].value} kg CO₂</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Area type="monotone" dataKey="emissions" stroke="#ef4444" fill="#fef2f2" strokeWidth={2} />
          <Area type="monotone" dataKey="target" stroke="#3b82f6" fill="#eff6ff" strokeWidth={2} />
          <Area type="monotone" dataKey="savings" stroke="#16a34a" fill="#f0fdf4" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
