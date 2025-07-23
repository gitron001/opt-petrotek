import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProgressTracker from './ProgressTracker';
import Modal from './Modal';
import Keypad from './Keypad';
import './PaymentMethodPage.css';
import BackButton from './BackButton';

const PaymentMethodPage: React.FC = () => {
  const { pumpId } = useParams<{ pumpId: string }>();
  const navigate = useNavigate();
  const steps = [`Pompa ${pumpId}`, 'Metoda e pageses'];

  const [isCashSelected, setIsCashSelected] = useState(false);
  const [cashInserted, setCashInserted] = useState<number | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isFueling, setIsFueling] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const handlePaymentClick = (method: string) => {
    if (method === 'cash') {
      setIsCashSelected(true);
      setTimeout(() => {
        const insertedAmount = 50;
        setCashInserted(insertedAmount);
        authorizeFuel(insertedAmount);
      }, 3000);
    } else if (method === 'card') {
      setIsCardModalOpen(true);
    } else {
      console.log(`Selected payment method: ${method}`);
    }
  };

  const authorizeFuel = (amount: number) => {
    console.log(`Authorizing fuel for ${amount} euros`);
    setTimeout(() => {
      setIsAuthorized(true);
      startFueling();
    }, 2000);
  };

  const startFueling = () => {
    console.log('Starting fueling process');
    setIsFueling(true);
  };

  const handleCardSubmit = (amount: number) => {
    console.log(`Authorizing card for ${amount} euros`);
    setIsCardModalOpen(false);
    setTimeout(() => {
      authorizeFuel(amount);
    }, 2000);
  };

  const handleBack = () => {
    // Optional: reset state or cancel logic
    navigate(-1);
  };

  return (
    <div className="payment-method-page">
      <Header />
      <ProgressTracker steps={steps} currentStep={1} />
      <main>
        {!isCashSelected && (
          <>
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
          </>
        )}

        {isCashSelected && !isAuthorized && (
          <div className="cash-screen">
            <div className="cash-content">
              <h3>Depono paratë dhe prisni per autorizim</h3>
              <img src="/depono.png" alt="Insert Cash" className="cash-image" />
              <div className="bill-note">
                <span>Aparati pranon vetem keto kartemonedha</span>
                
              </div>
            </div>
            <div className="cash-footer">
              <span>
                {new Date().toLocaleDateString('sq-AL')},{" "}
                {new Date().toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' })}
              </span>
              <button className="back-button" onClick={handleBack}>Kthehu</button>
            </div>
          </div>
        )}

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
