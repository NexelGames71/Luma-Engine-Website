// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Hy7EczGkQ_R7KFJutvxCdIjJ0_eSRTo",
  authDomain: "nexel-games.firebaseapp.com",
  projectId: "nexel-games",
  storageBucket: "nexel-games.firebasestorage.app",
  messagingSenderId: "233508294485",
  appId: "1:233508294485:web:df1c10eac63f572344a9dc",
  measurementId: "G-21J0MGT6L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export auth methods
export { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
};

export { app };
