// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJCdrh53t2B1W_nlFf8FtVmLcOGM20S9E",
  authDomain: "private-route-with-ema-j-86a90.firebaseapp.com",
  projectId: "private-route-with-ema-j-86a90",
  storageBucket: "private-route-with-ema-j-86a90.appspot.com",
  messagingSenderId: "78121734789",
  appId: "1:78121734789:web:2f29feb181568f20cf0fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth