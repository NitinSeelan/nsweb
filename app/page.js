import Image from "next/image";
import styles from "./globals.css";
import MyLink from "./components/MyLink"; 

export default function Home() {
  return (
    <div className="mainDiv">
      <h1>WELCOME</h1>
      <div className="row">
        <div className="column">
          <h2>column</h2>
          <p>lorem ipsum</p>
        </div>
        <div className="column">
          <h2>About</h2>
          <p>lorem ipsum</p>
        </div>
        <div className="column">
          <h2>My Other Sites and Channels</h2>
          <MyLink link="https://www.youtube.com/@nitinseelantech" text="Nitin Seelan Tech"/>
          <br/>
          <MyLink link="https://www.youtube.com/@nitinseelan" text="Nitin Seelan"/>
        </div>
        <div className="row">
        <div className="column">
          <h2>Nitin Seelan Tech</h2>
          <iframe width="420" height="315"src="https://youtu.be/wUsXJ6bRtGc?autoplay=1&mute=1"></iframe>
        </div>
        <div className="column">
          <h2>About</h2>
          <p>lorem ipsum</p>
        </div>
        <div className="column">
          <h2>My Other Sites and Channels</h2>
          <MyLink link="https://www.youtube.com/@nitinseelantech" text="Nitin Seelan Tech"/>
          <br/>
          <MyLink link="https://www.youtube.com/@nitinseelan" text="Nitin Seelan"/>
        </div>
      </div>
      <f1>Copyright Nitin Seelan 2024</f1>
    </div>
    </div>
    );
}
