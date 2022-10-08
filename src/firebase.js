// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBe85GFiZiNaIJ36FoDNnOv4jtxQ-SurTc",
    authDomain: "note-eab29.firebaseapp.com",
    projectId: "note-eab29",
    storageBucket: "note-eab29.appspot.com",
    messagingSenderId: "1074319979452",
    appId: "1:1074319979452:web:614dd46f6d45f632a3b1b9",
    measurementId: "G-YR6KEDDP2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;