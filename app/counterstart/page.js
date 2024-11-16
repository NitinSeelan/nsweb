import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink";
 
export default function Home() {
  return (
    <div className="mainDiv">
      {/* Links to preconnect to Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      />


      <div className="row">
      

        <div className="column2">
            <h1>Counter</h1>
          <img className="startimg" class="fit-picture" src="/counterstart.jpg" />
          <MyLink link="/counter" text="Start"/>
          <div className="btn34">
            
          </div>
        </div>
      </div>
    </div>
  );
}
