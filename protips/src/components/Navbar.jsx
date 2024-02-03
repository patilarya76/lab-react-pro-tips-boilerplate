import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {

  return (
    <div className="navbar">
      <h1>
        <Link to={"/"} className="logo">
          Kalvium ❤️
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={"/contact"} className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="link">
           Registration Form
          </Link>
        </li>
      </ul>
    </div>
  );
}