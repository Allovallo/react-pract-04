import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Збільшити
      </button>
      <button type="button" onClick={onDecrement}>
        Зменшити
      </button>
    </div>
  );
};

export default Controls;
