import React from "react";
import "./App.css";
import moment from "moment";
import "firebase/firestore";
import { useFetchCollection } from "./hooks/useFetchCollections";
import Form from "./components/Form";
function App() {
  const { documents: posts } = useFetchCollection("posts");
  return (
    <div className="App ">
      <header className="bg-indigo-950  min-h-screen  text-white">
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
                      <i>{moment(post.createdAt?.toDate()).calendar()}</i>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No posts available</p>
              )}
            </tbody>
          </table>
        </div>
        <Form />
      </header>
    </div>
  );
}

export default App;
