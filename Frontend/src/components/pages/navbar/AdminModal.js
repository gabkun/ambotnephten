import React, { useState } from 'react';
import logo1 from './img/logo.png';
import './navbar.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function AdminModal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    window.alert('LOGIN SUCCESS!');
    try {
      const response = await axios.post('http://localhost:3001/ad/add', formData);
      console.log(response.data);

    } catch (error) 
    
    {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        // Handle error
      }
    }
    console.log('Form data submitted:', formData);
    navigate('/');

  };
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (
    <div className="modal">
      <div className='overlay' onClick={toggleModal}></div>
      <div className="modal-content">
        <img src={logo1} className='modal-image' alt="Logo" />
        <h1>MAG-ARAL E LEARNING</h1>

        <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
  
        <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default AdminModal;
