// pages/index.js
'use client'
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
    
  <div className="sidenav">
    <a href="/queen">Queen</a>
    <a href="/rhcp">RHCP</a>
    <a href="/hits">Hits</a>
  </div>
  {/* Page content */}
  <div className="main"></div>


  

    </div>
  );
};

export default HomePage;
