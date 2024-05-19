import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProgressTracker from './ProgressTracker';
import Modal from './Modal';
import Keypad from './Keypad';
import './PaymentMethodPage.css';
import BackButton from './BackButton';

const PaymentMethodPage: React.FC = () => {
  const { pumpId } = useParams<{ pumpId: string }>();
  const steps = [`Pump ${pumpId}`, 'Select Payment Method'];

  const [isCashSelected, setIsCashSelected] = useState(false);
  const [cashInserted, setCashInserted] = useState<number | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isFueling, setIsFueling] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const handlePaymentClick = (method: string) => {
    if (method === 'cash') {
      setIsCashSelected(true);
      // Simulate cash insertion after 3 seconds
      setTimeout(() => {
        const insertedAmount = 50; // Simulate 50 euros inserted
        setCashInserted(insertedAmount);
        // Authorize fuel with inserted amount
        authorizeFuel(insertedAmount);
      }, 3000);
    } else if (method === 'card') {
      setIsCardModalOpen(true);
    } else {
      console.log(`Selected payment method: ${method}`);
      // Handle voucher payment logic here
    }
  };

  const authorizeFuel = (amount: number) => {
    console.log(`Authorizing fuel for ${amount} euros`);
    setTimeout(() => {
      setIsAuthorized(true);
      startFueling();
    }, 2000); // Simulate authorization time
  };

  const startFueling = () => {
    console.log('Starting fueling process');
    setIsFueling(true);
    // Add your logic to start fueling here
  };

  const handleCardSubmit = (amount: number) => {
    console.log(`Authorizing card for ${amount} euros`);
    setIsCardModalOpen(false);
    // Simulate card authorization after 2 seconds
    setTimeout(() => {
      authorizeFuel(amount);
    }, 2000);
  };

  return (
    <div className="payment-method-page">
      <Header />
      <ProgressTracker steps={steps} currentStep={1} />
      <main>
        <h2>Zgjedh metoden e pageses</h2>
        <div className="payment-methods">
          <button className="payment-method" onClick={() => handlePaymentClick('cash')}>
            <img src="/euro.png" alt="Cash" />
            <h3>Cash</h3>
          </button>
          <button className="payment-method" onClick={() => handlePaymentClick('card')}>
            <img src="/card.png" alt="Card" />
            <h3>Card</h3>
          </button>
          <button className="payment-method" onClick={() => handlePaymentClick('voucher')}>
            <img src="/voucher.png" alt="Voucher" />
            <h3>Voucher</h3>
          </button>
        </div>
        {isCashSelected && !isAuthorized && <p>Depono parate...</p>}
        {cashInserted !== null && !isAuthorized && <p>{cashInserted} euro u deponuan. Duke autorizuar...</p>}
        {isAuthorized && !isFueling && <p>Autorizimi perfundoi. Filloni mbushjen...</p>}
        {isFueling && <p>Duke u mbushur...</p>}
      </main>
      <Footer />
      <BackButton />
      <Modal isOpen={isCardModalOpen} onClose={() => setIsCardModalOpen(false)}>
        <h2>Sheno shumen</h2>
        <Keypad onSubmit={handleCardSubmit} />
      </Modal>
    </div>
  );
};

export default PaymentMethodPage;
