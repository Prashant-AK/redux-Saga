// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmU3zRjYiwCc1kWk9DI6aTZ61rm7WFRI8",
  authDomain: "assignment-bc023.firebaseapp.com",
  projectId: "assignment-bc023",
  storageBucket: "assignment-bc023.appspot.com",
  messagingSenderId: "964419786932",
  appId: "1:964419786932:web:fdb55ee9572183a2355fe1",
  measurementId: "G-JT7L3B2F1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// export default firebase;
