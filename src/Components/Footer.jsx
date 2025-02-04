import React, { useState } from 'react';
// import './Footer.css';

function Footer() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here (e.g., redirect to a search page)
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-address">
          <p>Christ Church</p>
          <p>123 Church St, Nellore, AP</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Search Section */}
        <div className="footer-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
