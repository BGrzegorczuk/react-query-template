import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="spin"
        >
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="6" stroke="gray" strokeWidth="2" fill="none" className="spin-reverse" />
        </svg>
      </div>
    </header>
  );
};

export default Header;