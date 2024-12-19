"use client";
import styles from "../globals.css";

export default function Home() {    
  return (
    <div className="div1">
      <div className="content-wrapper">
        <div className="video-container">
          <h1>1.1 Early Computing</h1>
          <iframe
            className="div2"
            width="800"
            height="600"
            src="https://www.youtube.com/embed/O5nskjZ_GoI?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=2"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>

        <div className="document-container">
          <h2>Read the Document</h2>
          <iframe
            className="div2"
            width="800"
            height="600"
            src="https://docs.google.com/document/d/1gl43jQtidgKWolIR5x16mBojP1Rxgk03B2j39xEAxeg/view" // Template preview link
 // Embed link with template/preview
            allowFullScreen
            title="Document"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
