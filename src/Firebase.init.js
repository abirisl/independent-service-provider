// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASg9YF83Kuu-KAbRfwcwZ88uB97i3reJg",
  authDomain: "mh-tourist-website.firebaseapp.com",
  projectId: "mh-tourist-website",
  storageBucket: "mh-tourist-website.appspot.com",
  messagingSenderId: "669806672078",
  appId: "1:669806672078:web:46a8bdab5166ce719f389f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;