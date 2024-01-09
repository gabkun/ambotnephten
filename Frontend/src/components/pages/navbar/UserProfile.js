// UserProfile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userID }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${userID}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching data. Please try again.');
        setLoading(false);
      }
    };

    fetchUserData(); // Call the function to fetch user data after login
  }, [userID]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userData ? (
        <div>
          <h2>User Profile</h2>
          <p>User ID: {userData.userID}</p>
          <p>Name: {userData.name}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
