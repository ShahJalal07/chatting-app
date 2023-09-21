// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC_dHqRCPx47l4vqnBP0-0ixxF7AMmH98",
  authDomain: "soft-touch-app.firebaseapp.com",
  projectId: "soft-touch-app",
  storageBucket: "soft-touch-app.appspot.com",
  messagingSenderId: "841501004527",
  appId: "1:841501004527:web:6e220f291fc2a5b594011a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app