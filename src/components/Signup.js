import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setValidationError("Email cannot be empty");
      return;
    } else if (!password) {
      setValidationError("password cannot be empty");
      return;
    } else if (!name) {
      setValidationError("Name cannot be empty");
      return;
    }
    setValidationError(null);
    console.log({ name, email, password });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md text-black"
        onSubmit={handleSubmit}
      >
        <Link className="flex justify-end" to={"/login"}>
          <h3>LOGIN</h3>
        </Link>
        <h2 className="text-2xl font-bold mb-5 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
