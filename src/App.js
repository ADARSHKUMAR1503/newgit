import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// import "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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
// const auth = firebase.auth();
// const firestore = firebase.firestore();
const db = getFirestore();

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const collectionsRef = collection(db, "posts");
    getDocs(collectionsRef)
      .then((snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.od });
        });
        setPosts(results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App ">
      <header className="bg-indigo-950  min-h-screen flex-col text-white">
        <h1 className="text-5xl">POSTS</h1>
        <div className="flex align-middle justify-center">
          <table class="table-auto  align-middle justify-center border-collapse border-spacing-2 border border-slate-500 p-5 bg-blue-700">
            <thead className="p-4">
              <tr className="p-3">
                <th className="border border-slate-600 p-3.5">User Name</th>
                <th className="border border-slate-600 p-3.5">Email ID</th>
                <th className="border border-slate-600 p-3.5">Created At</th>
              </tr>
            </thead>

            <tbody className="p-5">
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <tr className="p-3">
                    <td className="border border-slate-600 p-3">{post.name}</td>
                    <td className="border border-slate-600 p-3">
                      {" "}
                      {post.email}
                    </td>
                    <td className="border border-slate-600 p-3">
                      <i>{moment(post.createdAt.toDate()).calendar()}</i>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No posts available</p>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="border border-orange-300">
          <div className="flex flex-row align-middle justify-center space-x-10 p-3 m-3">
            <h3 className="text-orange-500 text-4xl">User Name</h3>
            <h3 className="text-orange-500 text-4xl">User Email</h3>
            <h3 className="text-orange-500 text-4xl">Created At</h3>
          </div>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div
                className="flex flex-row align-middle justify-center space-x-10 p-3 m-3"
                key={post.id}
              >
                <p className=" text-orange-200 text-xl textclass">
                  {post.name}
                </p>
                <p className="text-orange-200 text-xl"> {post.email}</p>
                <p className="text-orange-200 text-xl">
                  <i>{moment(post.createdAt.toDate()).calendar()}</i>
                </p>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div> */}
      </header>
    </div>
  );
}

export default App;
