import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      {/* ------------Navbar------------ */}
      <div className="navbar">
        {/* ------------navlogo------------ */}
        <div className="nav-logo">
          <img src="images/logo.png" width="125px" />
        </div>
        {/* ------------./navlogo------------ */}
        <nav>
          <ul className="MenuItem">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">Account</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* ------------./Navbar------------ */}
    </div>
  );
};
export default Navbar;
