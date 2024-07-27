import { useState } from "react";
import { Link, Redirect, useNavigate } from "react-router-dom";
import Logo from "../img/images.jpeg";
import useAuthentication from "../hooks/useAuthentication";

const loggedInUser = () => {
  return true;
};

const Title = () => (
  <a href="/">
    <img className="w-40 rounded-2xl h-32" alt="Logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { logout } = useAuthentication();
  const navigate = useNavigate();
  const handelLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <Title />
      <h1 className="text-3xl sm:text-5xl my-4 sm:my-0">E-WORLD</h1>
      <div className="w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row sm:space-x-4 mt-3 text-indigo-900 mr-5">
          <li className="my-2 sm:my-0">
            <Link
              className="bg-slate-400 w-full sm:w-16 h-10 rounded-md flex justify-center items-center"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="bg-slate-400 w-full sm:w-16 h-10 rounded-md my-2 sm:my-0">
            <Link
              className="bg-slate-400 w-full sm:w-16 h-10 rounded-md flex justify-center items-center"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="bg-slate-400 w-full sm:w-16 h-10 rounded-md my-2 sm:my-0">
            <Link
              className="bg-slate-400 w-full sm:w-16 h-10 rounded-md flex justify-center items-center"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="my-2 sm:my-0">
            {isLoggedIn ? (
              <Link to="/">
                <button
                  className="text-blue-100 text-sm h-12 w-full sm:w-16 bg-transparent border-solid border-2 border-sky-500 hover:bg-sky-700"
                  role="button"
                  onClick={() => {
                    // setIsLoggedIn(false);
                    handelLogout();
                  }}
                >
                  LogOut
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  className="text-blue-100 text-sm h-12 w-full sm:w-16 bg-transparent border-solid border-2 border-sky-500 hover:bg-sky-700"
                  role="button"
                  onClick={() => setIsLoggedIn(true)}
                >
                  LogIn
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
