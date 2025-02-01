import Image from "next/image";
import MyLink from "../components/MyLink";


export default function Home() {
  return (
    
    <div className="mainDivpost">
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <div className="header">
  <h1
          className="typewd"
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#000000", // Black text
            textAlign: "center",
            textShadow: "0px 0px 10px #ffffff, 0px 0px 20px #ffffff", // White glow
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
Popular        </h1>  
</div>
        <div className="card">
        <br/>
    <br/>

        <div className="btn34" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '10px', marginBottom: '10px'}}>

        <div style={{ textAlign: 'center', marginRight: '20px', background: 'black', borderRadius: '30px', color:"white"}}>
      <p>Production Studio Channel</p>
    </div>

    {/* Second MyLink with description */}
    <div style={{ textAlign: 'center', marginRight: '20px', background: 'black', borderRadius: '30px', color:"white"}}>
    <p>Production Studio Channel</p>

    </div>

    {/* Third MyLink with description */}
    <div style={{ textAlign: 'center', marginRight: '20px', background: 'black', borderRadius: '30px', color:"white"}}>
      <p>Production Studio Channel</p>
    </div>
        </div>
        <br/>
    <br/>
  

         <br/>
      </div>
      
  <div className="row">
  <h1
          className="typewd"
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#000000", // Black text
            textAlign: "center",
            textShadow: "0px 0px 10px #ffffff, 0px 0px 20px #ffffff", // White glow
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
        Recent
        </h1>      <div className="card">
        <h2>Why the Electoral College Should Be Removed</h2>
        <h5>Sunday, Dec 8, 2024</h5>
        <div className="fakeimg2">
       
        </div>
        <p>
        The Electoral College is the U.S.s system for the presidential election. Each state gets a number out of 538 votes based on its population and the candidate who gets 270 votes or more, wins.
        </p>
        <MyLink className = "btnec "link="/ecpost" text="Read More"/>
    </div>
    <div className="rightcolumn">
      <div className="card">
        <h2>About Me</h2>
        <p>I code in Swift, Python, and NextJS</p>
      </div>
     
      <div className="card">
        <h3></h3>
        <p><>
  {/* Add icon library */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* Add font awesome icons */}
  <a href="#" className="fa fa-youtube" />
</>
</p>
      </div>
    </div>
  </div>
  <div className="footer">
    <h2>Copyright 2024-2025 NitinSeelan</h2>
  </div>

    </div>
    
  );
};
