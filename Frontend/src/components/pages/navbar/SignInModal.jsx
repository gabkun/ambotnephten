import React, { useState } from 'react';
import logo1 from './img/logo.png';
import './navbar.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function SignInModal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    yearLevel: 'nursery', 
    idNumber: '',
    age: ''
  });

  const generateRandomId = () => {
    const randomId = Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
    setFormData({ ...formData, idNumber: randomId.toString() });
  };
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    window.alert('SIGN UP SUCCESS!');
    try {
      const response = await axios.post('http://localhost:3001/users/add', formData);
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
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Middle Name:
          <input
            type="text"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Year Level:
          <select
            name="yearLevel"
            value={formData.yearLevel}
            onChange={handleChange}
          >
            <option value="nursery">Nursery</option>
            <option value="kindergarten">Kindergarten</option>
            <option value="preschool">Preschool</option>
          </select>
          
        </label>
        <br />
        <label>
        Id Number:
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
            disabled 
          />
          <button type="button" onClick={generateRandomId}>
            Generate ID
          </button>

        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
  
        <button type="submit">SIGN UP</button>
        <a href="/AdminModal">ADMIN SIGNIN</a>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;
