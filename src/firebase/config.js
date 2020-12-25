import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7KVpLNh2xtwHYCi60vI7XRGybRdOv3I0",
  authDomain: "udemy-vue-firebase-sites-62fb9.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-62fb9",
  storageBucket: "udemy-vue-firebase-sites-62fb9.appspot.com",
  messagingSenderId: "723855004784",
  appId: "1:723855004784:web:39f5b9b8a401c084b8d0b5",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore(); // firestore is a function therefore should always have '()'
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
