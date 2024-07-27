import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
const useAuthentication = () => {
  const [error, setError] = useState(null);
  const signup = ({ name, email, password }) => {
    // console.log("pre", email);
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;

        const docRef = doc(db, "users", user.uid);

        setDoc(docRef, { name });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const login = ({ email, password }) => {
    // console.log("pre", email);
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;

        console.log(user.uid);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const logout = () => {
    signOut(auth)
      .then((response) => {
        console.log("Successfully LogOut");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { signup, error, login, logout };
};

export default useAuthentication;
