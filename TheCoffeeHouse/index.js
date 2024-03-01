// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPj4tk8qg96VXIHYPsosVuPQw14e80SS8",
  authDomain: "thecoffeehouse-f080d.firebaseapp.com",
  projectId: "thecoffeehouse-f080d",
  storageBucket: "thecoffeehouse-f080d.appspot.com",
  messagingSenderId: "478558755552",
  appId: "1:478558755552:web:418bef427bd54ebf6f4e85",
  measurementId: "G-8KVBZ5Q796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);