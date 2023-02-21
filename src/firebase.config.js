import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
//firebase storage
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAI2vzmQWx0N46ZaNrWT3wpoDiNMIAeDbM",
  authDomain: "jautos-d4ec6.firebaseapp.com",
  projectId: "jautos-d4ec6",
  storageBucket: "jautos-d4ec6.appspot.com",
  messagingSenderId: "669325204719",
  appId: "1:669325204719:web:129c28990843721af64f1a",
  measurementId: "G-7TQ4JE7NZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;

