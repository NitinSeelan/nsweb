import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink";
 
export default function Home() {
  return (
    <div className="mainDiv">
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
