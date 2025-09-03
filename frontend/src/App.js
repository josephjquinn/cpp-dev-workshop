import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const getCounter = async () => {
    const response = await fetch("http://localhost:5000/api/counter");
    const data = await response.json();
    setCounter(data.counter);
  };

  const addOne = async () => {
    const response = await fetch(
      "http://localhost:5000/api/counter/increment",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setCounter(data.counter);
  };

  const minusOne = async () => {
    const response = await fetch(
      "http://localhost:5000/api/counter/decrement",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setCounter(data.counter);
  };

  const resetToZero = async () => {
    const response = await fetch("http://localhost:5000/api/counter/reset", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <div>
      <h1>Simple Counter</h1>

      <h2>Counter: {counter}</h2>

      <button onClick={addOne}>Add 1</button>
      <button onClick={minusOne}>Minus 1</button>
      <button onClick={resetToZero}>Reset</button>
      <button onClick={getCounter}>Refresh</button>

      <p>This counter is saved in a file on the server!</p>
    </div>
  );
}

export default App;
