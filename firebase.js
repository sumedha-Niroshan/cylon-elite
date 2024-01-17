import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATxh7xkDnmNf5L-0pwWngF-nSW3sAx7zk",
  authDomain: "ceylon-elite.firebaseapp.com",
  projectId: "ceylon-elite",
  storageBucket: "ceylon-elite.appspot.com",
  messagingSenderId: "356151999698",
  appId: "1:356151999698:web:a8916ece7a1bde503ec10b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
