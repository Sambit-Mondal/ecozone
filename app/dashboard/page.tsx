"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf, ShoppingBag, TrendingUp, Users, Zap, Target, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MetricCard } from "@/components/dashboard/metric-card"
import { CarbonFootprintChart } from "@/components/dashboard/carbon-footprint-chart"
import { SustainabilityGoals } from "@/components/dashboard/sustainability-goals"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { EcoRecommendations } from "@/components/dashboard/eco-recommendations"
import { ImpactTimeline } from "@/components/dashboard/impact-timeline"

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("30d")

  // Mock user data - in real app this would come from API
  const userStats = {
    carbonSaved: 245.8,
    carbonSavedChange: 12.5,
    productsOwned: 23,
    productsOwnedChange: 8.2,
    sustainabilityScore: 78,
    sustainabilityScoreChange: 5.1,
    monthlySpending: 1250,
    monthlySpendingChange: -15.3,
  }

  const goals = [
    {
      title: "Reduce Carbon Footprint",
      target: 500,
      current: 245.8,
      unit: "kg CO₂",
      deadline: "Dec 2024",
      status: "on-track" as const,
    },
    {
      title: "Zero Waste Kitchen",
      target: 100,
      current: 65,
      unit: "% complete",
      deadline: "Mar 2024",
      status: "ahead" as const,
    },
    {
      title: "Sustainable Products",
      target: 50,
      current: 23,
      unit: "products",
      deadline: "Jun 2024",
      status: "behind" as const,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Sustainability Dashboard</h1>
            <p className="text-gray-600 mt-1">Track your eco-friendly journey and environmental impact</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 3 months</option>
              <option value="1y">Last year</option>
            </select>
            <Button asChild>
              <Link href="/marketplace">Shop Eco Products</Link>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Carbon Saved"
            value={`${userStats.carbonSaved} kg`}
            change={userStats.carbonSavedChange}
            icon={Leaf}
            trend="up"
          />
          <MetricCard
            title="Eco Products"
            value={userStats.productsOwned.toString()}
            change={userStats.productsOwnedChange}
            icon={ShoppingBag}
            trend="up"
          />
          <MetricCard
            title="Sustainability Score"
            value={`${userStats.sustainabilityScore}/100`}
            change={userStats.sustainabilityScoreChange}
            icon={Target}
            trend="up"
          />
          <MetricCard
            title="Monthly Spending"
            value={`₹${userStats.monthlySpending}`}
            change={userStats.monthlySpendingChange}
            icon={TrendingUp}
            trend="down"
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Carbon Footprint Chart */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    Carbon Footprint Reduction
                  </CardTitle>
                  <CardDescription>Your environmental impact over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <CarbonFootprintChart timeRange={timeRange} />
                </CardContent>
              </Card>

              {/* Sustainability Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Sustainability Goals
                  </CardTitle>
                  <CardDescription>Track your progress towards eco-friendly targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <SustainabilityGoals goals={goals} />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest eco-friendly actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Plastic bottles saved</span>
                    <span className="font-semibold">167</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Trees planted equivalent</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Energy saved (kWh)</span>
                    <span className="font-semibold">89.5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Waste diverted (kg)</span>
                    <span className="font-semibold">34.2</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Detailed Carbon Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle>Carbon Impact Breakdown</CardTitle>
                  <CardDescription>See where your carbon savings come from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Transportation", saved: 89.2, percentage: 36 },
                      { category: "Energy", saved: 67.5, percentage: 27 },
                      { category: "Products", saved: 54.3, percentage: 22 },
                      { category: "Food", saved: 34.8, percentage: 15 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.category}</span>
                          <span className="font-medium">{item.saved} kg CO₂</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Spending Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle>Eco Spending Analysis</CardTitle>
                  <CardDescription>Your sustainable product investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Kitchen & Dining", amount: 450, items: 8 },
                      { category: "Personal Care", amount: 320, items: 6 },
                      { category: "Home & Garden", amount: 280, items: 5 },
                      { category: "Electronics", amount: 200, items: 4 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.category}</p>
                          <p className="text-sm text-gray-600">{item.items} items</p>
                        </div>
                        <span className="font-semibold">₹{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Impact Timeline</CardTitle>
                <CardDescription>Your sustainability journey over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ImpactTimeline />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Goals */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Goals</CardTitle>
                  <CardDescription>Track your sustainability objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {goals.map((goal, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{goal.title}</h4>
                        <Badge
                          variant={
                            goal.status === "ahead"
                              ? "default"
                              : goal.status === "on-track"
                                ? "secondary"
                                : "destructive"
                          }
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
                </CardContent>
              </Card>

              {/* Goal Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Goals</CardTitle>
                  <CardDescription>New sustainability challenges for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Plastic-Free Month",
                      description: "Avoid single-use plastics for 30 days",
                      difficulty: "Medium",
                      impact: "High",
                    },
                    {
                      title: "Energy Efficiency",
                      description: "Reduce home energy consumption by 20%",
                      difficulty: "Easy",
                      impact: "Medium",
                    },
                    {
                      title: "Local Shopping",
                      description: "Buy 80% of groceries from local sources",
                      difficulty: "Hard",
                      impact: "High",
                    },
                  ].map((suggestion, i) => (
                    <div key={i} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{suggestion.title}</h4>
                        <Button size="sm" variant="outline">
                          Add Goal
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">{suggestion.description}</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {suggestion.difficulty} difficulty
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {suggestion.impact} impact
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  AI-Powered Recommendations
                </CardTitle>
                <CardDescription>Personalized suggestions based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <EcoRecommendations />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    Achievements
                  </CardTitle>
                  <CardDescription>Your sustainability milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "First Purchase",
                      description: "Made your first eco-friendly purchase",
                      date: "2 months ago",
                      earned: true,
                    },
                    {
                      title: "Carbon Saver",
                      description: "Saved 100kg of CO₂ emissions",
                      date: "1 month ago",
                      earned: true,
                    },
                    {
                      title: "Eco Warrior",
                      description: "Saved 500kg of CO₂ emissions",
                      date: "In progress",
                      earned: false,
                    },
                    {
                      title: "Zero Waste Hero",
                      description: "Achieved zero waste for a month",
                      date: "Not started",
                      earned: false,
                    },
                  ].map((achievement, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        achievement.earned ? "bg-green-50 border border-green-200" : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.earned ? "bg-green-100" : "bg-gray-200"
                        }`}
                      >
                        <Award className={`h-5 w-5 ${achievement.earned ? "text-green-600" : "text-gray-400"}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Impact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Community Impact
                  </CardTitle>
                  <CardDescription>How you compare with other users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">Top 15%</p>
                    <p className="text-sm text-gray-600">of eco-conscious users</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Your carbon savings</span>
                      <span className="font-medium">245.8 kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Community average</span>
                      <span className="font-medium">156.2 kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Total community impact</span>
                      <span className="font-medium">2.4M kg CO₂</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
