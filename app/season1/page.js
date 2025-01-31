// pages/season1.js
'use client'
import React, { useState } from 'react';

const Season1Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const episodes = [
    { title: 'Bouncing Off the Rim', videoUrl: 'https://www.youtube.com/embed/z8x8dwQkDMY' },
    { title: 'Run for Your Life', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Lunchtime Lunacy', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Like, Subscribe, and Chaos', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      <h1>Season 1</h1>
      <div>
        {episodes.map((episode, index) => (
          <button key={index} onClick={() => openModal(episode.videoUrl)}>
            {episode.title}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div>
          {currentVideo.includes("youtube.com") ? (
            <iframe src={currentVideo} title="Episode Video" />
          ) : (
            <video src={currentVideo} controls autoPlay />
          )}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Season1Page;
