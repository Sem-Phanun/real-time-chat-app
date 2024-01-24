// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj6aiy3XoupMCoP4lycv1n6jIBEu7aaeQ",
  authDomain: "chat-app-9764b.firebaseapp.com",
  projectId: "chat-app-9764b",
  storageBucket: "chat-app-9764b.appspot.com",
  messagingSenderId: "675816143017",
  appId: "1:675816143017:web:2c78a49a211242c52cd1b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()