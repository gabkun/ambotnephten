import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2>Welcome to Our E-Learning Platform for Primary Education</h2>
        <p>We are dedicated to revolutionizing education for primary students through interactive and engaging e-learning experiences.</p>
        <p>At our platform, we provide:</p>
        <div className="features">
          <div className="feature">
            <span className="detail">Comprehensive and interactive online courses</span>
          </div>
          <div className="feature">
            <span className="detail">Engaging multimedia content tailored for young learners</span>
          </div>
          <div className="feature">
            <span className="detail">Access to a user-friendly interface for both students and educators</span>
          </div>
          <div className="feature">
            <span className="detail">Supportive resources to assist student learning and progress</span>
          </div>
        </div>
        <p>Why Choose Us?</p>
        <p>Our commitment to quality education, combined with cutting-edge technology, makes us the ideal choice for young learners. We strive to create a dynamic learning environment that fosters growth and curiosity.</p>
        <div className="buttons">
          <a href="/courses" className="button primary-button">Explore Courses</a>
          <a href="/signup" className="button secondary-button">Sign Up Now</a>
        </div>
      </div>
    </div>
  );
}

export default About;