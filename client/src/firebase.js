// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e2806.firebaseapp.com",
  projectId: "mern-blog-e2806",
  storageBucket: "mern-blog-e2806.appspot.com",
  messagingSenderId: "66101785569",
  appId: "1:66101785569:web:0f2b4f69eb8fe4b31f98a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

