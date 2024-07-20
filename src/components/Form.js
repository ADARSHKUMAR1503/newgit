import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/config";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "posts");

    await addDoc(collectionRef, {
      userId: 1,
      name,
      email,
      // createdAt: serverTimestamp(),
    });
  };
  return (
    <>
      <div className="text-black flex justify-center p-3">
        <form
          className="flex flex-col p-3 w-full max-w-md place-content-center justify-center"
          onSubmit={handleSubmit}
        >
          <label className="p-2 text-white">
            Enter your name:
            <input
              className="text-black caret-pink-500 w-full p-2 mt-1 rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="p-2 text-white">
            Enter your email:
            <input
              className="text-black caret-pink-500 w-full p-2 mt-1 rounded"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button className="bg-cyan-600 mt-4 flex justify-center p-2 rounded text-white">
            CREATE
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
