import "firebase/auth";
//import * as firebase from "firebase/app";
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBDqJxEPlRKcNP6PrMVKqiPnQnnVtHyiH0",
  authDomain: "auth-test-ecb76.firebaseapp.com",
  projectId: "auth-test-ecb76",
  storageBucket: "auth-test-ecb76.appspot.com",
  messagingSenderId: "1061959108069",
  appId: "1:1061959108069:web:7324c1ad0e9951400e5b0c",
  measurementId: "G-Q3Q70MN800"
} ;
/*
if (!firebase.apps.length) {
   firebase.initializeApp({});
}else {
   firebase.app(); // if already initialized, use that one
}*/
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;