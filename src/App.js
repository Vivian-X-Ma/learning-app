import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// npx create-react-app learning-app
// cd learning-app
// npm start

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Counter</h2>
      <p className="counter">Count: {count}</p>
      <div>
        <button className="button increment" onClick={increment}>Increment</button>
        <button className="button decrement" onClick={decrement}>Decrement</button>
        <button className="button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;