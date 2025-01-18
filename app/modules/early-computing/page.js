'use client'
import { useRef, useState, useEffect } from "react";
import "../../globals.css";
import MyLink from "../../components/MyLink";

export default function Home() {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const playerInstance = new YT.Player(videoRef.current, {
        events: {
          onReady: (event) => {
            setPlayer(playerInstance);
            setDuration(playerInstance.getDuration());
          },
          onStateChange: () => {
            updateTime(); // Sync time on state change
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onload = onYouTubeIframeAPIReady;
      document.body.appendChild(tag);
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  const updateTime = () => {
    if (player) {
      setCurrentTime(player.getCurrentTime());
    }
  };

  const handlePlay = () => {
    if (player) player.playVideo();
  };

  const handlePause = () => {
    if (player) player.pauseVideo();
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      const iframe = videoRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen(); // Firefox
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen(); // Chrome, Safari, and Opera
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen(); // IE/Edge
      }
      setIsFullscreen(true);
    }
  };

  const handleExitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  const handleSliderChange = (event) => {
    const newTime = parseFloat(event.target.value);
    if (player) {
      player.seekTo(newTime, true);
      setCurrentTime(newTime);
    }
  };

  return (
    <div
      className="whdiv"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        className="video-player-container"
        style={{
          position: "relative",
          width: isFullscreen ? "100vw" : "80%",
          height: isFullscreen ? "100vh" : "auto",
          maxWidth: "100%",
          backgroundColor: "#000",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          ref={videoRef}
          id="videoIframe"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/O5nskjZ_GoI?enablejsapi=1&controls=0"
          title="Early Computing: Crash Course Computer Science #1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div
          className="controls"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            padding: "10px 0",
          }}
        >
          <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <button
              onClick={handlePlay}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Play
            </button>
            <button
              onClick={handlePause}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Pause
            </button>
            <button
              onClick={handleFullscreen}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Fullscreen
            </button>
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSliderChange}
              style={{
                width: "100%",
                cursor: "pointer",
                accentColor: "#fff",
              }}
            />
            <div style={{ padding: "5px 10px", color: "#fff" }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
      {isFullscreen && (
        <button
          onClick={handleExitFullscreen}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          Exit Fullscreen
        </button>
      )}
    </div>
  );
}

// Helper function to format time
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
