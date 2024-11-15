import React, { useState } from 'react';
import { Link } from 'react-router-dom';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <a href="#" className="logo">Reminder App </a>
      <nav className={`nav-links ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/">Words Reminder</Link></li>  { }
          <li><Link to="/coding" className="secound-nav">Code Reminder</Link></li>  { }
        </ul>
      </nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;