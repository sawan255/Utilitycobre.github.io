import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIZf3eVM2xL3Q4FwpGRXIFAc4_qCIOc14",
  authDomain: "utilitydamn.firebaseapp.com",
  projectId: "utilitydamn",
  storageBucket: "utilitydamn.firebasestorage.app",
  messagingSenderId: "109181511894",
  appId: "1:109181511894:web:14b61d527a8ed446c3c177",
  measurementId: "G-TVG2FLCK28",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
