// pages/index.js
'use client'
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Middle School Mayhem</h1>
      <p>Welcome to your TV Show Hub</p>
      
      <div>
        <Link href="./season1">
          <button style={{ padding: '12px 20px', backgroundColor: '#333', color: '#fff', fontSize: '1.2em', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
            Season 1
          </button>
        </Link>
        <Link href="./season2">
          <button style={{ padding: '12px 20px', backgroundColor: '#333', color: '#fff', fontSize: '1.2em', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
            Season 2
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
