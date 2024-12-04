//Firebase Config File
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Firebase Credentials
const firebaseConfig = {
  apiKey: "AIzaSyBXsbD1x2tHKoWX3GbwY2m0AvCEJgrrS_s",
  authDomain: "markzdigitalwebsite.firebaseapp.com",
  projectId: "markzdigitalwebsite",
  storageBucket: "markzdigitalwebsite.firebasestorage.app",
  messagingSenderId: "627375186876",
  appId: "1:627375186876:web:11405f34c6be8e98d741b9",
  measurementId: "G-WKJSF8GK4S",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore for database operations
export const storage = getStorage(app); // Storage for file uploads

export default app;
