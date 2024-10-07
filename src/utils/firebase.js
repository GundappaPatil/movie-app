// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJIhwumKI75AquwGJJM0ZDg7oHzuBAvg",
  authDomain: "netflix-gpt-f05d1.firebaseapp.com",
  projectId: "netflix-gpt-f05d1",
  storageBucket: "netflix-gpt-f05d1.appspot.com",
  messagingSenderId: "416046899800",
  appId: "1:416046899800:web:856f460a660aed36c3a02d",
  measurementId: "G-YZ7VL8QYSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth();