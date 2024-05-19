import React from 'react';
import './FuelDispenser.css';

interface FuelDispenserProps {
  number: number;
  inUse: boolean;
  onSelect: (number: number) => void;
}

const FuelDispenser: React.FC<FuelDispenserProps> = ({ number, inUse, onSelect }) => {
  const handleClick = () => {
    if (!inUse) {
      onSelect(number);
    }
  };

  return (
    <button className={`fuel-dispenser ${inUse ? 'in-use' : ''}`} onClick={handleClick} disabled={inUse}>
      <span>{number}</span>
      <span>Pompa</span>
    </button>
  );
};

export default FuelDispenser;
