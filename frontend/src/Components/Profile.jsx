import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Stock Broker Profile</h1>
      </div>
      <div className="content">
        <div className="profile-info">
          <h2>Personal Information</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div className="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-chart">
            {/* Chart component for portfolio visualization */}
          </div>
          <div className="portfolio-summary">
            <p>Total Holdings: $100,000</p>
            <p>Number of Stocks: 10</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Stock Broker Profile</p>
      </div>
    </div>
  );
}

export default Profile;
