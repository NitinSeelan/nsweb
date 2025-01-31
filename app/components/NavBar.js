'use client'
import React from 'react';
import AuthService from "../services/auth.service";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const NavBar = () => {
    const user = AuthService.getCurrentUser()
    const isLoggedIn = (user == null) ? false : true
    const router = useRouter();

    return(
        <div className = "topnav">
            <a href="/"> <img src="../favicon.ico" alt="" height = "25px" width = "25px" /></a>
            <a href="/posts">Posts</a>
            <a href="/python">Python</a>
            <a href="/counter">Counter</a>
            {isLoggedIn ? (
                <React.Fragment>
                    <div className='logbar'>
                    <a href="/profile"> <Image 
                        src="/logo3.png" 
                        alt="Logo" 
                        width={25} 
                        height={25} 
                        priority 
                    /></a>
                    <button className="logoutButton" 
                        onClick={() => {
                            AuthService.logout();
                            router.push("/"); // Redirect to login page after logout
                            window.location.reload();
                        }}>
                        Logout
                    </button>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <a href="/signup">SignUp</a>
                    <a href="/login">Login</a>
                </React.Fragment>
            )}
        </div>
    );
}

export default NavBar;