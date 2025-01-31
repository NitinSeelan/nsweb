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
  <iframe
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameBorder={0}
  height={450}
  style={{ width: "100%", maxWidth: 660, overflow: "hidden", borderRadius: 10 }}
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/playlist/90s-hits-top-100-songs/pl.44a4495927924a25ab206edbd50420a3"
/>
 

  

    </div>
  );
};

export default HomePage;
