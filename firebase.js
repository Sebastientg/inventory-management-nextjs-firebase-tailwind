// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu6W1neVL3c0T53fu0ijYajD-3hQAxwVk",
  authDomain: "inventory-management-76909.firebaseapp.com",
  projectId: "inventory-management-76909",
  storageBucket: "inventory-management-76909.appspot.com",
  messagingSenderId: "612727563885",
  appId: "1:612727563885:web:c7760ae87a5d24836a0164",
  measurementId: "G-6Y5X6V6RY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore }