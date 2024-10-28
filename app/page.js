import Image from "next/image";
import styles from "./globals.css";
import MyLink from "./components/MyLink"; 

export default function Home() {
  return (
    <div className="mainDiv">
      <h1>Hello. I am Nitin Seelan.</h1>
      <div className="row">
        <div className="column">
          <h2>Coding</h2>
          <MyLink link="https://www.youtube.com/@nitinseelan" text="Swift"/>
          <MyLink link="https://www.youtube.com/@nitinseelan" text="Python"/>
          <MyLink link="https://nitinseelan.w3spaces.com/index.html" text="HTML/JavaScript/CSS"/>
        </div>
        <div className="column">
          <h2>About</h2>
          <p>I code.</p>
        </div>
        <div className="column">
          <h2>My Other Sites and Channels</h2>
          <br/>
          <MyLink link="https://www.youtube.com/@nitinseelan" text="Nitin Seelan"/>
        </div>
        <div className="row">
        <div className="column">
          <h2>Nitin Seelan Tech</h2>
          <MyLink link="https://www.youtube.com/@nitinseelantech" text="Latest Video"/>
          <br/>
          <MyLink link="https://www.youtube.com/@nitinseelantech" text="Nitin Seelan Tech"/>
        </div>
        <div className="column">
          <h2>Templates</h2>
          <p>lorem ipsum</p>
        </div>
        <div className="column">
          <h2>Tools</h2>
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
