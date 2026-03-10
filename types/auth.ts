import type { FieldValue, Timestamp } from "firebase/firestore"

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  role: "individual" | "business"
  createdAt: Timestamp | FieldValue
  updatedAt: Timestamp | FieldValue
}

export interface SignUpFormValues {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export interface SignInFormValues {
  email: string
  password: string
}
