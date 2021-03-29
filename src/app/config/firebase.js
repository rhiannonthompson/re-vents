import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6H5487R9Q1YNSbYbW0p1gireDTY-OxNg",
  authDomain: "revents-1d3c6.firebaseapp.com",
  databaseURL: "https://revents-1d3c6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "revents-1d3c6",
  storageBucket: "revents-1d3c6.appspot.com",
  messagingSenderId: "1044517116399",
  appId: "1:1044517116399:web:117cb10a5e0e662721be1a"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

