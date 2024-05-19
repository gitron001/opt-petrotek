import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PaymentMethodPage from './components/PaymentMethodPage'; // Import the new component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment-method/:pumpId" element={<PaymentMethodPage />} /> {/* Add new route */}
      </Routes>
    </Router>
  );
};

export default App;
