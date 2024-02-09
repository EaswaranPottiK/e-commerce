
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSqSPMxWtfA-0-DVeeACxhS7VnDHnlKHE",
  authDomain: "e-commerce-bc893.firebaseapp.com",
  projectId: "e-commerce-bc893",
  storageBucket: "e-commerce-bc893.appspot.com",
  messagingSenderId: "272081801204",
  appId: "1:272081801204:web:5394329c60ddecf12373a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;