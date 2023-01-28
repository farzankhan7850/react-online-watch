import React, { useState } from "react";
import './App.css';

function App() {
  const [time, setTime] = useState("0");
  const getTime = () => {
    let temp = new Date().toLocaleTimeString();
    setTime(temp.substring(0, 8));
  };

  setInterval(getTime, 1000);

  return (
    <div className="container">
    <p><u>Online watch</u></p>
      <h2>{time}</h2>
      <button>Get Time</button>
    </div>
  );
}

export default App;
