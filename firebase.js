// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: YOUR_APIKEY
  authDomain: YOUR_AUTHDOMAIN
  projectId: YOUR_PROJECTID
  storageBucket: YOUR_STORAGEBUCKET
  messagingSenderId: YOUR_MESSAGINGSENDERID
  appId: YOUR_APPID
  measurementId: YOUR_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore }