import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/ikona200.png" alt="Logo" className="logo" />
      <div className="language-switcher">
        <button>SQ</button>
        <button>EN</button>
        <button>SRB</button>
      </div>
    </header>
  );
};

export default Header;
