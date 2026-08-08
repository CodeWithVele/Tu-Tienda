// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,  // ← CAMBIADO: usa variable de entorno
  authDomain: "tu-tienda-2025.firebaseapp.com",
  projectId: "tu-tienda-2025",
  storageBucket: "tu-tienda-2025.firebasestorage.app",
  messagingSenderId: "993401776159",
  appId: "1:993401776159:web:502ef3d151b762c8abcd2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);