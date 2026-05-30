import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJR51Va_xS00XjZt0bYWDneicQAHLts60",
  authDomain: "lab-14d8c.firebaseapp.com",
  projectId: "lab-14d8c",
  storageBucket: "lab-14d8c.firebasestorage.app",
  messagingSenderId: "766169053241",
  appId: "1:766169053241:web:c5e9dd6a7751e8b25fb5e8"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)