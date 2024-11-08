'use client';
import React, { useState, useEffect} from 'react';
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 

const LoginPage = () => {

    const[myInput, setMyInput] = useState("");

    const handleInputChange = (event) => {
        setMyInput(event.target.value);
    };

useEffect (() => {
    if (myInput === "coder") {
        console.log("hello");
    }
}, [myInput]); // Correctly placed closing bracket
return (

<div className={styles.container}>
    <input 
        type="text"
        value={myInput}
        onChange={handleInputChange}
        placeholder="Enter something..."
        />
        </div>
);

};

export default LoginPage;
