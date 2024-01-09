import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo1 from './img/logo.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Navbar() {
  const param = useParams();
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    window.alert('LOGOUT SUCCESS!');
    setIsLoggedIn(false);
    navigate('/');
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
  });

  const [id, setid] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/users/login/', formData);
      const data = response.data;
      const id = response.data.id;
      
  
      console.log(data); 
  
      if (data === 'Success') {
       
        window.alert('LOGGED IN.');
  
       
        setTimeout(() => {
          
          axios.get('http://localhost:3001/users/userDetails/${id}', id) 
            .then((userDetailsResponse) => {
              const userDetails = userDetailsResponse.data;
  
         
              if (userDetails.yearLevel === 'nursery') {
                navigate('/nursery');
              } else if (userDetails.yearLevel === 'kindergarten') {
                navigate('/kindergarten');
              } else if (userDetails.yearLevel === 'preschool') {
                navigate('/preschool');
              } else {
                navigate('/defaultLevel'); 
              }
  
              setIsLoggedIn(true);
            })
            .catch((error) => {
              console.error('Error fetching user details:', error);
            });
        }, 1000); 
      }
  
      toggleModal();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
          {isLoggedIn ? (
            <div className="dropdown">
              <button onClick={toggleDropdown} className="join-button">
                &#9662; Profile
              </button>
              {dropdownVisible && (
                <div className="dropdown-content">
                  <button onClick={() => navigate('/AccountSettings')}>Account Settings</button>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={toggleModal} className="join-button">
              Join Now
            </button>
          )}
        </div>

        {modal && (
          <div className='modal'>
            <div className='overlay' onClick={toggleModal}></div>
            <div className='modal-content'>
              <img src={logo1} className='modal-image' />
              <h1>MAG-ARAL E LEARNING</h1>

              <form onSubmit={handleSubmit}>
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="remember-me">
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <br />
                <button type="submit">Log In</button>
              </form>
              <br />
              <a href="/signup">No account, Sign in instead</a> <br />
              <a href="/AdminLogin">ADMIN HERE</a>
              <br />
              <button onClick={toggleModal} className='close-button'>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;