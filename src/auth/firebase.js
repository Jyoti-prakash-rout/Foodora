// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTrbvM8bkjBg6UYGI2uSTIrOQFoQ4Pms",
  authDomain: "foodora-5f879.firebaseapp.com",
  projectId: "foodora-5f879",
  storageBucket: "foodora-5f879.firebasestorage.app",
  messagingSenderId: "808608486204",
  appId: "1:808608486204:web:72d886d900975d2a2e4439",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
export const auth = getAuth(app);