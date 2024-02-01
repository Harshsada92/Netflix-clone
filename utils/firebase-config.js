import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJRiT3fIs0AwS3Qh8YswdaSEK3WVDDG0s",
  authDomain: "react-netflix-clone-b32ba.firebaseapp.com",
  projectId: "react-netflix-clone-b32ba",
  storageBucket: "react-netflix-clone-b32ba.appspot.com",
  messagingSenderId: "305483726114",
  appId: "1:305483726114:web:ef61ebb0ca326e30f5797b",
  measurementId: "G-XC8LS8DRN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
