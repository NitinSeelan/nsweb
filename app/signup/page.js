'use client'
import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 
import AuthService from "../services/auth.service";
import { useRouter } from "next/navigation";

export default function Home() {
    const user = AuthService.getCurrentUser()
    const isLoggedIn = (user == null) ? false : true;
    const router = useRouter();

    if (isLoggedIn){
        console.log("is logged in. redirecting");
        router.push("/")
        return (<div></div>)
    }

    //some function to send our request:
    var handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value
        console.log(username);
        console.log(password);
        if (username === '' || password === '') {
            return;
        }

        AuthService.register(username, password)
        console.log("worked")
    }
    
    return(
        <div className="signupPage">
            <div className="signUpDiv">
            <div className="signup">            
                <h1>SignUp</h1>

                <form onSubmit={handleSubmit}>
                <input className="username" name="username" type="text" placeholder="Username"></input>
                <br/>
                <input className = "password" name="password" type="password" placeholder="Password"></input>
                <br/>

                <input className="submit" type="submit" value="SignUp"></input>
                </form>
            </div>
        </div>  
    </div>





    );


}