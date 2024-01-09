import React from 'react'
import './footer.css';

function footer() {
  return (
    <div className="footer">
        <ul className="footer-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <p>&copy; 2023 MAG-ARAL EDUC All Rights Reserved.</p>
    </div>
  )
}

export default footer