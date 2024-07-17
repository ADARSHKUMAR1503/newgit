import React from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDnsKjHeLmcSxXDwQ4G1GVjS64ksDXDuiA",
  authDomain: "eworld-df9cf.firebaseapp.com",
  projectId: "eworld-df9cf",
  storageBucket: "eworld-df9cf.appspot.com",
  messagingSenderId: "40250135567",
  appId: "1:40250135567:web:b69e392297d35dfa6dff7a",
  measurementId: "G-ESH758R9CD",
});
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
