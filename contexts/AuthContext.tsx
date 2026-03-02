"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { getFirebaseAuth } from "@/lib/firebase/config"
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  resetPassword,
} from "@/lib/firebase/auth"
import { createUserProfile, getUserProfile } from "@/lib/firebase/firestore"
import type { UserProfile, SignUpFormValues, SignInFormValues } from "@/types/auth"

interface AuthContextValue {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signUp: (values: SignUpFormValues) => Promise<void>
  signIn: (values: SignInFormValues) => Promise<void>
  loginWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  sendPasswordReset: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Sync Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        try {
          const p = await getUserProfile(firebaseUser.uid)
          setProfile(p)
        } catch (err) {
          // Firestore permission errors (e.g. rules not yet deployed) should not
          // crash the auth flow — profile simply stays null until rules are live.
          console.warn("[AuthContext] Could not fetch user profile:", err)
          setProfile(null)
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const signUp = useCallback(async (values: SignUpFormValues) => {
    const { user: newUser } = await signUpWithEmail(
      values.email,
      values.password,
      values.displayName,
    )
    await createUserProfile(newUser.uid, {
      email: values.email,
      displayName: values.displayName,
      role: "individual",
    })
  }, [])

  const signIn = useCallback(async (values: SignInFormValues) => {
    await signInWithEmail(values.email, values.password)
  }, [])

  const loginWithGoogle = useCallback(async () => {
    const { user: googleUser } = await signInWithGoogle()
    // Create profile only on first sign-in
    const existing = await getUserProfile(googleUser.uid)
    if (!existing) {
      await createUserProfile(googleUser.uid, {
        email: googleUser.email ?? "",
        displayName: googleUser.displayName ?? "Eco User",
        photoURL: googleUser.photoURL ?? undefined,
        role: "individual",
      })
    }
  }, [])

  const logout = useCallback(async () => {
    await signOut()
  }, [])

  const sendPasswordReset = useCallback(async (email: string) => {
    await resetPassword(email)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ user, profile, loading, signUp, signIn, loginWithGoogle, logout, sendPasswordReset }),
    [user, profile, loading, signUp, signIn, loginWithGoogle, logout, sendPasswordReset],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
  return ctx
}
