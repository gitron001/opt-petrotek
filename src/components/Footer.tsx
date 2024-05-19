import React from 'react';
import './Footer.css';
import DateTime from './DateTime'; // Import the DateTime component

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <DateTime />
      </div>
      <div className="footer-right">
        <div>Diesel: 1,37 €/L</div>
        <div>Benzin: 1,41 €/L</div>
        <div>Gas: 0.69 €/L</div>
      </div>
    </footer>
  );
};

export default Footer;
