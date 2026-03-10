import { initializeApp, getApps, getApp as getFirebaseApp, type FirebaseApp } from "firebase/app"
import { getAuth, type Auth } from "firebase/auth"
import { getFirestore, type Firestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

/**
 * Lazy singleton — Firebase is initialised only when first accessed.
 * This prevents server-side crashes during Next.js static pre-rendering
 * when NEXT_PUBLIC_* env vars are absent from the build environment.
 */
let _app: FirebaseApp | undefined
let _auth: Auth | undefined
let _db: Firestore | undefined

function getApp(): FirebaseApp {
  if (!_app) {
    _app = getApps().length ? getFirebaseApp() : initializeApp(firebaseConfig)
  }
  return _app
}

export function getFirebaseAuth(): Auth {
  if (!_auth) _auth = getAuth(getApp())
  return _auth
}

export function getFirebaseDb(): Firestore {
  if (!_db) _db = getFirestore(getApp())
  return _db
}

// Convenience re-exports for direct-use patterns (client-only code)
export { getApp }
