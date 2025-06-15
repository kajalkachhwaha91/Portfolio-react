// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmqpNu6YBTNSfBLjcqBMrHt3ZAew4KUcY",
  authDomain: "portfolio-c64fc.firebaseapp.com",
  projectId: "portfolio-c64fc",
  storageBucket: "portfolio-c64fc.firebasestorage.app",
  messagingSenderId: "321483355017",
  appId: "1:321483355017:web:ae8927458c08cf24d2a758",
  measurementId: "G-HR1PGDEPKV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
