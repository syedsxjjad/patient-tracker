import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBVP4FRnIPcElcAdMX7bauOfsGE811tKSM",
  authDomain: "patient-tracker-3baf6.firebaseapp.com",
  projectId: "patient-tracker-3baf6",
  storageBucket: "patient-tracker-3baf6.appspot.com",
  messagingSenderId: "437105414255",
  appId: "1:437105414255:web:610c2064577b1e8a593d9a"
};

const app = initializeApp(firebaseConfig);

// Firebase Firestore
export const db = getFirestore(app);

// Firebase Authentication
export const auth = getAuth(app);

// Firebase Storage
export const storage = getStorage(app);
//   export default firebaseConfig;


