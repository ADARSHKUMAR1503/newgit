import moment from "moment";
import React from "react";
import "firebase/firestore";
import Form from "../components/Form";
import { useFetchCollection } from "../hooks/useFetchCollections";
import "../firebase/config";

function Home() {
  const { documents: posts } = useFetchCollection("posts");

  return (
    <div>
      <h1 className="text-5xl">POSTS</h1>
      <div className="flex justify-center p-4">
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full border-collapse border-spacing-2 border border-slate-500 bg-blue-700">
            <thead className="bg-blue-800">
              <tr>
                <th className="border border-slate-600 p-3.5 text-white">
                  User Name
                </th>
                <th className="border border-slate-600 p-3.5 text-white">
                  Email ID
                </th>
                <th className="border border-slate-600 p-3.5 text-white">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id}>
                    <td className="border border-slate-600 p-3 text-white">
                      {post.name}
                    </td>
                    <td className="border border-slate-600 p-3 text-white">
                      {post.email}
                    </td>
                    <td className="border border-slate-600 p-3 text-white">
                      <i>{moment(post.createdAt?.toDate()).calendar()}</i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="border border-slate-600 p-3 text-white text-center"
                  >
                    No posts available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Form />
    </div>
  );
}
export default Home;
