/* global firebase */

import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjs2B6npr4H5IZWWkysRJ6FeEe3d_JIg4",
  authDomain: "eshop-f2eea.firebaseapp.com",
  projectId: "eshop-f2eea",
  storageBucket: "eshop-f2eea.appspot.com",
  messagingSenderId: "401336885662",
  appId: "1:401336885662:web:5956a87fb1c5a685bf368f",
  measurementId: "G-6VYSHVBST0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
