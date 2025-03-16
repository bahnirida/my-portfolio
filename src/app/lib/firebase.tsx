import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔥 Configuration Firebase (remplace avec tes clés Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyC8L3PqUl5DpoH3_pdRbMlJq5sTuTWYEpg",
    authDomain: "portfolio-f9540.firebaseapp.com",
    projectId: "portfolio-f9540",
    storageBucket: "portfolio-f9540.firebasestorage.app",
    messagingSenderId: "1060923719529",
    appId: "1:1060923719529:web:680f1dc64b6463aabc87f8",
    measurementId: "G-25C644KT71"
};
// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db, collection, getDocs, addDoc, updateDoc, doc, deleteDoc,auth};

