
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCHJdqeRCs8cfOOwT7WMjJovDdiyYJw2TQ",
  authDomain: "auth-project-52ee4.firebaseapp.com",
  projectId: "auth-project-52ee4",
  storageBucket: "auth-project-52ee4.appspot.com",
  messagingSenderId: "760557953882",
  appId: "1:760557953882:web:ab3355f1b95dfb5a888963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {app, auth, db, storage}


