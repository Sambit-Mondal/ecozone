import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  type DocumentReference,
} from "firebase/firestore"
import { getFirebaseDb } from "./config"
import type { UserProfile } from "@/types/auth"

const USERS_COLLECTION = "users"
const db = () => getFirebaseDb()

export async function createUserProfile(
  uid: string,
  data: Omit<UserProfile, "uid" | "createdAt" | "updatedAt">,
): Promise<void> {
  const ref: DocumentReference = doc(db(), USERS_COLLECTION, uid)
  await setDoc(ref, {
    uid,
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db(), USERS_COLLECTION, uid)
  const snap = await getDoc(ref)
  return snap.exists() ? (snap.data() as UserProfile) : null
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserProfile>,
): Promise<void> {
  const ref = doc(db(), USERS_COLLECTION, uid)
  await updateDoc(ref, { ...data, updatedAt: serverTimestamp() })
}
