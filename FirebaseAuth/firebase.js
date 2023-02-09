// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   connectAuthEmulator,
//   signOut,
// } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = initializeApp({
//   apiKey: "AIzaSyC22izcQknRPy65Mw6ePRiHNzffI0yAFYc",
//   authDomain: "frisbee-app-ab5fd.firebaseapp.com",
//   projectId: "frisbee-app-ab5fd",
//   storageBucket: "frisbee-app-ab5fd.appspot.com",
//   messagingSenderId: "79226969314",
//   appId: "1:79226969314:web:8a1243a4a77221902c52bb",
//   measurementId: "G-HYJ8Q369Z9",
// });

// // Initialize Firebase
// const auth = getAuth(firebaseConfig);
// connectAuthEmulator(auth, "http://localhost:9099");

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });

// export const loginEmailPassword = async (email, password) => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log(userCredential.user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createUser = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log(userCredential.user);
//   } catch (error) {
//     console.log(error);
//   }

//   // const user = userCredential.user;
//   // console.log(user);
// };

// export const monitorAuthState = async () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// };

// export const logout = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const analytics = getAnalytics(app);

// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
//   authDomain: "fir-auth-65294.firebaseapp.com",
//   projectId: "fir-auth-65294",
//   storageBucket: "fir-auth-65294.appspot.com",
//   messagingSenderId: "105428798939",
//   appId: "1:105428798939:web:49a9375f32ea94d4dfebfe",
// };

// // Initialize Firebase
// let app = firebase.initializeApp(firebaseConfig);

// const auth = firebase.getAuth(app);

// export { auth };

//------------------FirebaseAuth.js------------------
// import { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDSozUWZ06ZsNb67co6TyHKzWUXEHHCZek",
//   authDomain: "logicism-auth-4fd71.firebaseapp.com",
//   projectId: "logicism-auth-4fd71",
//   storageBucket: "logicism-auth-4fd71.appspot.com",
//   messagingSenderId: "769565354450",
//   appId: "1:769565354450:web:f478025bb20c9260b7800b",
// };

// const navigation = useNavigation();

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const storage = getStorage();

// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// export function logout() {
//   return signOut(auth);
// }

// // Custom Hook
// export function useAuth() {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
//     navigation.replace("Home");

//     return unsub;
//   }, []);

//   return currentUser;
// }

// // Storage
// export async function upload(file, currentUser, setLoading) {
//   const fileRef = ref(storage, currentUser.uid + ".png");

//   setLoading(true);

//   const snapshot = await uploadBytes(fileRef, file);
//   const photoURL = await getDownloadURL(fileRef);

//   updateProfile(currentUser, { photoURL });

//   setLoading(false);
//   alert("Uploaded file!");
// }

//------------------FirebaseAuth.js------------------

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // Import the functions you need from the SDKs you need
// // import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
//   authDomain: "fir-auth-65294.firebaseapp.com",
//   projectId: "fir-auth-65294",
//   storageBucket: "fir-auth-65294.appspot.com",
//   messagingSenderId: "105428798939",
//   appId: "1:105428798939:web:49a9375f32ea94d4dfebfe",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// // let app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// onAuthStateChanged(auth, (user) => {
//   // Check for user status
//   if (user) {
//     navigation.replace("Home");
//   } else {
//     navigation.replace("Login");
//   }
// });

// export { auth };

//------------------FirebaseAuth.js------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
// const analytics = getAnalytics(app);

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
