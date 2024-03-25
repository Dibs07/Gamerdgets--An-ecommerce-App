// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvvMz-6DHuuxXJvcLbk7WM_7pNqODaTBE",
  authDomain: "gamerdgets.firebaseapp.com",
  projectId: "gamerdgets",
  storageBucket: "gamerdgets.appspot.com",
  messagingSenderId: "440395094723",
  appId: "1:440395094723:web:cfe76fae8a372293f0a076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }