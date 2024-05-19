import React, { useState } from 'react';
import './Keypad.css';

interface KeypadProps {
  onSubmit: (amount: number) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');

  const handleButtonClick = (value: string) => {
    setAmount(prev => prev + value);
  };

  const handleClear = () => {
    setAmount('');
  };

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      onSubmit(numericAmount);
    }
  };

  return (
    <div className="keypad">
      <input type="text" value={amount} readOnly />
      <div className="keypad-buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
          <button key={num} onClick={() => handleButtonClick(num.toString())}>{num}</button>
        ))}
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </div>
  );
};

export default Keypad;
