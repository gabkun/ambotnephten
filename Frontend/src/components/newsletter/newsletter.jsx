import React from "react";
import './Newsletter.css'; // You should create a separate CSS file for styling

function Newsletter() {
  return (
    <div className="newsletter-card">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest news and updates.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;