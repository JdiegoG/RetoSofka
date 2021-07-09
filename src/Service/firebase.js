import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyA-iZVjzMHwUJjsepxDykmKUaoqWKgtnsE",
    authDomain: "retosofka.firebaseapp.com",
    projectId: "retosofka",
    storageBucket: "retosofka.appspot.com",
    messagingSenderId: "284774373556",
    appId: "1:284774373556:web:79c21d8cf9a5b4b8935fe1"
  };

export const FireAuth = firebase.initializeApp(config);
export const db = firebase.firestore();