'use client';

import Image from "next/image";
import styles from "./globals.css";
import MyLink from "./components/MyLink";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="mainDiv">
      <title>Nitin Seelan | Home</title>

      <div className="section">
        <h1 className="typed">Hello. I am Nitin Seelan</h1>
      </div>

      <div className="column">
        <h2>About</h2>
        <p>I code.</p>
        </div>

      <div className="column2">
        <h2>Coding</h2>
      
        <div className="btn34">
          <MyLink link="/python" imgsrc2={"/pylogo.svg"} />
          <MyLink
            link="https://nitinseelan.w3spaces.com/index.html"
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

      <div className="column3">
        <h2>My Other Sites and Channels</h2>
        <div className="btn34">
          <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc2="2.png" />
          <MyLink link="https://www.youtube.com/@nitinseelantech" imgsrc2="1.png" />
          <MyLink link="https://www.youtube.com/@NitinSeelanBonus" imgsrc2="4.png" />
        </div>
      </div>

      <div className="column4">
        <h2>Tools</h2>
        <MyLink link="/counter" imgsrc2={"/Co.png"} />
        <MyLink link="https://www.youtube.com/@nitinseelantech" text="Nitin Seelan Tech" />
      </div>

      <div className="column5">
        <div className="btn77">
          <MyLink link="/airplanes" imgsrc3={"/a380.png"} />
        </div>
      </div>

      <div className="column6">
        <h2>Other Accounts</h2>
        <MyLink link="https://replit.com/@nitin26" text="Replit" />
        <MyLink link="mailto:nitins.seelan@gmail.com" text="Email" />
      </div>

      <footer>
        <h4>Copyright Nitin Seelan 2024</h4>
      </footer>
    </div>
  );
}
