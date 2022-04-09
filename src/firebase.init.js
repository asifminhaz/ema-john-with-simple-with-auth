// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUyAxiKxj3TrHRn4r-Frjh6QfEu6LdLaI",
  authDomain: "ema-john-simple-7eb4f.firebaseapp.com",
  projectId: "ema-john-simple-7eb4f",
  storageBucket: "ema-john-simple-7eb4f.appspot.com",
  messagingSenderId: "693846255843",
  appId: "1:693846255843:web:7cffe7604a533633cc3dd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;