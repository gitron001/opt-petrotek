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
    { number: 1, inUse: false },
    { number: 2, inUse: false },
    { number: 3, inUse: false },
    { number: 4, inUse: false },
    { number: 5, inUse: false },
    { number: 6, inUse: false },
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
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
