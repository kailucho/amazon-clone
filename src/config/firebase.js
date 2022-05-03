import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClrtccJqatMbP5Ptc1r3Drw6bDmz5xxn8",
  authDomain: "clone-8d9f5.firebaseapp.com",
  projectId: "clone-8d9f5",
  storageBucket: "clone-8d9f5.appspot.com",
  messagingSenderId: "556623498382",
  appId: "1:556623498382:web:a8f38f48c2d8dcccb2cddf",
  measurementId: "G-J2CQC8N38Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
