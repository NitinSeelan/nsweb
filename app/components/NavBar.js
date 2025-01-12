'use client'
import React from 'react';
import AuthService from "../services/auth.service";
import Image from 'next/image';

const NavBar = () => {
    const user = AuthService.getCurrentUser()
    const isLoggedIn = (user == null) ? false : true
    console.log(user)

    return(
        <div className = "topnav">
            <a href="/"> <img src="./logo3.png" alt="" height = "25px" width = "25px" /></a>
            <a href="/posts">Posts</a>
            <a href="/python">Python</a>
            <a href="/counter">Counter</a>
            {isLoggedIn ? (
                <React.Fragment>
                    <a href="/airplanes">Airplanes</a>
                    <div className='logbar'>
                      <a href="/profile"> <Image 
        src="/logo3.png" 
        alt="Logo" 
        width={25} 
        height={25} 
        priority 
      /></a>
                    <a href="/login">
                    <button 
                className="logoutButton" 
                onClick={() => {
                    AuthService.logout();
                    router.push("/"); // Redirect to login page after logout
                }}
            >
                Logout
            </button>
                    </a>
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