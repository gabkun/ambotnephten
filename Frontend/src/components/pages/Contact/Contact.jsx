import React, { useState } from 'react';
import './contact.css';
import image from './Img/image.png';

const Contact = () => {
  const [contactInfo] = useState({
    director: 'Gabriel B. Malanday',
    address: 'Bacolod City, 6100',
    phoneNumber: '+63 9222932404',
    email: 'Mag-Aral@gmail.com',
    website: 'www.Mag-Aral-elearning.com',
  });

  return (
    <div className="contact-us">
      <img
        src={image}  // Replace with your building image URL
        alt="Building"
        style={{ maxWidth: '100%' }}
      />
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Director</strong> <br></br>{contactInfo.director}
        </p>
        <p>
          <strong>Address</strong> <br></br>{contactInfo.address}
        </p>
        <p>
          <strong>Telephone Number</strong> <br></br>{contactInfo.phoneNumber}
        </p>
        <p>
          <strong>Email</strong> <br></br>{contactInfo.email}
        </p>
        <p>
          <strong>Website</strong> <br></br>{contactInfo.website}
        </p>
      </div>
    </div>
  );
};

export default Contact;