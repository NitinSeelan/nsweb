'use client'
import React from 'react';
import AuthService from "../services/auth.service";

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
            <a href="/comingsoon">Airplanes</a>
            {isLoggedIn ? (
                <React.Fragment>
                    <a href="/signup">Profile</a>
                    <a href="/login">Logout</a>
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