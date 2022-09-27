// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as view from "./view/index";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkWcmffsO4PQVHK5UGRGvgQLEpoF1sKzk",
  authDomain: "team2-e3d66.firebaseapp.com",
  projectId: "team2-e3d66",
  storageBucket: "team2-e3d66.appspot.com",
  messagingSenderId: "1079427721092",
  appId: "1:1079427721092:web:3361288f8440272b0fdfd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

view.setActiveScreen("signup");
