// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnHHS5YNefczsycprGQ4jOTZksieAHd_8",
  authDomain: "globe-explorer-7129a.firebaseapp.com",
  projectId: "globe-explorer-7129a",
  storageBucket: "globe-explorer-7129a.appspot.com",
  messagingSenderId: "163230498068",
  appId: "1:163230498068:web:27bc287a3b016f19285601",
  measurementId: "G-ZE268W9VYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;