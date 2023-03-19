// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB46iVZUyKertPVmSApKVxwbC0Pxenir28",
  authDomain: "jalal-autos.firebaseapp.com",
  projectId: "jalal-autos",
  storageBucket: "jalal-autos.appspot.com",
  messagingSenderId: "686026761282",
  appId: "1:686026761282:web:320f640501a63480ceb9db",
  measurementId: "G-8D4L64L81K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app
