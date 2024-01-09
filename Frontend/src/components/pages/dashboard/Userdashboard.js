import React, { useEffect, useState } from 'react';
import './userDashboard.css';
import axios from 'axios'; // Assuming you use Axios for HTTP requests  


const Userdashboard = ({ userID }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/dashboard/${userID}`);
        setUserData(response.data); // Assuming the response is an array or object with dashboard data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        let errorMessage = 'Error fetching data. Please try again.';
        if (error.response && error.response.status === 404) {
          errorMessage = 'User not found. Please check the userID.';
        } else if (error.message === 'Network Error') {
          errorMessage = 'Network error. Please check your internet connection.';
        }
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, [userID]);

  return (
    <div>
      <h2>User Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userData ? (
        <div>
          <h3>Welcome, {userData.username}</h3>
          <h4>User Information:</h4>
          <p>Email: {userData.email}</p>
          <h4>Enrolled Classes:</h4>
          <ul>
            {userData.enrolledClasses && userData.enrolledClasses.length > 0 ? (
              userData.enrolledClasses.map((item, index) => (
                <li key={index}>{item.class_name}</li>
              ))
            ) : (
              <li>No enrolled classes found</li>
            )}
          </ul>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Userdashboard;
