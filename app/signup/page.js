import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 

export default function Home() {
    return(
        <div className="signUpDiv">
           <div className="signup">            
            <h1>SignUp for nitinseelan.com</h1>

           <input className="username" type="text" placeholder="Username"></input>
           <br/>
           <input className = "password" type="password" placeholder="Password"></input>
           <input className="submit" type="submit" value="➡️"></input>
           
        </div>
</div>  





    );


}