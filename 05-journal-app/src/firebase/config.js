// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXRFl-wNcAJLiCR_z1UZsK7vC5G_cYWzs",
  authDomain: "react-journal-fa700.firebaseapp.com",
  projectId: "react-journal-fa700",
  storageBucket: "react-journal-fa700.appspot.com",
  messagingSenderId: "28204768838",
  appId: "1:28204768838:web:875c76de7f266df4b1b447"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );