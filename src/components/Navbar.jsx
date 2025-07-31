import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleProfileClick = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogout = () => {
    alert("Logged out!");
    setShowLogout(false);
    // You can add real logout logic here
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/RevironLogo.png" alt="Logo" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/collector">Collector</Link>
        <Link to="/tester">Tester</Link>
        <Link to="/seller">Seller</Link>
        <Link to="#">Contact Us</Link>
      </div>

      <div className="nav-icons">
        <div className="profile-container">
          <span onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            👤
          </span>
          {showLogout && (
            <div className="logout-dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
