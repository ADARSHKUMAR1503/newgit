import React from "react";
import "./App.css";
import moment from "moment";
import "firebase/firestore";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useFetchCollection } from "./hooks/useFetchCollections";
import Signup from "./components/Signup";
function App() {
  // const { documents: posts } = useFetchCollection("posts");
  return (
    <>
      <div className="App ">
        <header className="bg-indigo-950  min-h-screen  text-white">
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;
