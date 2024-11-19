import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 

export default function Home() {
    return(
        <div className="uhdiv">
           <title>Nitin Seelan | U.S. History</title>
<h1>U.S. History</h1>
<MyLink className="ecclass" link="https://docs.google.com/presentation/d/1fWCOVQJ686gQqcZeb0Aho1QkDrCfKkCPh4I9z30o_Nw/edit#slide=id.p" imgsrc2={"/ecpro.jpg"}/>

</div>
    );
}