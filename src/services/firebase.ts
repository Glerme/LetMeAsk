import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, database, auth };

// REACT_APP_API_KEY = "AIzaSyB2OSMfuzjN8cTffrJEdhlP9LPngXTRmz0";
// REACT_APP_AUTH_DOMAIN = "letmeask-f51c3.firebaseapp.com";
// REACT_APP_DATABASE_URL = "https://letmeask-f51c3-default-rtdb.firebaseio.com";
// REACT_APP_PROJECT_ID = "letmeask-f51c3";
// REACT_APP_STORAGE_BUCKET = "letmeask-f51c3.appspot.com";
// REACT_APP_MESSAGING_SENDER_ID = "490660067952";
// REACT_APP_APP_ID = "1:490660067952:web:47f103e5f173ae37f952b5";
