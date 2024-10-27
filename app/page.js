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
      </div>
      <f1>Copyright Nitin Seelan 2024</f1>
    </div>
  );
}
