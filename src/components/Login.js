import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md text-black"
        onSubmit={handleSubmit}
      >
        <Link className="flex justify-end mb-4" to="/signup">
          <h3 className="text-blue-500">NEW USER</h3>
        </Link>
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
