import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink";

export default function Home() {
  return (
    <div className="mainDiv2">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n* {\n  box-sizing: border-box;\n}\n\n/* Add a gray background color with some padding */\nbody {\n  font-family: Arial;\n  background: #f1f1f1;\n}\n\n/* Header/Blog Title */\n.header {\n  padding: 30px;\n  font-size: 40px;\n  text-align: center;\n  background: white;\n}\n\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {   \n  float: left;\n  width: 75%;\n}\n\n/* Right column */\n.rightcolumn {\n  float: left;\n  width: 25%;\n  padding-left: 20px;\n}\n\n/* Fake image */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Add a card effect for articles */\n.card {\n   background-color: white;\n   padding: 20px;\n   margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n  margin-top: 20px;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {   \n    width: 100%;\n    padding: 0;\n  }\n}\n'
    }}
  />
  <div className="header">
    <h2>Nitin Seelan Posts</h2>
  </div>
  <div className="row">
    <div className="leftcolumn">
      <div className="card">
        <h2>Why the Electoral College Should Be Removed</h2>
        <h5>Sunday, Dec 8, 2024</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>
        The Electoral College is the U.S.s system for the presidential election. Each state gets a number out of 538 votes based on its population and the candidate who gets 270 votes or more, wins.
        </p>
        <MyLink className = "btnec "link="/ecpost" text="Read More"/>

      </div>
    </div>
    <div className="rightcolumn">
      <div className="card">
        <h2>About Me</h2>
        <div className="fakeimg" style={{ height: 100 }}>
          Image
        </div>
        <p>I code.</p>
      </div>
      <div className="card">
        <h3>Popular Post</h3>
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
      </div>
      <div className="card">
        <h3>Subscribe</h3>
        <p>youtube</p>
      </div>
    </div>
  </div>
  <div className="footer">
    <h2>Copyright 2024 nitinseelan</h2>
  </div>

    </div>
    
  );
};
