import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink";

export default function Info() {
  return (
    <div className="mainDiv">
    <div>Second Page</div>
    <MyLink link="https://www.youtube.com/@nitinseelantech" text="Nitin Seelan Tech"/>
    <MyLink link="https://nitinseelan.com" text="Nitin Seelan Website"/>
    </div>
  );
}
