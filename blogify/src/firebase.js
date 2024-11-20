// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogify-001.firebaseapp.com",
  projectId: "blogify-001",
  storageBucket: "blogify-001.firebasestorage.app",
  messagingSenderId: "417248838690",
  appId: "1:417248838690:web:023c1f81773d5cdb35f67b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app