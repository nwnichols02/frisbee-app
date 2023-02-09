//------------------FirebaseAuth.js------------------
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC22izcQknRPy65Mw6ePRiHNzffI0yAFYc",
  authDomain: "frisbee-app-ab5fd.firebaseapp.com",
  projectId: "frisbee-app-ab5fd",
  storageBucket: "frisbee-app-ab5fd.appspot.com",
  messagingSenderId: "79226969314",
  appId: "1:79226969314:web:8a1243a4a77221902c52bb",
  measurementId: "G-HYJ8Q369Z9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
