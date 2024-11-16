import Image from "next/image";
import styles from "./globals.css";
import MyLink from "./components/MyLink";
 
export default function Home() {
  return (
    <div className="mainDiv">
      <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap"
  />
</>

      <h1>Hello. I am Nitin Seelan.</h1>
      <div className="row">
        <div className="column">
          <h2>Coding</h2>
          <div className="btn34">
          <MyLink link="/python" imgsrc={"/pylogo.svg"}/>
          <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc={"/jslogo.png"}/>
          <MyLink link="https://nitinseelan.w3spaces.com/index.html" imgsrc={"/Swift.webp"}/>
          </div>
        </div>
        <div className="column">
          <h2>About</h2>
          <p>I code.</p>
        </div>
        <div className="column">
          <h2>My Other Sites and Channels</h2>
          <br/>
          <div className="btn34">
          <MyLink link="https://www.youtube.com/@nitinseelan" imgsrc="2.png"/>
          <MyLink link="https://www.youtube.com/@nitinseelantech" imgsrc="1.png"/>
</div>
        </div>
        <div className="row">
        <div className="column">
          <h2>Tools</h2>
          <MyLink link="/counter" imgsrc={"/Co.png"}/>
          <br/>
          <MyLink link="https://www.youtube.com/@nitinseelantech" text="Nitin Seelan Tech"/>
        </div>
        <div className="column">
          <h2>History</h2>
          <MyLink link="/worldhistory" text="World History"/>
          <br/>
          <MyLink link="/ushistory" text="U.S. History"/>
        </div>
        <div className="column">
          <h2>Other Accounts</h2>
          <MyLink link="https://replit.com/@nitin26" text="Replit"/>
          <br/>
          <MyLink link= "mailto:nitins.seelan@gmail.com" text="Email"/>
        </div>
      </div>
      <f1>Copyright Nitin Seelan 2024</f1>
    </div>
    </div>
    );
}
