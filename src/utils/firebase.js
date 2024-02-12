// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-U1m9ZONkBjYpNKPz9Tn6gCBaor7LJAY",
  authDomain: "netflixgpt-80ecd.firebaseapp.com",
  projectId: "netflixgpt-80ecd",
  storageBucket: "netflixgpt-80ecd.appspot.com",
  messagingSenderId: "180222912924",
  appId: "1:180222912924:web:537497f2687242d2e84059",
  measurementId: "G-6NFQJR51ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
