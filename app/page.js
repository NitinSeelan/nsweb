"use client";

import Image from "next/image";
import styles from "./globals.css"; // Ensure correct path
import MyLink from "./components/MyLink";
import { useState, useEffect } from "react";

export default function Home() {
  const targetDate = new Date("March 1, 2025 10:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeRemaining(endTime) {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      return "EXPIRED";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }

  return (
    <div className="mainDiv">
      <title>Nitin Seelan | Home</title>

      

<div className="column0">{/* Countdown Timer */}
      <div style={{ 
  fontSize: "48px",
  fontWeight: "700",
  color: "#000000", // Black text
  textAlign: "center",
  textShadow: "0px 0px 10px #ffffff, 0px 0px 20px #ffffff", // White glow
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  marginBottom: "10px",
  backgroundColor: "dodgerblue"
}}>
  {timeLeft}<br/>Until Major Redesign
</div></div>
      <div className="columnwrap">
        <div className="column">
          <br />
          <h1
            className="typed"
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#000000", // Black text
              textAlign: "center",
              textShadow: "0px 0px 10px #ffffff, 0px 0px 20px #ffffff", // White glow
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              marginBottom: "20px",
            }}
          >
            Hello. I am Nitin Seelan
          </h1>
          <h2>About</h2>
          <p>I code in Swift, Python, and React (JavaScript, HTML, and CSS)</p>
          <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc2={"/nsfull.webp"} />
        </div>
      </div>

      {/* Coding Section */}
      <div className="columnwrap">
        <div className="column2">
          <h2>Coding</h2>
          <div className="btn34">
            <MyLink link="/python" imgsrc2={"/pylogo.svg"} />
            <MyLink link="/swift" imgsrc2={"/Swift.webp"} />
            <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc2={"/jslogo.png"} />
            <br />
            <iframe
              className="pjt1"
              src="https://replit.com/@nitin26/Hard-Quiz?embed=true"
              width="600"
              height="400"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Other Sites and Channels */}
      <div className="columnwrap">
        <div className="column3">
          <h2>My Other Sites and Channels</h2>
          <div className="btn34" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {[
              { link: "https://www.youtube.com/@nitinseelan", img: "logo3.png", text: "Main Channel" },
              { link: "https://www.youtube.com/@nitinseelantech", img: "1.png", text: "Tech Channel" },
              { link: "https://www.youtube.com/@NitinSeelanStudios", img: "1.jpg", text: "Production Studio Channel" },
              { link: "https://www.youtube.com/@FlySkyJet", img: "flyskyjet.png", text: "Airplane Channel" }
            ].map(({ link, img, text }) => (
              <div key={link} style={{ textAlign: "center", marginRight: "20px" }}>
                <MyLink link={link} imgsrc2={img} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="columnwrap">
        <div className="column4">
          <h2>Tools</h2>
          <MyLink link="/counter" imgsrc2={"/Co.png"} />
        </div>
      </div>

      {/* Other Accounts */}
      <div className="columnwrap">
        <div className="column6">
          <h2>Other Accounts</h2>
          <MyLink link="https://replit.com/@nitin26" text="Replit" />
          <br />
          <MyLink link="mailto:nitins.seelan@gmail.com" text="Email" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h4>Copyright Nitin Seelan 2024-2025</h4>
      </footer>
    </div>
  );
}
