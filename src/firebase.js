// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5qCCCZSTQ5Q66Xlw1T5ISn-zaRgnmRA",
  authDomain: "tiktok-clone-abbb6.firebaseapp.com",
  projectId: "tiktok-clone-abbb6",
  storageBucket: "tiktok-clone-abbb6.appspot.com",
  messagingSenderId: "194320863732",
  appId: "1:194320863732:web:7dc934af28d861c68a69a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;