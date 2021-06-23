import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2OSMfuzjN8cTffrJEdhlP9LPngXTRmz0",
  authDomain: "letmeask-f51c3.firebaseapp.com",
  databaseURL: "https://letmeask-f51c3-default-rtdb.firebaseio.com",
  projectId: "letmeask-f51c3",
  storageBucket: "letmeask-f51c3.appspot.com",
  messagingSenderId: "490660067952",
  appId: "1:490660067952:web:47f103e5f173ae37f952b5",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, database, auth };
