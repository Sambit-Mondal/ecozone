import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  type UserCredential,
} from "firebase/auth"
import { getFirebaseAuth } from "./config"

// Getter used per-call so Firebase initialises lazily (safe for SSR)
const auth = () => getFirebaseAuth()

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string,
): Promise<UserCredential> {
  const credential = await createUserWithEmailAndPassword(auth(), email, password)
  await updateProfile(credential.user, { displayName })
  return credential
}

export async function signInWithEmail(
  email: string,
  password: string,
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth(), email, password)
}

export async function signInWithGoogle(): Promise<UserCredential> {
  return signInWithPopup(auth(), googleProvider)
}

export async function signOut(): Promise<void> {
  return firebaseSignOut(auth())
}

export async function resetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(auth(), email)
}
