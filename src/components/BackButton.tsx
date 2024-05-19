import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button className="back-button" onClick={handleClick}>
      &larr; Back
    </button>
  );
};

export default BackButton;
