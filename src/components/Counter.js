import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onChangeNumber, clicks, onNewNumber, searchNumber }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <h3>Times the increment/decrement buttons have been clicked:<span>{clicks}</span></h3>
        <br />
        <input onChange={event => onNewNumber(event.target.value)} type="number" />
        <button onClick={() => onChangeNumber(searchNumber)}>Change Count Number</button>
      </div>
    </div>
  );
}


export default Counter;