// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";

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
let database: any = null;

// Initialize Firebase only on client side
const initializeFirebase = () => {
  if (typeof window !== 'undefined' && !app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    database = getDatabase(app);
    
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

export const getFirebaseDatabase = () => {
  initializeFirebase();
  return database;
};

// Helper function to store user data in Realtime Database
export const storeUserData = async (user: any) => {
  const db = getFirebaseDatabase();
  if (db && user) {
    const userRef = ref(db, `users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      accountType: 'Developer',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };
    await set(userRef, userData);
  }
};

// Helper function to get user data from Realtime Database
export const getUserData = async (uid: string) => {
  const db = getFirebaseDatabase();
  if (db) {
    const userRef = ref(db, `users/${uid}`);
    const snapshot = await get(userRef);
    return snapshot.exists() ? snapshot.val() : null;
  }
  return null;
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
    await updateProfile(auth.currentUser, { displayName });
  }
};

// Export app and analytics (will be null on server side)
export { app, analytics };
