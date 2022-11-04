import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeZpL8qulggEJprKPfaKtr7a4IJ1XiTdY",
    authDomain: "business-clone.firebaseapp.com",
    projectId: "business-clone",
    storageBucket: "business-clone.appspot.com",
    messagingSenderId: "486915493957",
    appId: "1:486915493957:web:2ae03c233c7031f8c6532c",
    measurementId: "G-1XDY7T9SPD"
  };

// use this to initilaize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// use this for db
const db = firebaseApp.firestore();

// use this for the auth
const auth = firebase.auth();

// exports db and auth
export { db, auth };