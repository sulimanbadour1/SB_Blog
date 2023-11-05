// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "sbblog.firebaseapp.com",
  projectId: "sbblog",
  storageBucket: "sbblog.appspot.com",
  messagingSenderId: "975012251589",
  appId: "1:975012251589:web:e44c682dd1048ac73e6dac",
  measurementId: "G-SVPXCP1F53",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
