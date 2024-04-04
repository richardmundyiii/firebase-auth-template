// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6rquGXpukoH8iOGDsQ9YgVuDmLnnF7zU",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "fir-auth-5321c",
  storageBucket: "fir-auth-5321c.appspot.com",
  messagingSenderId: "900600289612",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-F5CTXZ7DZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
