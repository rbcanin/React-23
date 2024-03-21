import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFPav9pdh07BYGfMzjlwte1AW1lIE1R78",
  authDomain: "miniblog-af286.firebaseapp.com",
  projectId: "miniblog-af286",
  storageBucket: "miniblog-af286.appspot.com",
  messagingSenderId: "989538989485",
  appId: "1:989538989485:web:1c344e1416b532c1905d24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
