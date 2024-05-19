import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackButton from './BackButton'; // Import the BackButton component

const SelectFuelPage: React.FC = () => {
  const { pumpId } = useParams<{ pumpId: string }>();

  return (
    <div className="select-fuel-page">
      <Header />
      <BackButton /> {/* Add the BackButton component */}
      <main>
        <h1>Select Fuel for Pump {pumpId}</h1>
        {/* Add your fuel selection logic here */}
      </main>
      <Footer />
    </div>
  );
};

export default SelectFuelPage;
