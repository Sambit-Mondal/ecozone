import { LucideCheckCircle } from "lucide-react"

export function CheckCircle({ className }: { className?: string }) {
  return <LucideCheckCircle className={className || "h-5 w-5 text-green-600"} />
}
