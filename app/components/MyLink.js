'use client';
import React, { useEffect, useState } from 'react';

const MyLink = ({ link, text, imgsrc, imgsrc2, imgsrc3 }) => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    // Open the link in a new tab
    window.open(link, '_blank');
  };

  useEffect(() => {
    if (imgsrc3) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Limit rotation to a maximum of 15 degrees counterclockwise (negative value)
        const newRotation = Math.min(scrollPosition / 10, 15); // Adjust divisor for smoother rotation
        setRotation(-newRotation); // Make the rotation negative to rotate left (counterclockwise)
      };

      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [imgsrc3]);

  if (imgsrc) {
    return (
      <button onClick={handleClick} className="linkDiv">
        <img src={imgsrc} width="50px" alt="Link Thumbnail" />
      </button>
    );
  }

  if (imgsrc2) {
    return (
      <button onClick={handleClick} className="linkDiv">
        <img src={imgsrc2} width="250px" alt="Link Thumbnail" />
      </button>
    );
  }

  if (imgsrc3) {
    return (
      <button
        onClick={handleClick}
        className="linkDiv"
        style={{ border: 'none', background: 'none' }}
      >
        <img
          src={imgsrc3}
          width="900px"
          style={{
            transform: `rotate(${rotation}deg)`, // Rotate counterclockwise
            transition: 'transform 0.05s linear', // Smooth rotation
          }}
          alt="Rotating Thumbnail"
        />
      </button>
    );
  }

  return (
    <button onClick={handleClick} className="linkDiv">
      <h3>{text}</h3>
    </button>
  );
};

export default MyLink;
