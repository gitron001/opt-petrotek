import React, { useState } from 'react';
import './FuelDispenser.css';

interface FuelDispenserProps {
  number: number;
  inUse: boolean;
  onSelect: (number: number) => void;
  highlightRed?: boolean;
  green?: boolean;
  yellow?: boolean;
}

const FuelDispenser: React.FC<FuelDispenserProps> = ({
  number,
  inUse,
  onSelect,
  highlightRed,
  green,
  yellow
}) => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleClick = () => {
    if (highlightRed) {
      setTooltip("E zene");
      setTimeout(() => setTooltip(null), 2000);
    } else if (yellow) {
      setTooltip("Duke mbushur");
      setTimeout(() => setTooltip(null), 2000);
    } else if (!inUse) {
      onSelect(number);
    }
  };

  const classNames = [
    'fuel-dispenser',
    inUse ? 'in-use' : '',
    highlightRed ? 'highlight-red' : '',
    green ? 'green' : '',
    yellow ? 'yellow' : ''
  ].join(' ').trim();

  return (
    <div className="fuel-dispenser-wrapper">
      {tooltip && <div className="tooltip">{tooltip}</div>}
      <button className={classNames} onClick={handleClick}>
        <span>{number}</span>
        <span>Pompa</span>
      </button>
    </div>
  );
};

export default FuelDispenser;
