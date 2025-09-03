import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [helloMessage, setHelloMessage] = useState("");

  const getCounter = async () => {
    const response = await fetch("http://localhost:5000/counter");
    const data = await response.json();
    setCounter(data.counter);
  };

  const getHelloMessage = async () => {
    const response = await fetch("http://localhost:5000/hello");
    const message = await response.text();
    setHelloMessage(message);
  };

  const addOne = async () => {
    const response = await fetch("http://localhost:5000/counter/increment", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  const minusOne = async () => {
    const response = await fetch("http://localhost:5000/counter/decrement", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  const resetToZero = async () => {
    const response = await fetch("http://localhost:5000/counter/reset", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  useEffect(() => {
    getCounter();
    getHelloMessage();
  }, []);

  return (
    <div>
      <h1>Simple Counter</h1>

      <div>
        <h2>Hello Message</h2>
        <p>{helloMessage}</p>
        <button onClick={getHelloMessage}>Get Text</button>
      </div>

      <h2>Counter: {counter}</h2>

      <button onClick={addOne}>Add 1</button>
      <button onClick={minusOne}>Minus 1</button>
      <button onClick={resetToZero}>Reset</button>
      <button onClick={getCounter}>Refresh</button>

      <p>This counter is stored in server memory!</p>
    </div>
  );
}

export default App;
