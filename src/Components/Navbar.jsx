import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <nav className="navbar">
          <div className="navbar-left">
            <img src="/assets/churchimg.jpeg" alt="Logo" className="logo" />
            <span className="church-name"><span className='christ'>CHRIST</span> CHURCH</span>
          </div>
          
          <div className="navbar-center">
        <ul className="nav-links">
          <li className="dropdown">
            <a href="/watch">WATCH</a>
            <div className="dropdown-content">
              <a href="/watch/sermons">Sermons</a>
              <a href="/watch/events">Events</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/about">ABOUT</a>
            <div className="dropdown-content">
              <a href="/about/mission">Mission</a>
              <a href="/about/team">Team</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/ministries">MINISTRIES</a>
            <div className="dropdown-content">
              <a href="/ministries/youth">Youth</a>
              <a href="/ministries/music">Music</a>
              <a href="/ministries/outreach">Outreach</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/next-step">NEXT STEP</a>
            <div className="dropdown-content">
              <a href="/next-step/baptism">Baptism</a>
              <a href="/next-step/membership">Membership</a>
            </div>
          </li>
          <li><a href="/give">GIVE</a></li>
        </ul>
      </div>
          <div className="navbar-right">
            <button className="guest-button">BE OUR GUEST</button>
          </div>
        </nav>

      );
    }
    
  


export default Navbar
