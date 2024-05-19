import React from 'react';
import './ProgressTracker.css';

interface ProgressTrackerProps {
  steps: (string | JSX.Element)[];
  currentStep: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps, currentStep }) => {
  return (
    <div className="progress-tracker">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index <= currentStep ? 'completed' : ''}`}>
          <div className="icon">
            {/* You can replace this with actual icons */}
            {index <= currentStep && <i className="fas fa-circle"></i>}
          </div>
          <div className="label">{step}</div>
          {index < steps.length - 1 && <div className="arrow">&rarr;</div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
