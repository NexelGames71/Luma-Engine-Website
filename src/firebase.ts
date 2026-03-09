// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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

// Initialize Firebase variables (will be initialized on client side)
let app: any = null;
let analytics: any = null;
let auth: any = null;
let googleProvider: any = null;

// Initialize Firebase only on client side
const initializeFirebase = () => {
  if (typeof window !== 'undefined' && !app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    
    // Initialize analytics only if supported
    import('firebase/analytics').then(({ getAnalytics }) => {
      if (typeof window !== 'undefined') {
        analytics = getAnalytics(app);
      }
    }).catch(() => {
      // Analytics not supported, continue without it
    });
  }
};

// Initialize Firebase immediately if we're on client side
if (typeof window !== 'undefined') {
  initializeFirebase();
}

// Export lazy initialization functions
export const getFirebaseApp = () => {
  initializeFirebase();
  return app;
};

export const getFirebaseAuth = () => {
  initializeFirebase();
  return auth;
};

export const getGoogleProvider = () => {
  initializeFirebase();
  return googleProvider;
};

// Export auth methods
export { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
};

// Helper function to update user profile
export const updateUserProfile = async (displayName: string) => {
  const auth = getFirebaseAuth();
  if (auth.currentUser) {
    await auth.currentUser.updateProfile({ displayName });
  }
};

// Export app and analytics (will be null on server side)
export { app, analytics };
