'use client'
import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 

export default function Home() {

    //some function to send our request:
    var handleSubmit = (event) => {
        event.preventDefault();
        console.log('tried login');
    }
    
    return(
        <div className="signUpDiv">
           <div className="signup">            
            <h1>SignUp for nitinseelan.com</h1>

            <form onSubmit={handleSubmit}>
            <input className="username" name="username" type="text" placeholder="Username"></input>
            <br/>
            <input className = "password" name="password" type="password" placeholder="Password"></input>
            <input className="submit" type="submit" value="➡️"></input>
            </form>
        </div>
</div>  





    );


}