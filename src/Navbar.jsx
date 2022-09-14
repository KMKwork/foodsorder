import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";

function Navbar() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <div class="container-fluid">
            <h4 class="navbar-brand" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
              </svg>
              <Link to="/" className="linkstyle">
                Food's Restarunt
              </Link>
            </h4>
            <h6 class="navbar">
              <Link to="/login" className="linkstyle">
                Login
              </Link>
            </h6>
            <h6 class="navbar">
              <Link to="/signup" className="linkstyle">
                Signup
              </Link>
            </h6>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" component={<Welcome />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
