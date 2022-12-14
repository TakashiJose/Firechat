import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCZBufrqwQgjDZDjCZgWEJRWFzzOWq-wx4",
    authDomain: "fire-7ddbe.firebaseapp.com",
    projectId: "fire-7ddbe",
    storageBucket: "fire-7ddbe.appspot.com",
    messagingSenderId: "839306518079",
    appId: "1:839306518079:web:6f60f17107d1b1e5d0a28a"
  }).auth();