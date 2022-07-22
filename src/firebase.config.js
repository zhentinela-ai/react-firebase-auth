// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq6fbG_Yowti0Va8ipTCa1UDuiAfX4U3o",
  authDomain: "react-fb-auth-66bb0.firebaseapp.com",
  projectId: "react-fb-auth-66bb0",
  storageBucket: "react-fb-auth-66bb0.appspot.com",
  messagingSenderId: "503870639814",
  appId: "1:503870639814:web:c7b5119abb99373d8151c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);