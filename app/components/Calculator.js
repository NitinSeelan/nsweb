'use client'
import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if(value === '=') {
      try {
        setResult(eval(result) || '');
      } catch (error) {
        setResult ('Error');
      }
    } else if (value === 'C') {
      setResult('');  
    } else if (value === 'CE') {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ textAlign: 'center', color: 'green' }}>Calculator</h1>
      <input 
        type="text" 
        value={result} 
        readOnly 
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          fontSize: '24px',
          textAlign: 'right',
          border: 'none',
          borderBottom: '1px solid #ccc',
          outline: 'none',
          backgroundColor: '#fff',
        }} 
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
      }}>
        <button 
          onClick={() => handleClick('7')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          7
        </button>
        <button 
          onClick={() => handleClick('8')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          8
        </button>
        <button 
          onClick={() => handleClick('9')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          9
        </button>
        <button 
          onClick={() => handleClick('CE')} 
          className="operator" 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#f0a500', fontWeight: 'bold' }}
        >
          CE
        </button>

        <button 
          onClick={() => handleClick('4')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          4
        </button>
        <button 
          onClick={() => handleClick('5')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          5
        </button>
        <button 
          onClick={() => handleClick('6')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          6
        </button>
        <button 
          onClick={() => handleClick('/')} 
          className="operator" 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#f0a500', fontWeight: 'bold' }}
        >
          ➗
        </button>

        <button 
          onClick={() => handleClick('1')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          1
        </button>
        <button 
          onClick={() => handleClick('2')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          2
        </button>
        <button 
          onClick={() => handleClick('3')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          3
        </button>
        <button 
          onClick={() => handleClick('*')} 
          className="operator" 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#f0a500', fontWeight: 'bold' }}
        >
          ✖️
        </button>

        <button 
          onClick={() => handleClick('0')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          0
        </button>
        <button 
          onClick={() => handleClick('.')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          .
        </button>
        <button 
          onClick={() => handleClick('00')} 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
        >
          00
        </button>
        <button 
          onClick={() => handleClick('-')} 
          className="operator" 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#f0a500', fontWeight: 'bold' }}
        >
  ➖
        </button>

        <button 
          onClick={() => handleClick('C')} 
          className="operator wide" 
          style={{
            gridColumn: 'span 2',
            padding: '15px',
            fontSize: '20px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: '#f0a500',
            color: 'white'
          }}
        >
          C
        </button>

        <button 
          onClick={() => handleClick('=')} 
          className="operator" 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#f0a500', fontWeight: 'bold' }}
        >
          =
        </button>

        <button 
          onClick={() => handleClick('+')} 
          className="operator" 
          style={{ padding: '15px', fontSize: '20px', border: 'none', outline: 'none', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#f0a500', fontWeight: 'bold' }}
        >
          ➕
        </button>
      </div>
    </div>
  );
}

export default Calculator;
