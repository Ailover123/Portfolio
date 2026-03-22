// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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
