import React, { useState } from 'react';
import './Header.css';
import cmsLogo from '../../assets/cmsLogo.png';
import complianceRoad from '../../assets/complianceLogo.jpeg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-container">
      <div className="header-images">
        <img src={cmsLogo} alt="CMS Logo" className="cms-logo" />
        <img src={complianceRoad} alt="Compliance Road Sign" className="compliance-image" />
      </div>
      <header className="form-header">
        <button>Home</button>
        <button>About ASETT</button>
        <button>Contact Us</button>
        <div className="support-dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Support ▾
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Asset Glossary</a>
          <a href="#">Frequently Asked Questions</a>
          <a href="#">User Manual</a>
        </div>
      )}
    </div>
        <div className="auth-buttons">
          <button><span className="icon-register"></span>Register</button>
          <button><span className="icon-login"></span>Login</button>
        </div>
      </header>
      <div className="form-number">Form Approved OMB No. 0938-0948</div>
    </div>
  );
};

export default Header; 