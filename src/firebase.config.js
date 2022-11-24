

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAajCZzOByoGICH_yHY92tttf146EQWsF0",
  authDomain: "baseusuarios-1f3ed.firebaseapp.com",
  projectId: "baseusuarios-1f3ed",
  storageBucket: "baseusuarios-1f3ed.appspot.com",
  messagingSenderId: "966221041939",
  appId: "1:966221041939:web:e65c636085f2b09dad8ae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;