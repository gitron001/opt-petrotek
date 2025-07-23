import React from 'react';
import Header from './Header';
import FuelDispenser from './FuelDispenser';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handlePumpSelect = (pumpNumber: number) => {
    navigate(`/payment-method/${pumpNumber}`);
  };

  const dispensers = [
    { number: 1, inUse: false, green: true },
    { number: 2, inUse: false, green: true },
    { number: 3, inUse: true, highlightRed: true },
    { number: 4, inUse: true, highlightRed: true },
    { number: 5, inUse: true, yellow: true },
    { number: 6, inUse: true, yellow: true },
    { number: 7, inUse: true },
    { number: 8, inUse: true },
  ];

  return (
    <div className="home-page">
      <Header />
      <main>
        <h1>Zgjedh pompen:</h1>
        <div className="fuel-dispensers">
          {dispensers.map((dispenser) => (
            <FuelDispenser
            key={dispenser.number}
            number={dispenser.number}
            inUse={dispenser.inUse}
            onSelect={handlePumpSelect}
            highlightRed={dispenser.highlightRed}
            green={dispenser.green}
            yellow={dispenser.yellow}
          />          
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
