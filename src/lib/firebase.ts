// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOyl0QHJSI8YTunWisrrsVGY044SBMP5Q",
  authDomain: "sample-firebase-ai-app-f0b22.firebaseapp.com",
  projectId: "sample-firebase-ai-app-f0b22",
  storageBucket: "sample-firebase-ai-app-f0b22.firebasestorage.app",
  messagingSenderId: "992967528084",
  appId: "1:992967528084:web:f8c06303c8c1075f356e81"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
