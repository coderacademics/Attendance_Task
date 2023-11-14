import React, { useState } from 'react';
import '../../CSS/navbar.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className={`hamburger ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span className="bar"></span>
        <span className={`bar ${isNavOpen ? '' : 'second'}`}></span>
        <span className={`bar ${isNavOpen ? '' : 'third'}`}></span>
      </div>
      <div className={`${isNavOpen ? 'nav-menu-open' : 'nav-menu-close'}`}>
        <div className="menu-item"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
          <path d="M 12 3.90625 L 11.75 4.0625 L 0.25 11.0625 L 0.75 11.9375 L 12 5.09375 L 23.25 11.9375 L 23.75 11.0625 L 20 8.78125 L 20 4 L 18 4 L 18 7.5625 L 12.25 4.0625 Z M 12 6.5 L 2 12.5 L 2 24 L 22 24 L 22 12.5 Z M 9 13 L 15 13 L 15 22 L 9 22 Z"></path>
        </svg> Summary Dashboard</div>
        <div className="menu-item"><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/attendance-mark.png" alt="attendance-mark" /> Attendance Tracking</div>
        <div className="menu-item"><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/private-wall-mount-camera--v2.png" alt="private-wall-mount-camera--v2" /> Behavioral Analytics</div>
        <div className="menu-item"><img width="35" height="35" src="https://img.icons8.com/glyph-neue/64/books.png" alt="books" /> Academic Performance Tracking</div>
      </div>
      <img className='profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/gender-neutral-user.png" alt="gender-neutral-user"/>
    </div>
  );
}

export default Navbar;
