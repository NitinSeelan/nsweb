'use client'
import React from 'react';

function MathGradeButtons() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Select Grade Level for Math</h1>
      <div>
        <button
          style={{
            fontSize: '18px',
            padding: '15px 30px',
            margin: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          4th Grade Math
        </button>
        <button
          style={{
            fontSize: '18px',
            padding: '15px 30px',
            margin: '10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e88e5')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#2196F3')}
        >
          5th Grade Math
        </button>
        <button
          style={{
            fontSize: '18px',
            padding: '15px 30px',
            margin: '10px',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#fb8c00')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF9800')}
        >
          6th Grade Math
        </button>
      </div>
    </div>
  );
}

export default MathGradeButtons;
