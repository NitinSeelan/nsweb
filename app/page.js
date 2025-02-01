'use client';

import Image from "next/image";
import styles from "./globals.css";
import MyLink from "./components/MyLink";

export default function Home() {
  return (
    <div className="mainDiv">
      <title>Nitin Seelan | Home</title>
      <div className="columnwrap">
      <div className="column">
      <br/>
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
        <p>I code in Swift, Python, and React(JavaScript, HTML, and CSS)</p>
        <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc2={"/nsfull.webp"} />
      </div>
      </div>
      <div className="columnwrap">

      <div className="column2">
        <h2>Coding</h2>
      
        <div className="btn34">
          <MyLink link="/python" imgsrc2={"/pylogo.svg"} />
          <MyLink
            link="/swift"
            imgsrc2={"/Swift.webp"}
          />
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
<div className="columnwrap">

      <div className="column3">
  <h2>My Other Sites and Channels</h2>
  <div className="btn34" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    
    {/* First MyLink with description */}
    <div style={{ textAlign: 'center', marginRight: '20px' }}>
      <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc2="logo3.png" />
      <p>Main Channel</p>
    </div>

    {/* Second MyLink with description */}
    <div style={{ textAlign: 'center', marginRight: '20px' }}>
      <MyLink link="https://www.youtube.com/@nitinseelantech" imgsrc2="1.png" />
      <p>Tech Channel</p>
    </div>

    {/* Third MyLink with description */}
    <div style={{ textAlign: 'center', marginRight: '20px' }}>
      <MyLink link="https://www.youtube.com/@NitinSeelanStudios" imgsrc2="1.jpg" />
      <p>Production Studio Channel</p>
    </div>

    {/* Fourth MyLink with description */}
    <div style={{ textAlign: 'center' }}>
      <MyLink link="https://www.youtube.com/@FlySkyJet" imgsrc2="flyskyjet.png" />
      <p>Airplane Channel</p>
    </div>

  </div>
</div>
</div>

<div className="columnwrap">
      <div className="column4">
        <h2>Tools</h2>
        <MyLink link="/counter" imgsrc2={"/Co.png"} />
      </div>

      </div>
      <div className="columnwrap">
      <div className="column5">
        <div className="btn77">
          {/* Apply the fly-plane class to the A380 image */}
          <MyLink link="/airplanes" imgsrc3={"/a380.png"} className="fly-plane" />
          <MyLink link="/airplanes" imgsrc3={"/a320.png"} />
        </div>
      </div>
</div>
<div className="columnwrap">

      <div className="column6">
        <h2>Other Accounts</h2>
        <MyLink link="https://replit.com/@nitin26" text="Replit" />
        <br/>
        <MyLink link="mailto:nitins.seelan@gmail.com" text="Email" />
      </div>
</div>

<footer className="footer">
        <h4>Copyright Nitin Seelan 2024-2025</h4>
      </footer>
    </div>
  );
}
