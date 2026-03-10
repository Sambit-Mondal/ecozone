"use client"

import Link from "next/link"
import { LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"

interface AuthCTAButtonProps {
  size?: "default" | "sm" | "lg"
  className?: string
}

/**
 * Renders "Get Started for Free" → /auth when logged out,
 * or "Go to Dashboard  ·  {name}" → /dashboard when logged in.
 */
export function AuthCTAButton({ size = "lg", className }: AuthCTAButtonProps) {
  const { user } = useAuth()

  if (user) {
    const firstName = (user.displayName ?? user.email ?? "").split(/[\s@]/)[0]
    return (
      <Button size={size} asChild className={className}>
        <Link href="/dashboard" className="gap-2 flex items-center">
          <LayoutDashboard className="h-4 w-4" />
          Go to Dashboard · {firstName}
        </Link>
      </Button>
    )
  }

  return (
    <Button size={size} asChild className={className}>
      <Link href="/auth">Get Started for Free</Link>
    </Button>
  )
}
