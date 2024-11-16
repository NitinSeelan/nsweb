'use client'
import { useState } from "react";
import styles from "../globals.css"; // Assuming you have styles in this file

export default function Home() {
  // Using React's useState hook to track count
  const [count, setCount] = useState(0);

  // Update the count value
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleTimes = () => {
    setCount(count * 2);
  };
  const handleDivide = () => {
    setCount(count/2);
  };
  const handlesqrt = () => {
    setCount(Math.sqrt(count));
  };

  const handleReset =() => {
    setCount(0);
  };
  return (
    <div className="bx">
          <div className="numdiv"id="number">{count}</div>
          {/* Button to decrease the count */}
       {/* Button to increase the count */}
      <button className="cbtn" id="add" onClick={handleAdd}>➕</button>
      {/* Display the current count */}
      <button className="cbtn" id="minus" onClick={handleMinus}>➖</button>
      <button className="cbtn" id="times" onClick={handleTimes}>✖️</button>
      <button className="cbtn" id="divide" onClick={handleDivide}>➗</button>
      <button className="cbtn" id="sqrt" onClick={handlesqrt}>√</button>
      <button className="cbtn" id="Reset" onClick={handleReset}>🔄</button>
    </div>
  );
}
