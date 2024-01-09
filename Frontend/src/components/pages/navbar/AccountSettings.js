import React, { useState } from 'react';
import axios from 'axios';
import './AccountSettings.css';
import { useParams } from 'react-router-dom';

const AccountSettings = () => {
  const [email, setEmail] = useState('');
  const {id} = useParams();

  const handleNewEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/update/`+id, {email})
    .then(res => {
      console.log(res)
    })

     .catch(err => console.log(err));
  };

  return (
    <div className="account-settings-container">
      <form className="email-change-form" onSubmit={handleEmailChange}>
        <div className="input-group">
          <label htmlFor="newEmail">New Email:</label>
          <input
            type="email"
            id="newEmail"
            value={email}
            onChange={handleNewEmailChange}
          />
        </div>
        <button type="submit">Change Email</button>
      </form>
    </div>
  );
};

export default AccountSettings;