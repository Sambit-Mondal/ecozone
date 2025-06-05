import { BarChart2, FileText, LineChart, Recycle, Upload } from "lucide-react"

import { FeatureCard } from "@/components/feature-card"

export function BusinessFeatures() {
  const features = [
    {
      icon: Upload,
      title: "Data Analysis",
      description: "Upload your business data or connect APIs to analyze your current environmental impact.",
    },
    {
      icon: LineChart,
      title: "Smart Suggestions",
      description: "Get AI-powered recommendations for eco-friendly alternatives and process optimizations.",
    },
    {
      icon: Recycle,
      title: "Vendor Connections",
      description: "Connect with pre-vetted sustainable vendors for materials, packaging, and services.",
    },
    {
      icon: BarChart2,
      title: "Impact Dashboard",
      description: "Track your progress with real-time metrics on carbon savings and sustainability goals.",
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate sustainability reports for stakeholders and regulatory compliance.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.description} />
      ))}
    </div>
  )
}
