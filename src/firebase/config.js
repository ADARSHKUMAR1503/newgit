import { initializeApp } from "firebase/app";
import { getFirestore, getAnalytics } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnsKjHeLmcSxXDwQ4G1GVjS64ksDXDuiA",
  authDomain: "eworld-df9cf.firebaseapp.com",
  projectId: "eworld-df9cf",
  storageBucket: "eworld-df9cf.appspot.com",
  messagingSenderId: "40250135567",
  appId: "1:40250135567:web:b69e392297d35dfa6dff7a",
  measurementId: "G-ESH758R9CD",
};
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
