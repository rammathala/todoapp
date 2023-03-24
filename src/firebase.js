
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3qqc3P0qlMiOY6UjR8zjTqeeFbQVXzYg",
  authDomain: "todo-2d9ee.firebaseapp.com",
  projectId: "todo-2d9ee",
  storageBucket: "todo-2d9ee.appspot.com",
  messagingSenderId: "831856192200",
  appId: "1:831856192200:web:8786ac0667e4616cba53fd"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db ;