// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD6rquGXpukoH8iOGDsQ9YgVuDmLnnF7zU",
  authDomain: "fir-auth-5321c.firebaseapp.com",
  projectId: "fir-auth-5321c",
  storageBucket: "fir-auth-5321c.appspot.com",
  messagingSenderId: "900600289612",
  appId: "1:900600289612:web:64f17b92b2a475c321d7e9",
  measurementId: "G-F5CTXZ7DZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
