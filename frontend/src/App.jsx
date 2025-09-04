import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [serverMsg, setServerMsg] = useState("");

  const getCounter = async () => {
    const response = await fetch("http://localhost:3000/counter");
    const data = await response.json();
    setCounter(data.counter);
  };

  const getServerMsg = async () => {
    const response = await fetch("http://localhost:3000/msg");
    const message = await response.text();
    setServerMsg(message);
  };

  const addOne = async () => {
    const response = await fetch("http://localhost:3000/counter/increment", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  const minusOne = async () => {
    const response = await fetch("http://localhost:3000/counter/decrement", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  const resetToZero = async () => {
    const response = await fetch("http://localhost:3000/counter/reset", {
      method: "POST",
    });
    const data = await response.json();
    setCounter(data.counter);
  };

  useEffect(() => {
    getCounter();
    getServerMsg;
  }, []);

  return (
    <div>
      <h1>Change Plus Plus Workshop Counter</h1>

      <div>
        <h2>Server Message</h2>
        <p>{serverMsg}</p>
        <button onClick={getServerMsg}>Get Text</button>
      </div>

      <h2>Counter: {counter}</h2>

      <button onClick={addOne}>Add 1</button>
      <button onClick={minusOne}>Minus 1</button>
      <button onClick={resetToZero}>Reset</button>
      <button onClick={getCounter}>Refresh</button>
    </div>
  );
}

export default App;
