// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChpNYOTv4jPl9fZs9ji4GlBAxy8Ec9wrk",
  authDomain: "uniconnectgame.firebaseapp.com",
  projectId: "uniconnectgame",
  storageBucket: "uniconnectgame.firebasestorage.app",
  messagingSenderId: "230216272316",
  appId: "1:230216272316:web:4229d219804e5fd37283b9",
  measurementId: "G-04R5Z0MDXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };