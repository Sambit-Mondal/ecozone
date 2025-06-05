"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Building2, DollarSign, Factory, Leaf, Package, Users, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MetricCard } from "@/components/dashboard/metric-card"
import { BusinessAnalyticsChart } from "@/components/business-dashboard/business-analytics-chart"
import { SustainabilityRecommendations } from "@/components/business-dashboard/sustainability-recommendations"
import { VendorConnections } from "@/components/business-dashboard/vendor-connections"
import { ComplianceTracker } from "@/components/business-dashboard/compliance-tracker"
import { TeamEngagement } from "@/components/business-dashboard/team-engagement"

export default function BusinessDashboardPage() {
  const [timeRange, setTimeRange] = useState("30d")

  // Mock business data
  const businessStats = {
    carbonReduction: 1250.5,
    carbonReductionChange: 18.2,
    costSavings: 45000,
    costSavingsChange: 12.8,
    sustainabilityScore: 82,
    sustainabilityScoreChange: 7.3,
    wasteReduction: 35.6,
    wasteReductionChange: 22.1,
  }

  const recommendations = [
    {
      id: 1,
      title: "Switch to Biodegradable Packaging",
      description: "Replace plastic packaging with compostable alternatives",
      impact: "High",
      savings: "₹2,50,000/year",
      carbonSaving: "450 kg CO₂/month",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Optimize Delivery Routes",
      description: "Use AI-powered route optimization to reduce fuel consumption",
      impact: "Medium",
      savings: "₹1,80,000/year",
      carbonSaving: "320 kg CO₂/month",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "Install Solar Panels",
      description: "Reduce grid dependency with renewable energy",
      impact: "High",
      savings: "₹5,00,000/year",
      carbonSaving: "800 kg CO₂/month",
      status: "pending",
      priority: "high",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Business Sustainability Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Monitor your company's environmental impact and optimization opportunities
            </p>
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
              <Link href="/business/upload">Upload Data</Link>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Carbon Reduction"
            value={`${businessStats.carbonReduction} kg`}
            change={businessStats.carbonReductionChange}
            icon={Leaf}
            trend="up"
          />
          <MetricCard
            title="Cost Savings"
            value={`₹${businessStats.costSavings.toLocaleString()}`}
            change={businessStats.costSavingsChange}
            icon={DollarSign}
            trend="up"
          />
          <MetricCard
            title="Sustainability Score"
            value={`${businessStats.sustainabilityScore}/100`}
            change={businessStats.sustainabilityScoreChange}
            icon={BarChart3}
            trend="up"
          />
          <MetricCard
            title="Waste Reduction"
            value={`${businessStats.wasteReduction}%`}
            change={businessStats.wasteReductionChange}
            icon={Package}
            trend="up"
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Business Analytics Chart */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Carbon Footprint Analysis
                  </CardTitle>
                  <CardDescription>Your company's environmental impact trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <BusinessAnalyticsChart timeRange={timeRange} />
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common sustainability tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/business/upload">
                      <Package className="mr-2 h-4 w-4" />
                      Upload Business Data
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/business/scan">
                      <Factory className="mr-2 h-4 w-4" />
                      Scan Website for Insights
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/business/vendors">
                      <Building2 className="mr-2 h-4 w-4" />
                      Find Green Vendors
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/business/report">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Generate Report
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Recommendations */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Priority Recommendations</CardTitle>
                  <CardDescription>AI-generated suggestions for your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendations.slice(0, 3).map((rec) => (
                      <div key={rec.id} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className={`p-2 rounded-full ${rec.priority === "high" ? "bg-red-100" : "bg-yellow-100"}`}>
                          <AlertTriangle
                            className={`h-4 w-4 ${rec.priority === "high" ? "text-red-600" : "text-yellow-600"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{rec.title}</h4>
                            <Badge variant={rec.status === "pending" ? "secondary" : "default"}>
                              {rec.status === "pending" ? "Pending" : "In Progress"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-green-600 font-medium">{rec.savings}</span>
                            <span className="text-blue-600">{rec.carbonSaving}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Team Engagement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Team Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TeamEngagement />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Detailed Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle>Carbon Footprint Breakdown</CardTitle>
                  <CardDescription>Emissions by business category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: "Transportation & Logistics", emissions: 450.2, percentage: 38 },
                      { category: "Energy Consumption", emissions: 320.5, percentage: 27 },
                      { category: "Manufacturing", emissions: 280.3, percentage: 24 },
                      { category: "Packaging & Materials", emissions: 130.8, percentage: 11 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.category}</span>
                          <span className="font-medium">{item.emissions} kg CO₂</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cost Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Impact Analysis</CardTitle>
                  <CardDescription>Financial impact of sustainability initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { initiative: "Energy Efficiency", investment: 50000, savings: 120000, roi: 140 },
                      { initiative: "Waste Reduction", investment: 25000, savings: 80000, roi: 220 },
                      { initiative: "Green Packaging", investment: 75000, savings: 150000, roi: 100 },
                      { initiative: "Route Optimization", investment: 30000, savings: 90000, roi: 200 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.initiative}</p>
                          <p className="text-sm text-gray-600">Investment: ₹{item.investment.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">₹{item.savings.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">{item.roi}% ROI</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Track your sustainability metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <BusinessAnalyticsChart timeRange={timeRange} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <SustainabilityRecommendations recommendations={recommendations} />
          </TabsContent>

          <TabsContent value="vendors" className="space-y-6">
            <VendorConnections />
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <ComplianceTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
