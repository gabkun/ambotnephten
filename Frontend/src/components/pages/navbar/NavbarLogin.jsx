import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo1 from './img/logo.png';
import axios from 'axios';

function NavbarLogin() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleAccountSettings = () => {
    // Handle Account Settings action or navigation
    // For example: navigate('/account-settings');
  };

  const handleDashboard = () => {
    // Handle Dashboard action or navigation
    // For example: navigate('/dashboard');
  };

  const handleLogout = () => {
    // Perform logout logic here (clear session, redirect to login, etc.)
    // For example: navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="image-container">
            <Link to="/">
              <img src={logo1} alt="ASDASDSA" />
            </Link>
          </div>
          <div className="brand-text">
            <Link to="/">MAG ARAL E-LEARNING</Link>
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/courses">COURSES</Link></li>
          <li><Link to="/pages">OUR TEAM</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
        <div className="join-now">
          <div className="dropdown">
            <button onClick={toggleDropdown} className="join-button">
              &#9662; {/* Unicode down arrow character */}
            </button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <button onClick={handleAccountSettings}>Account Settings</button>
                <button onClick={handleDashboard}>Dashboard</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLogin;
