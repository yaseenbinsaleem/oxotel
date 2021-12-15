import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  set,
  get,
  push,
  remove,
  ref,
  onValue,
  onChildAdded,
  child,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNTK1t0mM8pfA0N9LEBPSNgo94zDbYuVo",
    authDomain: "login-app-7858c.firebaseapp.com",
    databaseURL: "https://login-app-7858c-default-rtdb.firebaseio.com",
    projectId: "login-app-7858c",
    storageBucket: "login-app-7858c.appspot.com",
    messagingSenderId: "778820021197",
    appId: "1:778820021197:web:f010551500edaf167b7284",
    measurementId: "G-734PN20L4J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  set,
  push,
  remove,
  ref,
  onValue,
  onChildAdded,
  child,
  get,
};