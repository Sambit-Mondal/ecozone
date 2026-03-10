"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Eye, EyeOff, Leaf, TreePine, Wind, Droplets, Sun, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/AuthContext"
import type { SignUpFormValues, SignInFormValues } from "@/types/auth"
import { cn } from "@/lib/utils"

// ─── Validation schemas ────────────────────────────────────────────────────────
const signInSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

const signUpSchema = z
  .object({
    displayName: z.string().min(2, "Name must be at least 2 characters").max(50),
    email: z.string().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number"),
    confirmPassword: z.string(),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

// ─── Google icon ───────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

// ─── Floating nature icons ─────────────────────────────────────────────────────
const floatingIcons = [
  { Icon: Leaf, top: "10%", left: "15%", delay: "0s", size: "h-6 w-6" },
  { Icon: TreePine, top: "25%", left: "75%", delay: "1.2s", size: "h-8 w-8" },
  { Icon: Wind, top: "60%", left: "10%", delay: "0.6s", size: "h-5 w-5" },
  { Icon: Droplets, top: "75%", left: "80%", delay: "1.8s", size: "h-6 w-6" },
  { Icon: Sun, top: "45%", left: "88%", delay: "0.9s", size: "h-7 w-7" },
  { Icon: Leaf, top: "85%", left: "30%", delay: "1.5s", size: "h-5 w-5" },
  { Icon: TreePine, top: "15%", left: "55%", delay: "2.1s", size: "h-6 w-6" },
]

const stats = [
  { value: "2.4M+", label: "Tonnes CO₂ Offset" },
  { value: "180K+", label: "Active Eco Users" },
  { value: "96%", label: "Satisfaction Rate" },
]

// ─── Root component ────────────────────────────────────────────────────────────
export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const { signIn, signUp, loginWithGoogle, user } = useAuth()
  const router = useRouter()

  // Redirect if already authenticated
  useEffect(() => {
    if (user) router.replace("/dashboard")
  }, [user, router])

  // ── Sign-in form ────────────────────────────────────────────────────────────
  const signInForm = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  })

  // ── Sign-up form ────────────────────────────────────────────────────────────
  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { displayName: "", email: "", password: "", confirmPassword: "" },
  })

  function toggle() {
    setMode((m) => (m === "signin" ? "signup" : "signin"))
    setError(null)
    signInForm.reset()
    signUpForm.reset()
    setShowPassword(false)
    setShowConfirm(false)
  }

  function parseFirebaseError(code: string): string {
    const map: Record<string, string> = {
      "auth/user-not-found": "No account found with this email.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/email-already-in-use": "An account with this email already exists.",
      "auth/too-many-requests": "Too many attempts. Please try again later.",
      "auth/network-request-failed": "Network error. Check your connection.",
      "auth/popup-closed-by-user": "Google sign-in was cancelled.",
    }
    return map[code] ?? "Something went wrong. Please try again."
  }

  async function handleSignIn(values: SignInFormValues) {
    setError(null)
    setIsSubmitting(true)
    try {
      await signIn(values)
      router.replace("/dashboard")
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ""
      setError(parseFirebaseError(code))
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleSignUp(values: SignUpFormValues) {
    setError(null)
    setIsSubmitting(true)
    try {
      await signUp(values)
      router.replace("/dashboard")
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ""
      setError(parseFirebaseError(code))
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleGoogle() {
    setError(null)
    setGoogleLoading(true)
    try {
      await loginWithGoogle()
      router.replace("/dashboard")
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? ""
      setError(parseFirebaseError(code))
    } finally {
      setGoogleLoading(false)
    }
  }

  // ── Shared field error helper ───────────────────────────────────────────────
  function FieldError({ msg }: { msg?: string }) {
    if (!msg) return null
    return <p className="text-xs text-red-500 mt-1">{msg}</p>
  }

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel ─────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden p-12"
        style={{ background: "linear-gradient(135deg, #2d3b2e 0%, #415444 45%, #5a7a5e 100%)" }}
      >
        {/* Mesh overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #86efac 0%, transparent 50%), radial-gradient(circle at 80% 20%, #34d399 0%, transparent 50%)",
          }}
        />

        {/* Floating icons */}
        {floatingIcons.map(({ Icon, top, left, delay, size }, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-pulse"
            style={{ top, left, animationDelay: delay, animationDuration: "3s" }}
          >
            <Icon className={size} />
          </div>
        ))}

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2.5 w-fit">
            <div className="h-9 w-9 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Leaf className="h-5 w-5 text-emerald-300" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">EcoZone</span>
          </Link>
        </div>

        {/* Hero text */}
        <div className="relative z-10 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-sm font-medium">Trusted by 180,000+ users</span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
              Track. Transform.
              <br />
              <span className="text-emerald-300">Thrive.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Your automated green partner — measure your environmental impact, discover eco
              swaps, and grow your sustainability journey every day.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-4"
              >
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-white/60 text-xs mt-0.5 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="relative z-10 text-white/40 text-sm">
          © 2026 EcoZone · Building a greener tomorrow
        </p>
      </div>

      {/* ── Right panel ────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-950 px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#415444] flex items-center justify-center">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-[#415444]">EcoZone</span>
          </div>

          {/* Toggle pill */}
          <div className="bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl flex gap-1" role="tablist">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => mode !== m && toggle()}
                className={cn(
                  "flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  mode === m
                    ? "bg-white dark:bg-zinc-800 text-[#415444] shadow-sm dark:text-emerald-400"
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300",
                )}
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {mode === "signin" ? "Welcome back 👋" : "Join EcoZone 🌿"}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              {mode === "signin"
                ? "Sign in to continue your sustainability journey."
                : "Start tracking your environmental impact today."}
            </p>
          </div>

          {/* Error alert */}
          {error && (
            <Alert variant="destructive" className="py-3">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Google button */}
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2.5 h-11 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            onClick={handleGoogle}
            disabled={googleLoading || isSubmitting}
          >
            <GoogleIcon />
            <span className="text-sm font-medium">
              {googleLoading ? "Redirecting…" : "Continue with Google"}
            </span>
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-zinc-950 px-3 text-xs text-zinc-400">
                or continue with email
              </span>
            </div>
          </div>

          {/* ── Sign-in form ────────────────────────────────────────────── */}
          {mode === "signin" && (
            <form onSubmit={signInForm.handleSubmit(handleSignIn)} className="space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="si-email">Email</Label>
                <Input
                  id="si-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...signInForm.register("email")}
                  className={signInForm.formState.errors.email ? "border-red-500" : ""}
                />
                <FieldError msg={signInForm.formState.errors.email?.message} />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="si-password">Password</Label>
                  <button
                    type="button"
                    onClick={() => {
                      setError(null)
                      // Trigger password reset flow — handled inline
                      const email = signInForm.getValues("email")
                      if (!email) {
                        setError("Enter your email above, then click Forgot password.")
                        return
                      }
                      import("@/lib/firebase/auth").then(({ resetPassword }) =>
                        resetPassword(email)
                          .then(() => setError("Password reset email sent! Check your inbox."))
                          .catch(() => setError("Could not send reset email. Check the address.")),
                      )
                    }}
                    className="text-xs text-[#415444] hover:underline dark:text-emerald-400"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="si-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    {...signInForm.register("password")}
                    className={cn(
                      "pr-10",
                      signInForm.formState.errors.password ? "border-red-500" : "",
                    )}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <FieldError msg={signInForm.formState.errors.password?.message} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[#415444] hover:bg-[#344338] text-white font-medium transition-colors"
              >
                {isSubmitting ? "Signing in…" : "Sign in"}
              </Button>
            </form>
          )}

          {/* ── Sign-up form ────────────────────────────────────────────── */}
          {mode === "signup" && (
            <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="su-name">Full name</Label>
                <Input
                  id="su-name"
                  type="text"
                  placeholder="Alex Green"
                  autoComplete="name"
                  {...signUpForm.register("displayName")}
                  className={signUpForm.formState.errors.displayName ? "border-red-500" : ""}
                />
                <FieldError msg={signUpForm.formState.errors.displayName?.message} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="su-email">Email</Label>
                <Input
                  id="su-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...signUpForm.register("email")}
                  className={signUpForm.formState.errors.email ? "border-red-500" : ""}
                />
                <FieldError msg={signUpForm.formState.errors.email?.message} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="su-password">Password</Label>
                <div className="relative">
                  <Input
                    id="su-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min 8 chars, 1 uppercase, 1 number"
                    autoComplete="new-password"
                    {...signUpForm.register("password")}
                    className={cn(
                      "pr-10",
                      signUpForm.formState.errors.password ? "border-red-500" : "",
                    )}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide" : "Show"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <FieldError msg={signUpForm.formState.errors.password?.message} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="su-confirm">Confirm password</Label>
                <div className="relative">
                  <Input
                    id="su-confirm"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    {...signUpForm.register("confirmPassword")}
                    className={cn(
                      "pr-10",
                      signUpForm.formState.errors.confirmPassword ? "border-red-500" : "",
                    )}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label={showConfirm ? "Hide" : "Show"}
                  >
                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <FieldError msg={signUpForm.formState.errors.confirmPassword?.message} />
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                By creating an account you agree to our{" "}
                <Link href="/terms" className="text-[#415444] hover:underline dark:text-emerald-400">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#415444] hover:underline dark:text-emerald-400"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[#415444] hover:bg-[#344338] text-white font-medium transition-colors"
              >
                {isSubmitting ? "Creating account…" : "Create account"}
              </Button>
            </form>
          )}

          {/* Footer toggle hint */}
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            {mode === "signin" ? "New to EcoZone? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggle}
              className="text-[#415444] dark:text-emerald-400 font-medium hover:underline"
            >
              {mode === "signin" ? "Create a free account" : "Sign in instead"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
