
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewaiagent-9e6ce.firebaseapp.com",
  projectId: "interviewaiagent-9e6ce",
  storageBucket: "interviewaiagent-9e6ce.firebasestorage.app",
  messagingSenderId: "1044685506235",
  appId: "1:1044685506235:web:0f68b304f1543222694b9e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}