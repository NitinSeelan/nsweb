'use client'
import { useState } from "react";
import styles from "../globals.css"; // Import styles
import MyLink from "../components/MyLink"; 

export default function ChannelPage() {
  const [expandedVideo, setExpandedVideo] = useState(null); // State to track the expanded video
  const videos = [
    { id: "86axUCmR2E0", title: "Day 1 | Long Beach to Honolulu | Southwest 737 MAX 8" },
    { id: "osq0DV45U5A", title: "Santa Ana to San Jose | Southwest 737-700" },
    // Add more videos as needed
  ];

  // Function to handle video expansion
  const expandVideo = (videoId) => {
    setExpandedVideo(videoId); // Set the clicked video ID to be expanded
  };

  return (
    <div style={customStyles.pageContainer}>
      <h1 style={customStyles.header}>My YouTube Channel</h1>
      <div style={customStyles.videoList}>
        {videos.map((video) => (
          <div key={video.id} style={customStyles.videoItem}>
            <h3 style={customStyles.videoTitle}>{video.title}</h3>
            {expandedVideo === video.id ? (
              // Show expanded video
              <div style={customStyles.expandedVideoWrapper}>
                <iframe 
                  width="100%"  // Full width of the page
                  height="100%" // Full height of the page
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={customStyles.expandedIframeStyle}
                ></iframe>
              </div>
            ) : (
              // Show thumbnail with button to expand
              <div style={customStyles.videoWrapper}>
                <iframe 
                  width="640"  // Default size of the video
                  height="360" 
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1&showinfo=0`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={customStyles.iframeStyle}
                ></iframe>
                <button 
                  style={customStyles.videoButton} 
                  onClick={() => expandVideo(video.id)} // Expand video when clicked
                >
                  Watch Video
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styles for the channel page
const customStyles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000",
    color: "white",
    padding: "20px",
    overflow: "hidden", // Prevent scrolling when the video is expanded
  },
  header: {
    fontSize: "3rem",
    marginBottom: "30px",
  },
  videoList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",  // Increased gap between video items
    alignItems: "center",
  },
  videoItem: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#111",
    borderRadius: "10px",
    width: "80%",  // Set width of the video item container
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
  },
  videoTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  videoWrapper: {
    width: "100%",  // Ensures the iframe takes the full width
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  iframeStyle: {
    width: "100%",  // Makes the iframe responsive
    height: "auto",
    maxWidth: "100%",  // Prevents the video from overflowing
  },
  expandedVideoWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    zIndex: "1000",
  },
  expandedIframeStyle: {
    width: "100%",
    height: "100%",
  },
  videoButton: {
    padding: "10px 20px",
    backgroundColor: "#ff0000",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
};

