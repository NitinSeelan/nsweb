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

  return (
    <div className="bx">
       {/* Button to increase the count */}
      <button className="cbtn" id="add" onClick={handleAdd}>+</button>
      {/* Display the current count */}
    <div className="numdiv"id="number">{count}</div>
      {/* Button to decrease the count */}
      <button className="cbtn" id="minus" onClick={handleMinus}>-</button>
    </div>
  );
}
