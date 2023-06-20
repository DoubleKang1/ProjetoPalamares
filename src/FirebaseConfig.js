// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSx-zcmW24fIP3rhrvx3O0sJfGfoskkvY",
    authDomain: "projetopalmaresrafael.firebaseapp.com",
    projectId: "projetopalmaresrafael",
    storageBucket: "projetopalmaresrafael.appspot.com",
    messagingSenderId: "679237455020",
    appId: "1:679237455020:web:36b712a2a272e44d4fe309"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };