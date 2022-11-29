import React from "react";
import logo from "../image/Logo.svg";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        {/* <!-- Navbar logo --> */}
        <div className="nav-header">
          <div className="nav-logo">
            <img src={logo} width="100%" height="100%" alt="logo" />
          </div>
        </div>

        {/* <!-- responsive navbar toggle button --> */}
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        {/* <!-- Navbar items --> */}
        <div className="nav-links">
          <div className="links">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials </a>
            <a href="#">Help</a>
          </div>
        </div>
        <div className="login-btns">
          <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
