import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB36udG_e-l7ELNxA5xqeAkVB9xa9oXLEg",

    authDomain: "epamil-60f63.firebaseapp.com",
  
    projectId: "epamil-60f63",
  
    storageBucket: "epamil-60f63.appspot.com",
  
    messagingSenderId: "995765152012",
  
    appId: "1:995765152012:web:4aaa4087efb0770ba34129"  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
export { app }