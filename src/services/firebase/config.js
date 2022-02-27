// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZiq4sTHiqTGy99GKav4u3L34OpGhaPs8",
  authDomain: "ecommerce-bar-ch.firebaseapp.com",
  projectId: "ecommerce-bar-ch",
  storageBucket: "ecommerce-bar-ch.appspot.com",
  messagingSenderId: "243847580714",
  appId: "1:243847580714:web:78f62bae9897fd19064753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
