
const NavBar = () => {
    return(
        <div className = "topnav">
            <a href="/"> <img src="favicon.ico" alt="" height = "25px" width = "25px" /></a>
           <a href="/posts">Posts</a>
           {/*<a href="/about">EC Post</a>*/}
        </div>
    );
}

export default NavBar;