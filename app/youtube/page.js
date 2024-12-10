//  "use client";

// import { useRef, useState } from "react";

// export default function Home() {
//   // Ref to the video element
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute
 

//   // State to track button text
//   const [buttonText, setButtonText] = useState("Pause");

//   // Function to toggle video play/pause and update button text
//   const handleVideoToggle = () => {
//     const video = videoRef.current;
//     if (video.paused) {
//         video.play();
//         setButtonText("⏸️"); // Update button text dynamically
//       } else {
//         video.pause();
//         setButtonText("▶️");
//       }
//     };

//     const toggleMute = () => {
//         const video = videoRef.current;
    
//         if (isMuted) {
//           video.muted = false; // Unmute the video
//           setIsMuted(false); // Update state to reflect unmuted status
//         } else {
//           video.muted = true; // Mute the video
//           setIsMuted(true); // Update state to reflect muted status
//         }
//       };

//   return (
//     <div className="mainDiv3">
        
//       <video
//         autoPlay
//         muted={isMuted}
//         loop
//         id="myVideo"
//         ref={videoRef}
//         width="400"
//         >


//         Your browser does not support the video tag.
      
//       </video>

//       * Content and Button 
//       <div className="content">
//       <button id="myBtn">{'<'}</button>

//         {/* Button text controlled by state
//         <button id="myBtn" onClick={handleVideoToggle}>
//           {buttonText}
//         </button>
//         <button id="myBtn" onClick={toggleMute}>
//           {isMuted ? "🔇":"🔊"}
//         </button>
//       </div>
//     </div>
//   );
// };