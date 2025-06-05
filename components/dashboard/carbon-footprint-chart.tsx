"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface CarbonFootprintChartProps {
  timeRange: string
}

export function CarbonFootprintChart({ timeRange }: CarbonFootprintChartProps) {
  // Mock data - in real app this would be fetched based on timeRange
  const data = [
    { date: "Jan", saved: 45, baseline: 120 },
    { date: "Feb", saved: 67, baseline: 118 },
    { date: "Mar", saved: 89, baseline: 115 },
    { date: "Apr", saved: 123, baseline: 112 },
    { date: "May", saved: 156, baseline: 110 },
    { date: "Jun", saved: 189, baseline: 108 },
    { date: "Jul", saved: 234, baseline: 105 },
    { date: "Aug", saved: 246, baseline: 103 },
  ]

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 border rounded-lg shadow-lg">
                    <p className="font-medium">{label}</p>
                    <p className="text-green-600">CO₂ Saved: {payload[0].value} kg</p>
                    <p className="text-gray-600">Baseline: {payload[1].value} kg</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            dataKey="saved"
            stroke="#16a34a"
            strokeWidth={3}
            dot={{ fill: "#16a34a", strokeWidth: 2, r: 4 }}
          />
          <Line type="monotone" dataKey="baseline" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
