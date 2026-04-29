// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQr9sVnUSWkeWORYViiSvrMBDts-vJtFE",
  authDomain: "portfolio-afa4c.firebaseapp.com",
  projectId: "portfolio-afa4c",
  storageBucket: "portfolio-afa4c.firebasestorage.app",
  messagingSenderId: "357015388214",
  appId: "1:357015388214:web:00d0c60b2bfb56ce1e1897"
};

// Init Firebase
const app = firebaseConfig.apiKey ? initializeApp(firebaseConfig) : null;

// Auth
export const auth = app ? getAuth(app) : null;
const provider = app ? new GoogleAuthProvider() : null;
export const loginWithGoogle = () => {
  if (!app) return Promise.reject("Firebase not initialized");
  return signInWithPopup(auth, provider);
};
export const logout = () => {
  if (!app) return Promise.reject("Firebase not initialized");
  return signOut(auth);
};

// Firestore
export const db = app ? getFirestore(app) : null;
